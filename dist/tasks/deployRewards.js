"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const constants_1 = require("@utils/constants");
const math_1 = require("@utils/math");
const generated_1 = require("../types/generated");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const feederUtils_1 = require("./utils/feederUtils");
const etherscan_1 = require("./utils/etherscan");
const rewardsUtils_1 = require("./utils/rewardsUtils");
config_1.task("getBytecode-BoostedDualVault").setAction(async () => {
    const size = generated_1.BoostedDualVault__factory.bytecode.length / 2 / 1000;
    if (size > 24.576) {
        console.error(`BoostedDualVault size is ${size} kb: ${size - 24.576} kb too big`);
    }
    else {
        console.log(`BoostedDualVault = ${size} kb`);
    }
});
config_1.task("BoostDirector.deploy", "Deploys a new BoostDirector")
    .addOptionalParam("stakingToken", "Symbol of the staking token", "ZENO", config_1.types.string)
    .addOptionalParam("vaults", "Comma separated list of vault underlying token symbols, eg zUSD,mBTC", "zUSD,mBTC,GUSD,BUSD,alUSD,HBTC,TBTC", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.getChainAddress("Nexus", chain);
    const boostDirector = await deploy_utils_1.deployContract(new generated_1.BoostDirectorV2__factory(signer), "BoostDirector", [nexusAddress]);
    const vaultSymbols = taskArgs.vaults.split(",");
    const vaultAddresses = vaultSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain, "vault"));
    const tx = await boostDirector.initialize(vaultAddresses);
    await deploy_utils_1.logTxDetails(tx, "initialize BoostDirector");
    await etherscan_1.verifyEtherscan(hre, {
        address: boostDirector.address,
        constructorArguments: [nexusAddress],
    });
});
config_1.task("Vault.deploy", "Deploys a vault contract")
    .addParam("boosted", "True if a mainnet boosted vault", true, config_1.types.boolean)
    .addParam("vaultName", "Vault name", undefined, config_1.types.string, false)
    .addParam("vaultSymbol", "Vault symbol", undefined, config_1.types.string, false)
    .addOptionalParam("stakingToken", "Symbol of staking token. eg ZENO, BAL or zUSD", "ZENO", config_1.types.string)
    .addOptionalParam("stakingType", "'address' or 'feederPool'", "feederPool", config_1.types.string)
    .addOptionalParam("rewardsToken", "Symbol of rewards token. eg ZENO", "ZENO", config_1.types.string)
    .addOptionalParam("dualRewardsToken", "Symbol of dual rewards token. eg WMATIC", undefined, config_1.types.string)
    .addOptionalParam("priceCoeff", "Price coefficient without 18 decimal places. eg 1 or 4800", 1, config_1.types.int)
    .addOptionalParam("boostCoeff", "Boost coefficient", 9, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const vaultData = {
        boosted: taskArgs.boosted,
        name: taskArgs.vaultName,
        symbol: taskArgs.vaultSymbol,
        priceCoeff: math_1.simpleToExactAmount(taskArgs.priceCoeff),
        stakingToken: networkAddressFactory_1.resolveAddress(taskArgs.stakingToken, chain, taskArgs.stakingType),
        rewardToken: networkAddressFactory_1.resolveAddress(taskArgs.rewardsToken, chain),
        dualRewardToken: taskArgs.dualRewardsToken ? networkAddressFactory_1.resolveAddress(taskArgs.dualRewardsToken, chain) : undefined,
        boostCoeff: taskArgs.boostCoeff,
    };
    await feederUtils_1.deployVault(hre, vaultData);
});
config_1.task("StakedToken.deploy", "Deploys a Staked Token behind a proxy")
    .addOptionalParam("rewardsToken", "Symbol of rewards token. eg ZENO", "ZENO", config_1.types.string)
    .addOptionalParam("stakedToken", "Symbol of staked token. eg ZENO or mBPT", "ZENO", config_1.types.string)
    .addOptionalParam("balToken", "Symbol of balancer token. eg BAL", "BAL", config_1.types.string)
    .addOptionalParam("balPoolId", "Balancer Pool Id", "0001", config_1.types.string)
    .addOptionalParam("name", "Staked Token name", "Staked ZENO", config_1.types.string)
    .addOptionalParam("symbol", "Staked Token symbol", "stkZENO", config_1.types.string)
    .addOptionalParam("cooldown", "Number of seconds for the cooldown period", constants_1.ONE_WEEK.mul(3).toNumber(), config_1.types.int)
    .addOptionalParam("unstakeWindow", "Number of seconds for the unstake window", constants_1.ONE_WEEK.mul(2).toNumber(), config_1.types.int)
    .addOptionalParam("proxy", "Deploys a proxy contract", false, config_1.types.boolean)
    .setAction(async (taskArgs, hre) => {
    const deployer = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const stakingTokenData = {
        rewardsTokenSymbol: taskArgs.rewardsToken,
        stakedTokenSymbol: taskArgs.stakedToken,
        balTokenSymbol: taskArgs.balToken,
        cooldown: taskArgs.cooldown,
        unstakeWindow: taskArgs.unstakeWindow,
        name: taskArgs.name,
        symbol: taskArgs.symbol,
    };
    await rewardsUtils_1.deployStakingToken(stakingTokenData, deployer, hre, taskArgs.proxy);
});
//# sourceMappingURL=deployRewards.js.map