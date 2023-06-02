"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployVault = exports.deployFeederPool = exports.deployFasset = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const constants_1 = require("@utils/constants");
const math_1 = require("@utils/math");
const utils_1 = require("ethers/lib/utils");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./deploy-utils");
const etherscan_1 = require("./etherscan");
const networkAddressFactory_1 = require("./networkAddressFactory");
const signerFactory_1 = require("./signerFactory");
const deployFasset = async (sender, name, symbol, decimals = 18, initialMint = math_1.BN.from(500000)) => {
    // Implementation
    const impl = await deploy_utils_1.deployContract(new generated_1.MockInitializableToken__factory(sender), `MockInitializableToken with name ${name}, symbol ${symbol} and decimals ${decimals}`);
    // Initialization Data
    const data = impl.interface.encodeFunctionData("initialize", [name, symbol, decimals, await sender.getAddress(), initialMint]);
    // Proxy
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(sender), "AssetProxy", [impl.address, constants_1.DEAD_ADDRESS, data]);
    return new generated_1.MockERC20__factory(sender).attach(proxy.address);
};
exports.deployFasset = deployFasset;
const deployFeederPool = async (signer, feederData, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const feederManagerAddress = networkAddressFactory_1.getChainAddress("FeederManager", chain);
    const feederLogicAddress = networkAddressFactory_1.getChainAddress("FeederLogic", chain);
    // Invariant Validator
    const linkedAddress = {
        "contracts/feeders/FeederLogic.sol:FeederLogic": feederLogicAddress,
        "contracts/feeders/FeederManager.sol:FeederManager": feederManagerAddress,
    };
    let impl;
    let fpConstructorArgs;
    if (feederData.fAssetRedemptionPriceGetter) {
        // Update fAssetRedemptionPriceGetter price oracle
        await generated_1.IRedemptionPriceSnap__factory.connect(feederData.fAssetRedemptionPriceGetter, signer).updateSnappedPrice();
        fpConstructorArgs = [networkAddressFactory_1.getChainAddress("Nexus", chain), feederData.mAsset.address, feederData.fAssetRedemptionPriceGetter];
        impl = await deploy_utils_1.deployContract(new generated_1.NonPeggedFeederPool__factory(linkedAddress, signer), "NonPeggedFeederPool", fpConstructorArgs);
    }
    else {
        fpConstructorArgs = [networkAddressFactory_1.getChainAddress("Nexus", chain), feederData.mAsset.address];
        impl = await deploy_utils_1.deployContract(new generated_1.FeederPool__factory(linkedAddress, signer), "FeederPool", fpConstructorArgs);
    }
    await etherscan_1.verifyEtherscan(hre, {
        address: impl.address,
        constructorArguments: fpConstructorArgs,
        libraries: {
            FeederManager: feederManagerAddress,
            FeederLogic: feederLogicAddress,
        },
        contract: "contracts/feeders/FeederPool.sol:FeederPool",
    });
    // Initialization Data
    const mAsset = generated_1.Masset__factory.connect(feederData.mAsset.address, signer);
    const bAssets = await mAsset.getBassets();
    const mpAssets = bAssets.personal.map((bAsset) => bAsset.addr);
    console.log(`mpAssets. count = ${mpAssets.length}, list: `, mpAssets);
    console.log(`Initializing FeederPool with: ${feederData.name}, ${feederData.symbol}, mAsset ${feederData.mAsset.address}, fAsset ${feederData.fAsset.address}, A: ${feederData.config.a.toString()}, min: ${utils_1.formatEther(feederData.config.limits.min)}, max: ${utils_1.formatEther(feederData.config.limits.max)}`);
    const initializeData = impl.interface.encodeFunctionData("initialize", [
        feederData.name,
        feederData.symbol,
        {
            addr: feederData.mAsset.address,
            integrator: feederData.mAsset.integrator || constants_1.ZERO_ADDRESS,
            hasTxFee: false,
            status: 0,
        },
        {
            addr: feederData.fAsset.address,
            integrator: feederData.fAsset.integrator || constants_1.ZERO_ADDRESS,
            hasTxFee: false,
            status: 0,
        },
        mpAssets,
        feederData.config,
    ]);
    const feederPoolProxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "Feeder Pool Proxy", [
        impl.address,
        networkAddressFactory_1.getChainAddress("DelayedProxyAdmin", chain),
        initializeData,
    ]);
    // Create a FeederPool contract pointing to the deployed proxy contract
    return new generated_1.FeederPool__factory(linkedAddress, signer).attach(feederPoolProxy.address);
};
exports.deployFeederPool = deployFeederPool;
const deployVault = async (hre, vaultData) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const rewardsDistributorAddress = networkAddressFactory_1.getChainAddress("RewardsDistributor", chain);
    let vault;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let constructorArguments;
    if (vaultData.boosted) {
        if (vaultData.dualRewardToken) {
            constructorArguments = [
                networkAddressFactory_1.getChainAddress("Nexus", chain),
                vaultData.stakingToken,
                networkAddressFactory_1.getChainAddress("BoostDirector", chain),
                vaultData.priceCoeff,
                vaultData.boostCoeff,
                vaultData.rewardToken,
                vaultData.dualRewardToken,
            ];
            vault = await deploy_utils_1.deployContract(new generated_1.BoostedDualVault__factory(signer), "BoostedDualVault", constructorArguments);
        }
        else {
            constructorArguments = [
                networkAddressFactory_1.getChainAddress("Nexus", chain),
                vaultData.stakingToken,
                networkAddressFactory_1.getChainAddress("BoostDirector", chain),
                vaultData.priceCoeff,
                vaultData.boostCoeff,
                vaultData.rewardToken,
            ];
            vault = await deploy_utils_1.deployContract(new generated_1.BoostedVault__factory(signer), "BoostedVault", constructorArguments);
        }
    }
    else if (vaultData.dualRewardToken) {
        constructorArguments = [networkAddressFactory_1.getChainAddress("Nexus", chain), vaultData.stakingToken, vaultData.rewardToken, vaultData.dualRewardToken];
        vault = await deploy_utils_1.deployContract(new generated_1.StakingRewardsWithPlatformToken__factory(signer), "StakingRewardsWithPlatformToken", constructorArguments);
    }
    else {
        constructorArguments = [
            networkAddressFactory_1.getChainAddress("Nexus", chain),
            vaultData.stakingToken,
            networkAddressFactory_1.getChainAddress("BoostDirector", chain),
            vaultData.priceCoeff,
            vaultData.boostCoeff,
            vaultData.rewardToken,
        ];
        vault = await deploy_utils_1.deployContract(new generated_1.StakingRewards__factory(signer), "StakingRewards", constructorArguments);
    }
    await etherscan_1.verifyEtherscan(hre, {
        address: vault.address,
        constructorArguments,
        contract: "contracts/rewards/boosted-staking/BoostedDualVault.sol:BoostedDualVault",
    });
    const initializeData = vault.interface.encodeFunctionData("initialize", [rewardsDistributorAddress, vaultData.name, vaultData.symbol]);
    const proxyAdminAddress = networkAddressFactory_1.getChainAddress("DelayedProxyAdmin", chain);
    // Proxy
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy for vault", [
        vault.address,
        proxyAdminAddress,
        initializeData,
    ]);
    return vault.attach(proxy.address);
};
exports.deployVault = deployVault;
// const mint = async (sender: Signer, bAssets: DeployedFasset[], feederData: FeederData) => {
//     // e.e. $4e18 * 1e18 / 1e18 = 4e18
//     // e.g. 4e18 * 1e18 / 5e22 = 8e13 or 0.00008
//     const scaledTestQty = simpleToExactAmount(4).mul(simpleToExactAmount(1)).div(feederData.priceCoeff)
//     // Approve spending
//     const approvals: BN[] = []
//     // eslint-disable-next-line
//     for (const bAsset of bAssets) {
//         // eslint-disable-next-line
//         const dec = await bAsset.contract.decimals()
//         const approval = dec === 18 ? scaledTestQty : scaledTestQty.div(simpleToExactAmount(1, BN.from(18).sub(dec)))
//         approvals.push(approval)
//         // eslint-disable-next-line
//         const tx = await bAsset.contract.approve(feederData.pool.address, approval)
//         // eslint-disable-next-line
//         const receiptApprove = await tx.wait()
//         console.log(
//             // eslint-disable-next-line
//             `Approved FeederPool to transfer ${formatUnits(approval, dec)} ${bAsset.symbol} from ${await sender.getAddress()}. gas used ${
//                 receiptApprove.gasUsed
//             }`,
//         )
//     }
//     // Mint
//     console.log(
//         bAssets.map(() => scaledTestQty.toString()),
//         await Promise.all(
//             bAssets.map(async (b) => (await b.contract.allowance(await sender.getAddress(), feederData.pool.address)).toString()),
//         ),
//         await Promise.all(bAssets.map(async (b) => (await b.contract.balanceOf(await sender.getAddress())).toString())),
//         bAssets.map((b) => b.address),
//         (await feederData.pool.getBassets())[0].map((b) => b[0]),
//         await feederData.pool.mAsset(),
//     )
//     const tx = await feederData.pool.mintMulti(
//         bAssets.map((b) => b.address),
//         approvals,
//         1,
//         await sender.getAddress(),
//     )
//     const receiptMint = await tx.wait()
//     // Log minted amount
//     const mAssetAmount = formatEther(await feederData.pool.totalSupply())
//     console.log(
//         `Minted ${mAssetAmount} fpToken from ${formatEther(scaledTestQty)} Units for each [mAsset, fAsset]. gas used ${
//             receiptMint.gasUsed
//         }`,
//     )
// }
// const approveFeederWrapper = async (
//     sender: Signer,
//     feederWrapper: FeederWrapper,
//     feederPools: FeederPool[],
//     vaults: BoostedVault[],
// ): Promise<void> => {
//     // Get tokens to approve
//     const len = feederPools.length
//     // eslint-disable-next-line
//     for (let i = 0; i < len; i++) {
//         const [[{ addr: massetAddr }, { addr: fassetAddr }]] = await feederPools[i].getBassets()
//         const masset = Masset__factory.connect(massetAddr, sender)
//         const [bassets] = await masset.getBassets()
//         const assets = [massetAddr, fassetAddr, ...bassets.map(({ addr }) => addr)]
//         // Make the approval in one tx
//         const approveTx = await feederWrapper["approve(address,address,address[])"](feederPools[i].address, vaults[i].address, assets)
//         await logTxDetails(approveTx, "Approved FeederWrapper tokens")
//     }
// }
// export const deployBoostedFeederPools = async (deployer: Signer, addresses: CommonAddresses, pairs: Pair[]): Promise<void> => {
//     // 1.    Deploy boostDirector & Libraries
//     const start = await deployer.getBalance()
//     console.log(`\n~~~~~ PHASE 1 - LIBS ~~~~~\n\n`)
//     let director: BoostDirector
//     if (!addresses.boostDirector && addresses.boostDirector !== ZERO_ADDRESS) {
//         director = await deployContract(new BoostDirector__factory(deployer), "BoostDirector", [addresses.nexus, addresses.staking])
//         const directorInitTx = await director.initialize([])
//         await logTxDetails(directorInitTx, "Initializing BoostDirector")
//     } else {
//         director = BoostDirector__factory.connect(addresses.boostDirector, deployer)
//     }
//     const feederLibs = {
//         feederManager: addresses.feederManager,
//         feederLogic: addresses.feederLogic,
//     }
//     if (!addresses.feederManager || !addresses.feederLogic) {
//         const feederManager = await deployContract(new FeederManager__factory(deployer), "FeederManager")
//         const feederLogic = await deployContract(new FeederLogic__factory(deployer), "FeederLogic")
//         feederLibs.feederManager = feederManager.address
//         feederLibs.feederLogic = feederLogic.address
//     }
//     // 2.2   For each fAsset
//     //        - fetch fAsset & mAsset
//     const data: FeederData[] = []
//     // eslint-disable-next-line
//     for (const pair of pairs) {
//         const mAssetContract = MV2__factory.connect(pair.mAsset.address, deployer)
//         const fAssetContract = MockERC20__factory.connect(pair.fAsset.address, deployer)
//         const deployedMasset: DeployedFasset = {
//             integrator: ZERO_ADDRESS,
//             txFee: false,
//             contract: mAssetContract,
//             address: pair.mAsset.address,
//             symbol: pair.mAsset.symbol,
//         }
//         const deployedFasset: DeployedFasset = {
//             integrator: ZERO_ADDRESS,
//             txFee: false,
//             contract: fAssetContract,
//             address: pair.fAsset.address,
//             symbol: pair.fAsset.symbol,
//         }
//         data.push({
//             ...feederLibs,
//             nexus: addresses.nexus,
//             proxyAdmin: addresses.proxyAdmin,
//             mAsset: deployedMasset,
//             fAsset: deployedFasset,
//             aToken: pair.aToken,
//             name: `${deployedMasset.symbol}/${deployedFasset.symbol} Feeder Pool`,
//             symbol: `fP${deployedMasset.symbol}/${deployedFasset.symbol}`,
//             config: {
//                 a: pair.A,
//                 limits: {
//                     min: simpleToExactAmount(10, 16),
//                     max: simpleToExactAmount(90, 16),
//                 },
//             },
//             vaultName: `${deployedMasset.symbol}/${deployedFasset.symbol} fPool Vault`,
//             vaultSymbol: `v-fP${deployedMasset.symbol}/${deployedFasset.symbol}`,
//             priceCoeff: pair.priceCoeff,
//         })
//     }
//     //        - create fPool (nexus, mAsset, name, integrator, config)
//     // eslint-disable-next-line
//     for (const poolData of data) {
//         console.log(`\n~~~~~ POOL ${poolData.symbol} ~~~~~\n\n`)
//         console.log("Remaining ETH in deployer: ", formatUnits(await deployer.getBalance()))
//         // Deploy Feeder Pool
//         const feederPool = await deployFeederPool(deployer, poolData)
//         poolData.pool = feederPool
//         // Mint initial supply
//         // await mint(deployer, [poolData.mAsset, poolData.fAsset], poolData)
//         // Rewards Contract
//         if (addresses.boostDirector) {
//             const bal = await feederPool.balanceOf(await deployer.getAddress())
//             const vault = await deployBoostedVault(
//                 deployer,
//                 addresses,
//                 poolData.pool.address,
//                 poolData.priceCoeff,
//                 poolData.vaultName,
//                 poolData.vaultSymbol,
//                 bal,
//             )
//             poolData.vault = vault
//         }
//     }
//     // 3.    Clean
//     //        - initialize boostDirector with pools
//     console.log(`\n~~~~~ PHASE 3 - ETC ~~~~~\n\n`)
//     console.log("Remaining ETH in deployer: ", formatUnits(await deployer.getBalance()))
//     if (!addresses.boostDirector && addresses.boostDirector !== ZERO_ADDRESS) {
//         const directorInitTx = await director.initialize(data.map((d) => d.vault.address))
//         logTxDetails(directorInitTx, `Initializing BoostDirector for vaults: ${data.map((d) => d.vault.address)}`)
//     }
//     // - if aToken != 0: deploy Aave integrator & initialize with fPool & aToken addr
//     for (const poolData of data) {
//         if (poolData.aToken !== ZERO_ADDRESS) {
//             const integration = await deployContract(
//                 new AaveV2Integration__factory(deployer),
//                 `integration for ${poolData.symbol} at pool ${poolData.pool.address}`,
//                 [addresses.nexus, poolData.pool.address, addresses.aave, DEAD_ADDRESS],
//             )
//             const initTx = await integration.initialize([poolData.fAsset.address], [poolData.aToken])
//             await logTxDetails(initTx, `Initializing pToken ${poolData.aToken} for bAsset ${poolData.fAsset.address}...`)
//         }
//     }
//     // Deploy feederRouter
//     let feederWrapper: FeederWrapper
//     if (addresses.boostDirector !== ZERO_ADDRESS) {
//         if (!addresses.feederRouter) {
//             // Deploy FeederWrapper
//             feederWrapper = await deployContract<FeederWrapper>(new FeederWrapper__factory(deployer), "FeederWrapper")
//         } else {
//             feederWrapper = FeederWrapper__factory.connect(addresses.feederRouter, deployer)
//         }
//         await approveFeederWrapper(
//             deployer,
//             feederWrapper,
//             data.map((d) => d.pool),
//             data.map((d) => d.vault),
//         )
//     }
//     //        - deploy interestValidator
//     if (!addresses.interestValidator) {
//         await deployContract(new InterestValidator__factory(deployer), "InterestValidator", [addresses.nexus])
//     }
//     console.log(`\n~~~~~ 🥳 CONGRATS! Time for Phase 4 🥳 ~~~~~\n\n`)
//     // 4.    Post
//     //        -  Fund small amt to vaults
//     //        -  Add InterestValidator as a module
//     //        -  Fund vaults
//     console.log("Remaining ETH in deployer: ", formatUnits(await deployer.getBalance()))
//     const end = await deployer.getBalance()
//     console.log("Total ETH used: ", formatUnits(end.sub(start)))
// }
//# sourceMappingURL=feederUtils.js.map