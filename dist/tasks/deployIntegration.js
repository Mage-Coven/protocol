"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const uniswap_1 = require("@utils/peripheral/uniswap");
const constants_1 = require("@utils/constants");
const deploy_utils_1 = require("./utils/deploy-utils");
const tokens_1 = require("./utils/tokens");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const signerFactory_1 = require("./utils/signerFactory");
const etherscan_1 = require("./utils/etherscan");
config_1.task("integration-aave-deploy", "Deploys an instance of AaveV2Integration contract")
    .addParam("asset", "Symbol of the mAsset or Feeder Pool providing liquidity to the integration. eg zUSD, GUSD or alUSD", undefined, config_1.types.string)
    .addParam("rewards", "Symbol of the platform rewards. eg COMP, AAVE, stkAAVE, ALCX", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const platformAddress = networkAddressFactory_1.getChainAddress("AaveLendingPoolAddressProvider", chain);
    const bAsset = networkAddressFactory_1.resolveToken(taskArgs.asset, chain);
    if (!bAsset.liquidityProvider)
        throw Error(`No aToken address provided for token: ${taskArgs.asset}`);
    const liquidityProviderAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain);
    const rewardsTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.rewards, chain);
    const constructorArguments = [nexusAddress, liquidityProviderAddress, platformAddress, rewardsTokenAddress];
    // Deploy
    const integration = await deploy_utils_1.deployContract(new generated_1.AaveV2Integration__factory(signer), "AaveV2Integration", constructorArguments);
    const tx = await integration.initialize([bAsset.address], [bAsset.liquidityProvider]);
    await deploy_utils_1.logTxDetails(tx, "AaveIntegrationV2.initialize");
    await etherscan_1.verifyEtherscan(hre, {
        address: integration.address,
        constructorArguments,
    });
});
config_1.task("integration-paave-deploy", "Deploys zUSD and mBTC instances of PAaveIntegration")
    .addParam("asset", "Symbol of the mAsset or Feeder Pool providing liquidity to the integration. eg zUSD, GUSD or alUSD", undefined, config_1.types.string)
    .addOptionalParam("assetType", "'address' for mAssets or 'feederPool' for Feeder Pools", "feederPool", config_1.types.string)
    .addOptionalParam("rewards", "Platform token rewards", "stkAAVE", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const deployer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const platformAddress = networkAddressFactory_1.getChainAddress("AaveLendingPoolAddressProvider", chain);
    const aaveIncentivesControllerAddress = networkAddressFactory_1.getChainAddress("AaveIncentivesController", chain);
    // Feeder Pool Asset like GUSD, alUSD or RAI
    // or can be a mAsset Vault like zUSD and mBTC
    const liquidityToken = networkAddressFactory_1.resolveToken(taskArgs.asset, chain);
    const liquidityProviderAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, taskArgs.assetType);
    const rewardsTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.rewards, chain);
    // TODO this only works for Feeder Pools. Need to get the list of bAssets from arg for mAssets
    const bAssets = [liquidityToken];
    const bAssetAddresses = bAssets.map((b) => b.address);
    const aTokens = bAssets.map((b) => b.liquidityProvider);
    const constructorArguments = [
        nexusAddress,
        liquidityProviderAddress,
        platformAddress,
        rewardsTokenAddress,
        aaveIncentivesControllerAddress,
    ];
    // Deploy
    const integration = await deploy_utils_1.deployContract(new generated_1.PAaveIntegration__factory(deployer), `PAaveIntegration for ${taskArgs.asset}`, constructorArguments);
    const tx = await integration.initialize(bAssetAddresses, aTokens);
    await deploy_utils_1.logTxDetails(tx, "PAaveIntegration.initialize");
    const approveRewardTokenData = integration.interface.encodeFunctionData("approveRewardToken");
    console.log(`\napproveRewardToken data: ${approveRewardTokenData}`);
    const mAsset = generated_1.Masset__factory.connect(liquidityProviderAddress, deployer);
    for (const bAsset of bAssets) {
        const migrateData = mAsset.interface.encodeFunctionData("migrateBassets", [[bAsset.address], integration.address]);
        console.log(`${bAsset.symbol} migrateBassets data: ${migrateData}`);
    }
    await etherscan_1.verifyEtherscan(hre, {
        address: integration.address,
        constructorArguments,
        contract: "contracts/polygon/PAaveIntegration.sol:PAaveIntegration",
    });
});
config_1.subtask("liquidator-deploy", "Deploys new Liquidator contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    if (chain !== tokens_1.Chain.mainnet)
        throw Error("Task can only run against mainnet or a mainnet fork");
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const liquidatorAddress = networkAddressFactory_1.getChainAddress("Liquidator", chain);
    const delayedAdminAddress = networkAddressFactory_1.getChainAddress("DelayedProxyAdmin", chain);
    const uniswapRouterV3Address = networkAddressFactory_1.getChainAddress("UniswapRouterV3", chain);
    const uniswapQuoterV3Address = networkAddressFactory_1.getChainAddress("UniswapQuoterV3", chain);
    // Deploy the new implementation
    const constructorArguments = [
        nexusAddress,
        tokens_1.stkAAVE.address,
        tokens_1.AAVE.address,
        uniswapRouterV3Address,
        uniswapQuoterV3Address,
        tokens_1.COMP.address,
        tokens_1.ALCX.address,
    ];
    const liquidatorImpl = await deploy_utils_1.deployContract(new generated_1.Liquidator__factory(signer), "Liquidator", constructorArguments);
    const delayedProxyAdmin = generated_1.DelayedProxyAdmin__factory.connect(delayedAdminAddress, signer);
    // Update the Liquidator proxy to point to the new implementation using the delayed proxy admin
    const upgradeData = liquidatorImpl.interface.encodeFunctionData("upgrade");
    const proposeUpgradeData = delayedProxyAdmin.interface.encodeFunctionData("proposeUpgrade", [
        liquidatorAddress,
        liquidatorImpl.address,
        upgradeData,
    ]);
    console.log(`\ndelayedProxyAdmin.proposeUpgrade to ${delayedAdminAddress}, data:\n${proposeUpgradeData}`);
    await etherscan_1.verifyEtherscan(hre, {
        address: liquidatorImpl.address,
        constructorArguments,
    });
});
config_1.task("liquidator-deploy").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("liquidator-create", "Creates a liquidation of a platform reward")
    .addParam("asset", "Symbol of the mAsset or Feeder Pool. eg zUSD, mBTC, alUSD, HBTC", undefined, config_1.types.string)
    .addParam("rewardToken", "Symbol of the platform reward token. eg COMP, AAVE, stkAAVE, ALCX", undefined, config_1.types.string)
    .addParam("bAsset", "Symbol of the bAsset purchased from the rewards. eg USDC, WBTC, alUSD", undefined, config_1.types.string)
    .addOptionalParam("maxAmount", "Max amount of bAssets to liquidate. 20,000 USDC from selling COMP", undefined, config_1.types.int)
    .addParam("minReturn", "Min amount of bAssets for one reward token from swap. Amount does not include decimals.", undefined, config_1.types.int)
    .addParam("aave", "Flag if integration with Aave or not.", undefined, config_1.types.boolean)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const liquidatorAddress = networkAddressFactory_1.getChainAddress("Liquidator", chain);
    const uniswapEthToken = networkAddressFactory_1.getChainAddress("UniswapEthToken", chain);
    const liquidator = generated_1.Liquidator__factory.connect(liquidatorAddress, signer);
    const assetToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.asset && t.chain === chain);
    if (!assetToken)
        throw Error(`Could not find asset with symbol ${taskArgs.asset}`);
    const integrationAddress = assetToken.integrator;
    // If asset is linked to a Feeder Pool, then use a zero address
    const mAssetAddress = assetToken.feederPool ? constants_1.ZERO_ADDRESS : assetToken.address;
    const rewardToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.rewardToken && t.chain === chain);
    if (!rewardToken)
        throw Error(`Could not find reward token with symbol ${taskArgs.rewardToken}`);
    const bAssetToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.bAsset && t.chain === chain);
    if (!bAssetToken)
        throw Error(`Could not find bAsset with symbol ${taskArgs.bAsset}`);
    // Output tx data for createLiquidation
    const uniswapPath = uniswap_1.encodeUniswapPath([rewardToken.address, uniswapEthToken, bAssetToken.address], [3000, 3000]);
    const createData = liquidator.interface.encodeFunctionData("createLiquidation", [
        integrationAddress,
        rewardToken.address,
        bAssetToken.address,
        uniswapPath.encoded,
        uniswapPath.encodedReversed,
        math_1.simpleToExactAmount(taskArgs.minReturn),
        math_1.simpleToExactAmount(taskArgs.minReturn, bAssetToken.decimals),
        mAssetAddress,
        taskArgs.aave,
    ]);
    console.log(`\ncreateLiquidation of ${rewardToken.symbol} from ${assetToken.symbol} to ${liquidatorAddress}, data:\n${createData}`);
});
config_1.task("liquidator-create").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=deployIntegration.js.map