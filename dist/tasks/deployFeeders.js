"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const tokens_1 = require("./utils/tokens");
const deploy_utils_1 = require("./utils/deploy-utils");
const signerFactory_1 = require("./utils/signerFactory");
const feederUtils_1 = require("./utils/feederUtils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.task("deployFeederPool", "Deploy Feeder Pool")
    .addParam("masset", "Token symbol of mAsset. eg zUSD", "zUSD", config_1.types.string)
    .addParam("fasset", "Token symbol of Feeder Pool asset. eg GUSD, WBTC, PFRAX for Polygon", "alUSD", config_1.types.string)
    .addOptionalParam("a", "Amplitude coefficient (A)", 100, config_1.types.int)
    .addOptionalParam("min", "Minimum asset weight of the basket as a percentage. eg 10 for 10% of the basket.", 10, config_1.types.int)
    .addOptionalParam("max", "Maximum asset weight of the basket as a percentage. eg 90 for 90% of the basket.", 90, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const mAsset = networkAddressFactory_1.resolveToken(taskArgs.masset, chain);
    const fAsset = networkAddressFactory_1.resolveToken(taskArgs.fasset, chain);
    if (taskArgs.a < 10 || taskArgs.min > 5000)
        throw Error(`Invalid amplitude coefficient (A) ${taskArgs.a}`);
    if (taskArgs.min < 0 || taskArgs.min > 50)
        throw Error(`Invalid min limit ${taskArgs.min}`);
    if (taskArgs.max < 50 || taskArgs.max > 100)
        throw Error(`Invalid max limit ${taskArgs.min}`);
    const poolData = {
        mAsset,
        fAsset,
        name: `${mAsset.symbol}/${fAsset.symbol} Feeder Pool`,
        symbol: `fP${mAsset.symbol}/${fAsset.symbol}`,
        config: {
            a: taskArgs.a,
            limits: {
                min: math_1.simpleToExactAmount(taskArgs.min, 16),
                max: math_1.simpleToExactAmount(taskArgs.max, 16),
            },
        },
    };
    // Deploy Feeder Pool
    await feederUtils_1.deployFeederPool(signer, poolData, hre);
});
config_1.task("deployNonPeggedFeederPool", "Deploy Non Pegged Feeder Pool")
    .addParam("masset", "Token symbol of mAsset. eg zUSD or PzUSD for Polygon", "zUSD", config_1.types.string)
    .addParam("fasset", "Token symbol of Feeder Pool asset. eg GUSD, WBTC, PFRAX for Polygon", "alUSD", config_1.types.string)
    .addOptionalParam("a", "Amplitude coefficient (A)", 100, config_1.types.int)
    .addOptionalParam("min", "Minimum asset weight of the basket as a percentage. eg 10 for 10% of the basket.", 10, config_1.types.int)
    .addOptionalParam("max", "Maximum asset weight of the basket as a percentage. eg 90 for 90% of the basket.", 90, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const mAsset = networkAddressFactory_1.resolveToken(taskArgs.masset, chain);
    const fAsset = networkAddressFactory_1.resolveToken(taskArgs.fasset, chain);
    if (taskArgs.a < 10 || taskArgs.min > 5000)
        throw Error(`Invalid amplitude coefficient (A) ${taskArgs.a}`);
    if (taskArgs.min < 0 || taskArgs.min > 50)
        throw Error(`Invalid min limit ${taskArgs.min}`);
    if (taskArgs.max < 50 || taskArgs.max > 100)
        throw Error(`Invalid max limit ${taskArgs.min}`);
    if (!fAsset.priceGetter)
        throw Error(`Token ${fAsset.symbol} does not have a priceGetter`);
    const poolData = {
        mAsset,
        fAsset,
        fAssetRedemptionPriceGetter: fAsset.priceGetter,
        name: `${mAsset.symbol}/${fAsset.symbol} Feeder Pool`,
        symbol: `fP${mAsset.symbol}/${fAsset.symbol}`,
        config: {
            a: taskArgs.a,
            limits: {
                min: math_1.simpleToExactAmount(taskArgs.min, 16),
                max: math_1.simpleToExactAmount(taskArgs.max, 16),
            },
        },
    };
    // Deploy Feeder Pool
    await feederUtils_1.deployFeederPool(signer, poolData, hre);
});
config_1.task("deployAlcxInt", "Deploy Alchemix integration contract for alUSD Feeder Pool")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const alchemixStakingPoolsAddress = networkAddressFactory_1.getChainAddress("AlchemixStakingPool", chain);
    const alchemixIntegration = await deploy_utils_1.deployContract(new generated_1.AlchemixIntegration__factory(signer), "Alchemix alUSD Integration", [nexusAddress, tokens_1.alUSD.feederPool, tokens_1.ALCX.address, alchemixStakingPoolsAddress, tokens_1.alUSD.address]);
    const tx = await alchemixIntegration.initialize();
    deploy_utils_1.logTxDetails(tx, "initialize Alchemix integration");
    const fp = generated_1.FeederPool__factory.connect(tokens_1.alUSD.feederPool, signer);
    const migrateData = fp.interface.encodeFunctionData("migrateBassets", [[tokens_1.alUSD.address], alchemixIntegration.address]);
    console.log(`migrateBassets data:\n${migrateData}`);
});
config_1.task("deployVault", "Deploy Feeder Pool with boosted dual vault")
    .addParam("name", "Token name of the vault. eg zUSD/alUSD fPool Vault", undefined, config_1.types.string)
    .addParam("symbol", "Token symbol of the vault. eg v-fPzUSD/alUSD", undefined, config_1.types.string)
    .addParam("boosted", "Rewards are boosted by staked ZENO (vZENO)", undefined, config_1.types.boolean)
    .addParam("stakingToken", "Symbol of token that is being staked. Feeder Pool is just the fAsset. eg zUSD, ZENO, GUSD, alUSD", undefined, config_1.types.string)
    .addOptionalParam("rewardToken", "Token symbol of reward. eg ZENO", "ZENO", config_1.types.string)
    .addOptionalParam("dualRewardToken", "Token symbol of second reward. eg WMATIC, ALCX, QI", undefined, config_1.types.string)
    .addOptionalParam("price", "Price coefficient is the value of the mAsset in USD. eg zUSD/USD = 1, mBTC/USD", 1, config_1.types.int)
    .addOptionalParam("boostCoeff", "Boost coefficient", 9, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    var _a, _b, _c;
    const chain = networkAddressFactory_1.getChain(hre);
    if (((_a = taskArgs.name) === null || _a === void 0 ? void 0 : _a.length) < 4)
        throw Error(`Invalid token name ${taskArgs.name}`);
    if (((_b = taskArgs.symbol) === null || _b === void 0 ? void 0 : _b.length) <= 0 || ((_c = taskArgs.symbol) === null || _c === void 0 ? void 0 : _c.length) > 16)
        throw Error(`Invalid token symbol ${taskArgs.name}`);
    if (taskArgs.boosted === undefined)
        throw Error(`Invalid boolean boost ${taskArgs.boosted}`);
    const stakingToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.stakingToken && t.chain === chain);
    if (!stakingToken)
        throw Error(`Could not find staking token with symbol ${taskArgs.stakingToken}`);
    // Staking Token is for Feeder Pool, Savings Vault or the token itself. eg
    // alUSD will stake feeder pool in a v-fPzUSD/alUSD vault
    // zUSD will stake savings vault in a v-izUSD vault
    // ZENO will stake ZENO in a v-ZENO vault
    const stakingTokenAddress = stakingToken.feederPool || stakingToken.savings || stakingToken.address;
    const rewardToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.rewardToken && t.chain === chain);
    if (!rewardToken)
        throw Error(`Could not find reward token with symbol ${taskArgs.rewardToken}`);
    if (taskArgs.price < 0 || taskArgs.price >= math_1.simpleToExactAmount(1))
        throw Error(`Invalid price coefficient ${taskArgs.price}`);
    if (taskArgs.boostCoeff < 1 || taskArgs.boostCoeff > 10)
        throw Error(`Invalid boost coefficient ${taskArgs.boostCoeff}`);
    const dualRewardToken = tokens_1.tokens.find((t) => t.symbol === taskArgs.dualRewardToken);
    const vaultData = {
        boosted: taskArgs.boosted,
        name: taskArgs.name,
        symbol: taskArgs.symbol,
        priceCoeff: math_1.simpleToExactAmount(taskArgs.price),
        stakingToken: stakingTokenAddress,
        rewardToken: rewardToken.address,
        dualRewardToken: dualRewardToken === null || dualRewardToken === void 0 ? void 0 : dualRewardToken.address,
        boostCoeff: taskArgs.boostCoeff,
    };
    await feederUtils_1.deployVault(hre, vaultData);
});
config_1.task("FeederWrapper-deploy", "Deploy a new FeederWrapper").setAction(async (taskArgs, hre) => {
    const deployer = await signerFactory_1.getSigner(hre);
    await deploy_utils_1.deployContract(new generated_1.FeederWrapper__factory(deployer), "FeederWrapper");
});
config_1.task("deployIronBank", "Deploys zUSD Iron Bank (CREAM) integration contracts for GUSD and BUSD Feeder Pools")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    // CREAM's ABI is the same as Compound so can use the CompoundIntegration contract
    const gusdIntegration = await deploy_utils_1.deployContract(new generated_1.CompoundIntegration__factory(signer), "CREAM Integration for GUSD FP", [nexusAddress, tokens_1.GUSD.feederPool, tokens_1.CREAM.address]);
    let tx = await gusdIntegration.initialize([tokens_1.zUSD.address], [tokens_1.cyZUSD.address]);
    await deploy_utils_1.logTxDetails(tx, "initialize GUSD Iron Bank integration");
    const busdIntegration = await deploy_utils_1.deployContract(new generated_1.CompoundIntegration__factory(signer), "CREAM Integration for BUSD FP", [nexusAddress, tokens_1.BUSD.feederPool, tokens_1.CREAM.address]);
    tx = await busdIntegration.initialize([tokens_1.zUSD.address], [tokens_1.cyZUSD.address]);
    await deploy_utils_1.logTxDetails(tx, "initialize BUSD Iron Bank integration");
    // This will be done via the delayedProxyAdmin on mainnet
    // Governor approves Liquidator to spend the reward (CREAM) token
    const approveRewardTokenData = await gusdIntegration.interface.encodeFunctionData("approveRewardToken");
    console.log(`\napproveRewardToken data for GUSD and BUSD: ${approveRewardTokenData}`);
    const gudsFp = generated_1.FeederPool__factory.connect(tokens_1.GUSD.address, signer);
    const gusdMigrateBassetsData = await gudsFp.interface.encodeFunctionData("migrateBassets", [
        [tokens_1.zUSD.address],
        gusdIntegration.address,
    ]);
    console.log(`GUSD Feeder Pool migrateBassets tx data: ${gusdMigrateBassetsData}`);
    const budsFp = generated_1.FeederPool__factory.connect(tokens_1.BUSD.address, signer);
    const busdMigrateBassetsData = await budsFp.interface.encodeFunctionData("migrateBassets", [
        [tokens_1.zUSD.address],
        busdIntegration.address,
    ]);
    console.log(`BUSD Feeder Pool migrateBassets tx data: ${busdMigrateBassetsData}`);
});
module.exports = {};
//# sourceMappingURL=deployFeeders.js.map