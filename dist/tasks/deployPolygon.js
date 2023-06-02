"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zUsdBassets = void 0;
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const units_1 = require("@ethersproject/units");
const constants_1 = require("@utils/constants");
const math_1 = require("@utils/math");
const config_1 = require("hardhat/config");
require("ts-node/register");
require("tsconfig-paths/register");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const signerFactory_1 = require("./utils/signerFactory");
const tokens_1 = require("./utils/tokens");
// FIXME: this import does not work for some reason
// import { sleep } from "@utils/time"
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const sleepTime = 10000; // milliseconds
exports.zUsdBassets = [
    {
        name: "(PoS) USD Coin",
        symbol: "PoS-USDC",
        decimals: 6,
        integrator: constants_1.ZERO_ADDRESS,
        initialMint: 1000000,
    },
    {
        name: "(PoS) Dai Stablecoin",
        symbol: "PoS-DAI",
        decimals: 18,
        integrator: constants_1.ZERO_ADDRESS,
        initialMint: 1000000,
    },
    {
        name: "(PoS) Tether USD",
        symbol: "PoS-USDT",
        decimals: 6,
        integrator: constants_1.ZERO_ADDRESS,
        initialMint: 1000000,
    },
];
const deployBasset = async (signer, name, symbol, decimals = 18, initialMint = 500000) => {
    const signerAddress = await signer.getAddress();
    // Deploy Implementation
    const impl = await deploy_utils_1.deployContract(new generated_1.MockInitializableToken__factory(signer), `${symbol} impl`);
    // Initialization Implementation
    const data = impl.interface.encodeFunctionData("initialize", [name, symbol, decimals, signerAddress, initialMint]);
    // Deploy Proxy
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), `${symbol} proxy`, [impl.address, constants_1.DEAD_ADDRESS, data]);
    return new generated_1.MockERC20__factory(signer).attach(proxy.address);
};
const deployBassets = async (signer, bAssetsProps) => {
    const signerAddress = await signer.getAddress();
    const bAssets = [];
    let i = 0;
    // eslint-disable-next-line
    for (const basset of bAssetsProps) {
        const bAssetContract = await deployBasset(signer, basset.name, basset.symbol, basset.decimals, basset.initialMint);
        await sleep(sleepTime);
        const pTokenContract = await deploy_utils_1.deployContract(new generated_1.MockERC20__factory(signer), `pToken for ${basset.symbol}`, [
            `Aave Matic Market ${basset.name}`,
            `am${basset.symbol}`,
            basset.decimals,
            signerAddress,
            0,
        ]);
        bAssets.push({
            ...bAssetsProps[i],
            bAssetContract,
            pTokenContract,
        });
        i += 1;
    }
    return bAssets;
};
const attachBassets = (deployer, bAssetsProps, bAssetAddresses, pTokenAddresses) => {
    const bAssets = [];
    bAssetsProps.forEach((basset, i) => {
        const bAssetContract = new generated_1.MockERC20__factory(deployer).attach(bAssetAddresses[i]);
        const pTokenContract = new generated_1.MockERC20__factory(deployer).attach(pTokenAddresses[i]);
        bAssets.push({
            ...bAssetsProps[i],
            bAssetContract,
            pTokenContract,
        });
    });
    return bAssets;
};
const deployMasset = async (deployer, linkedAddress, nexus, delayedProxyAdmin, recolFee = math_1.simpleToExactAmount(5, 13)) => {
    const mAssetFactory = new generated_1.Masset__factory(linkedAddress, deployer);
    const impl = await deploy_utils_1.deployContract(mAssetFactory, "Masset Impl", [nexus.address, recolFee]);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(deployer), "Masset Proxy", [
        impl.address,
        delayedProxyAdmin.address,
        "0x", // Passing zero bytes as we'll initialize the proxy contract later
    ]);
    return mAssetFactory.attach(proxy.address);
};
const deployInterestBearingMasset = async (deployer, nexus, zUsd, unwrapper, delayedProxyAdmin, poker, symbol, name) => {
    const impl = await deploy_utils_1.deployContract(new generated_1.SavingsContract__factory(deployer), "SavingsContract Impl", [
        nexus.address,
        zUsd.address,
        unwrapper.address,
    ]);
    const initializeData = impl.interface.encodeFunctionData("initialize", [poker, name, symbol]);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(deployer), "SavingsContract Proxy", [
        impl.address,
        delayedProxyAdmin.address,
        initializeData,
    ]);
    return new generated_1.SavingsContract__factory(deployer).attach(proxy.address);
};
const deployAaveIntegration = async (deployer, nexus, mAsset, bAssetAddresses, pTokenAddresses, networkName) => {
    let platformAddress = constants_1.DEAD_ADDRESS;
    let rewardTokenAddress = constants_1.DEAD_ADDRESS;
    let rewardControllerAddress = constants_1.DEAD_ADDRESS;
    let quickSwapRouter = constants_1.DEAD_ADDRESS;
    if (networkName === "polygon_mainnet") {
        platformAddress = "0xd05e3E715d945B59290df0ae8eF85c1BdB684744"; // Aave lendingPoolAddressProvider
        rewardTokenAddress = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"; // wMatic
        rewardControllerAddress = "0x357D51124f59836DeD84c8a1730D72B749d8BC23"; // Aave AaveIncentivesController
        quickSwapRouter = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
    }
    const aaveIntegration = await deploy_utils_1.deployContract(new generated_1.PAaveIntegration__factory(deployer), "PAaveIntegration", [
        nexus.address,
        mAsset.address,
        platformAddress,
        rewardTokenAddress,
        rewardControllerAddress,
    ]);
    // initialize Aave integration with bAssets and pTokens
    console.log(`About to initialize Aave integration with bAssets ${bAssetAddresses} and pTokens ${pTokenAddresses}`);
    const tx = await aaveIntegration.initialize(bAssetAddresses, pTokenAddresses);
    await tx.wait();
    // Deploy Liquidator
    const liquidator = await deploy_utils_1.deployContract(new generated_1.PLiquidator__factory(deployer), "PLiquidator", [
        nexus.address,
        quickSwapRouter,
        mAsset.address,
    ]);
    return {
        integrator: aaveIntegration,
        liquidator,
    };
};
const mint = async (sender, bAssets, mAsset, scaledMintQty) => {
    const senderAddress = await sender.getAddress();
    // Approve spending
    const approvals = [];
    // eslint-disable-next-line
    for (const bAsset of bAssets) {
        const dec = bAsset.decimals;
        const approval = dec === 18 ? scaledMintQty : scaledMintQty.div(math_1.simpleToExactAmount(1, math_1.BN.from(18).sub(dec)));
        approvals.push(approval);
        const tx = await bAsset.bAssetContract.approve(mAsset.address, approval);
        const receiptApprove = await tx.wait();
        console.log(`Approved mAsset to transfer ${units_1.formatUnits(scaledMintQty)} ${bAsset.symbol} from ${senderAddress}. gas used ${receiptApprove.gasUsed}`);
        console.log(`Balance ${(await bAsset.bAssetContract.balanceOf(await sender.getAddress())).toString()}`);
    }
    // Mint
    const tx = await mAsset.mintMulti(bAssets.map((b) => b.bAssetContract.address), approvals, 1, await sender.getAddress(), { gasLimit: 8000000 });
    const receiptMint = await tx.wait();
    // Log minted amount
    const mAssetAmount = units_1.formatUnits(await mAsset.totalSupply());
    console.log(`Minted ${mAssetAmount} mAssets from ${units_1.formatUnits(scaledMintQty)} units for each bAsset. gas used ${receiptMint.gasUsed}`);
};
const save = async (sender, mAsset, imAsset, scaledSaveQty) => {
    console.log(`About to save ${units_1.formatUnits(scaledSaveQty)} mAssets`);
    await mAsset.approve(imAsset.address, scaledSaveQty);
    await imAsset["depositSavings(uint256)"](scaledSaveQty, { gasLimit: 8000000 });
    console.log(`Saved ${units_1.formatUnits(scaledSaveQty)} mAssets to interest bearing mAssets`);
};
config_1.task("deploy-polly", "Deploys zUSD & System to a Polygon network")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { network } = hre;
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const signerAddress = await signer.getAddress();
    // Deploy Nexus
    const nexus = await deploy_utils_1.deployContract(new generated_1.Nexus__factory(signer), "Nexus", [signerAddress]);
    // Deploy DelayedProxyAdmin
    const delayedProxyAdmin = await deploy_utils_1.deployContract(new generated_1.DelayedProxyAdmin__factory(signer), "DelayedProxyAdmin", [
        nexus.address,
    ]);
    await sleep(sleepTime);
    let deployedUsdBassets;
    let multiSigAddress;
    if (network.name === "hardhat") {
        multiSigAddress = signerAddress;
        // Deploy mocked base USD assets
        deployedUsdBassets = await deployBassets(signer, exports.zUsdBassets);
    }
    else if (network.name === "polygon_testnet") {
        multiSigAddress = "0xE1304aA964C5119C98E8AE554F031Bf3B21eC836"; // 1/3 Multisig
        // Attach to already deployed mocked bAssets
        deployedUsdBassets = attachBassets(signer, exports.zUsdBassets, [
            "0x4fa81E591dC5dAf1CDA8f21e811BAEc584831673",
            "0xD84574BFE3294b472C74D7a7e3d3bB2E92894B48",
            "0x872093ee2BCb9951b1034a4AAC7f489215EDa7C2", // Tether
        ], [
            "0xA2De18B8AE0450D918EA5Bf5890CBA5dD7055A4f",
            "0x85581E4BDeDB67840876DF20eFeaA6926dfFa11E",
            "0xAD209ADbCDF8B6917E69E6BcF9D05592388B8ada",
        ]);
    }
    else if (network.name === "polygon_mainnet") {
        multiSigAddress = "0x4aA2Dd5D5387E4b8dcf9b6Bfa4D9236038c3AD43"; // 4/8 Multisig
        // Attach to 3rd party bAssets
        deployedUsdBassets = attachBassets(signer, exports.zUsdBassets, [
            "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // Tether
        ], [
            "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
            "0x27F8D03b3a2196956ED754baDc28D73be8830A6e",
            "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
        ]);
    }
    await sleep(sleepTime);
    // Deploy mAsset dependencies
    const massetLogic = await deploy_utils_1.deployContract(new generated_1.MassetLogic__factory(signer), "MassetLogic");
    const managerLib = await deploy_utils_1.deployContract(new generated_1.MassetManager__factory(signer), "MassetManager");
    const linkedAddress = {
        "contracts/masset/MassetLogic.sol:MassetLogic": massetLogic.address,
        "contracts/masset/MassetManager.sol:MassetManager": managerLib.address,
    };
    // Deploy zUSD Masset
    const zUsd = await deployMasset(signer, linkedAddress, nexus, delayedProxyAdmin);
    await sleep(sleepTime);
    const { integrator, liquidator } = await deployAaveIntegration(signer, nexus, zUsd, deployedUsdBassets.map((b) => b.bAssetContract.address), deployedUsdBassets.map((b) => b.pTokenContract.address), network.name);
    const config = {
        a: 300,
        limits: {
            min: math_1.simpleToExactAmount(5, 16),
            max: math_1.simpleToExactAmount(75, 16),
        },
    };
    const txZusd = await zUsd.initialize("zUSD", "xZeno USD (Polygon PoS)", deployedUsdBassets.map((b) => ({
        addr: b.bAssetContract.address,
        integrator: network.name === "polygon_mainnet" ? integrator.address : constants_1.ZERO_ADDRESS,
        hasTxFee: false,
        status: 0,
    })), config, { gasLimit: 8000000 });
    console.log(`zUSD initialize tx ${txZusd.hash}`);
    const receiptZusd = await txZusd.wait();
    console.log(`zUSD initialize status ${receiptZusd.status} from receipt`);
    await sleep(sleepTime);
    const unwrapperFactory = await new generated_1.Unwrapper__factory(signer);
    const unwrapper = await unwrapperFactory.deploy(nexus.address);
    await sleep(sleepTime);
    // Deploy Interest Bearing zUSD
    const izUsd = await deployInterestBearingMasset(signer, nexus, zUsd, unwrapper, delayedProxyAdmin, constants_1.DEAD_ADDRESS, "izUSD", "Interest bearing xZeno USD (Polygon PoS)");
    await sleep(sleepTime);
    // Deploy Save Wrapper
    const saveWrapper = await deploy_utils_1.deployContract(new generated_1.SaveWrapper__factory(signer), "SaveWrapper");
    // Deploy Savings Manager
    const savingsManager = await deploy_utils_1.deployContract(new generated_1.SavingsManager__factory(signer), "SavingsManager", [
        nexus.address,
        zUsd.address,
        izUsd.address,
        math_1.simpleToExactAmount(9, 17),
        constants_1.ONE_DAY,
    ]);
    await sleep(sleepTime);
    // SaveWrapper contract approves the savings contract (izUSD) to spend its USD mAsset tokens (zUSD)
    await saveWrapper["approve(address,address)"](zUsd.address, izUsd.address);
    // SaveWrapper approves the zUSD contract to spend its bAsset tokens
    const bAssetAddresses = deployedUsdBassets.map((b) => b.bAssetContract.address);
    await saveWrapper["approve(address[],address)"](bAssetAddresses, zUsd.address);
    console.log("Successful token approvals from the SaveWrapper");
    await sleep(sleepTime);
    // Initialize Nexus Modules
    const moduleKeys = [constants_1.KEY_SAVINGS_MANAGER, constants_1.KEY_PROXY_ADMIN, constants_1.KEY_LIQUIDATOR];
    const moduleAddresses = [savingsManager.address, delayedProxyAdmin.address, liquidator.address];
    const moduleIsLocked = [false, true, false];
    const nexusTx = await nexus.connect(signer).initialize(moduleKeys, moduleAddresses, moduleIsLocked, multiSigAddress);
    const nexusReceipt = await nexusTx.wait();
    console.log(`Nexus initialize status ${nexusReceipt.status} from receipt`);
    await sleep(sleepTime);
    if (hre.network.name !== "polygon_mainnet") {
        await mint(signer, deployedUsdBassets, zUsd, math_1.simpleToExactAmount(20));
        await save(signer, zUsd, izUsd, math_1.simpleToExactAmount(15));
    }
    else if (hre.network.name === "polygon_mainnet") {
        // Multimint 2 USD and then save 4
        await mint(signer, deployedUsdBassets, zUsd, math_1.simpleToExactAmount(2));
        await save(signer, zUsd, izUsd, math_1.simpleToExactAmount(4));
    }
});
config_1.task("liquidator-snap", "Dumps the config details of the liquidator on Polygon")
    .addParam("asset", "Symbol of asset to get liquidation details for. eg USDC, PUSDC, DAI, GUSD, alUSD", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const asset = tokens_1.tokens.find((t) => t.symbol === taskArgs.asset && t.chain === chain);
    if (!asset)
        throw Error(`Could not find asset with symbol ${taskArgs.asset}`);
    const liquidatorAddress = networkAddressFactory_1.getChainAddress("Liquidator", chain);
    const liquidator = generated_1.PLiquidator__factory.connect(liquidatorAddress, signer);
    const liquidationConfig = await liquidator.liquidations(asset.integrator);
    console.log(liquidationConfig);
});
config_1.task("deploy-vizusd", "Deploy Polygon izUSD staking contract v-izUSD")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const proxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    const fundManagerAddress = networkAddressFactory_1.getChainAddress("FundManager", chain);
    const governorAddress = networkAddressFactory_1.getChainAddress("Governor", chain);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const rewardsDistributorAddress = networkAddressFactory_1.getChainAddress("RewardsDistributor", chain);
    const rewardsDistributor = rewardsDistributorAddress
        ? generated_1.RewardsDistributor__factory.connect(rewardsDistributorAddress, signer)
        : await deploy_utils_1.deployContract(new generated_1.RewardsDistributor__factory(signer), "RewardsDistributor", [
            nexusAddress,
            [fundManagerAddress, governorAddress],
        ]);
    const stakingRewardsImpl = await deploy_utils_1.deployContract(new generated_1.StakingRewardsWithPlatformToken__factory(signer), "StakingRewardsWithPlatformToken", [
        nexusAddress,
        tokens_1.PzUSD.savings,
        tokens_1.PZENO.address,
        tokens_1.PWMATIC.address,
        constants_1.ONE_DAY.mul(7), // 7 days
    ]);
    const initializeData = stakingRewardsImpl.interface.encodeFunctionData("initialize", [
        rewardsDistributor.address,
        "izUSD Vault",
        "v-izUSD",
    ]);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "Staking Rewards Proxy", [
        stakingRewardsImpl.address,
        proxyAdminAddress,
        initializeData,
    ]);
    const stakingRewards = generated_1.StakingRewardsWithPlatformToken__factory.connect(proxy.address, signer);
    console.log(`Name                ${await stakingRewards.name()}`);
    console.log(`Symbol              ${await stakingRewards.symbol()}`);
    console.log(`Duration            ${await stakingRewards.DURATION()}`);
    console.log(`Nexus               ${await stakingRewards.nexus()}`);
    console.log(`Staking token       ${await stakingRewards.stakingToken()}`);
    console.log(`Rewards token       ${await stakingRewards.rewardsToken()}`);
    console.log(`Platform token      ${await stakingRewards.platformToken()}`);
    console.log(`Rewards distributor ${await stakingRewards.rewardsDistributor()}`);
});
config_1.task("upgrade-vizusd", "Upgrade Polygon izUSD staking contract v-izUSD")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const rewardsDistributorAddress = networkAddressFactory_1.getChainAddress("RewardsDistributor", chain);
    const rewardsDistributor = generated_1.RewardsDistributor__factory.connect(rewardsDistributorAddress, signer);
    const stakingRewardsImpl = await deploy_utils_1.deployContract(new generated_1.StakingRewardsWithPlatformToken__factory(signer), "StakingRewardsWithPlatformToken (v-izUSD)", [
        nexusAddress,
        tokens_1.PzUSD.savings,
        tokens_1.PZENO.address,
        tokens_1.PWMATIC.address,
        constants_1.ONE_DAY.mul(91), // 3 months
    ]);
    const initializeData = stakingRewardsImpl.interface.encodeFunctionData("initialize", [
        rewardsDistributor.address,
        "izUSD Vault",
        "v-izUSD",
    ]);
    console.log(`Initialize Staking Rewards:\n${initializeData}`);
    const proxy = generated_1.AssetProxy__factory.connect(tokens_1.PzUSD.vault, signer);
    const upgradeData = proxy.interface.encodeFunctionData("upgradeToAndCall", [stakingRewardsImpl.address, initializeData]);
    console.log(`\nupgradeToAndCall data:\n${upgradeData}`);
});
config_1.task("exit-vizusd", "Upgrade Polygon izUSD staking contract v-izUSD")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const vizusd = generated_1.StakingRewardsWithPlatformToken__factory.connect(tokens_1.PzUSD.vault, signer);
    const tx = await vizusd.exit();
    await deploy_utils_1.logTxDetails(tx, "exit from v-izUSD");
});
module.exports = {};
//# sourceMappingURL=deployPolygon.js.map