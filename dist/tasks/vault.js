"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const utils_1 = require("ethers/lib/utils");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const quantity_formatters_1 = require("./utils/quantity-formatters");
const snap_utils_1 = require("./utils/snap-utils");
config_1.subtask("vault-snap", "Dumps user data for a vault")
    .addParam("user", "Address or contract name of user", undefined, config_1.types.string)
    .addOptionalParam("asset", "Symbol of the asset that has a xZeno vault. eg zUSD, alUSD, ZENO", "zUSD", config_1.types.string)
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const userAddress = networkAddressFactory_1.resolveAddress(taskArgs.user, chain);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    const overrides = {
        blockTag: block.blockNumber,
    };
    console.log(`\nGetting vault data for user ${taskArgs.user} at block ${block.blockNumber}, ${block.blockTime}`);
    const vaultAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const vault = generated_1.BoostedVault__factory.connect(vaultAddress, signerAccount.signer);
    // Balances
    const rawBalance = await vault.rawBalanceOf(userAddress, overrides);
    const boostedBalance = await vault.balanceOf(userAddress, overrides);
    console.log(`Raw balance     ${quantity_formatters_1.usdFormatter(rawBalance)}`);
    console.log(`Boosted balance ${quantity_formatters_1.usdFormatter(boostedBalance)}`);
    // Boost
    if (rawBalance.gt(0)) {
        const effectiveBoost = boostedBalance.mul(10000).div(rawBalance);
        const boost = await vault.getBoost(userAddress, overrides);
        console.log(`Effective boost ${utils_1.formatUnits(effectiveBoost, 4).padStart(14)}x`);
        console.log(`getBoost        ${utils_1.formatUnits(boost, 18).padStart(14)}x`);
    }
    // Rewards
    const rewardsUnclaimed = await vault.unclaimedRewards(userAddress, overrides);
    const rewardsClaimed = await vault.userClaim(userAddress, overrides);
    const rewardsEarned = await vault.earned(userAddress, overrides);
    const userData = await vault.userData(userAddress, overrides);
    console.log(`Unclaimed   ${quantity_formatters_1.usdFormatter(rewardsUnclaimed.amount)}`);
    console.log(`Claimed     ${quantity_formatters_1.usdFormatter(rewardsClaimed)}`);
    console.log(`Earned      ${quantity_formatters_1.usdFormatter(rewardsEarned)}`);
    console.log(`Last action ${new Date(userData.lastAction.toNumber() * 1000)}`);
    if (rewardsUnclaimed.first.gt(0)) {
        console.log(`First claim ${new Date(rewardsUnclaimed.first.toNumber() * 1000)}`);
        console.log(`Last claim  ${new Date(rewardsUnclaimed.last.toNumber() * 1000)}`);
    }
    if (hre.network.name === "hardhat") {
        await vault.pokeBoost(userAddress);
        const boost = await vault.getBoost(userAddress);
        console.log(`getBoost after poke ${utils_1.formatUnits(boost, 18).padStart(14)}x`);
    }
});
config_1.task("vault-snap").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vault-stake", "Stake into a vault")
    .addParam("asset", "Symbol of the asset that has a xZeno vault. eg zUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addParam("amount", "Amount to be staked", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const vaultAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const vault = generated_1.StakingRewards__factory.connect(vaultAddress, signerAccount.signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await vault["stake(uint256)"](amount);
    await deploy_utils_1.logTxDetails(tx, `${signerAccount.address} stakes ${taskArgs.amount} ${taskArgs.asset} in vault`);
});
config_1.task("vault-stake").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vault-withdraw", "Withdraw from a vault")
    .addParam("asset", "Symbol of the asset that has a xZeno vault. eg zUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addParam("amount", "Amount to be withdrawn", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const vaultAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const vault = generated_1.StakingRewards__factory.connect(vaultAddress, signerAccount.signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await vault.withdraw(amount);
    await deploy_utils_1.logTxDetails(tx, `${signerAccount.address} withdraw ${taskArgs.amount} ${taskArgs.asset} from vault`);
});
config_1.task("vault-withdraw").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vault-exit", "Exit from vault claiming rewards")
    .addParam("asset", "Symbol of the asset that has a xZeno vault. eg zUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const vaultAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const vault = generated_1.StakingRewards__factory.connect(vaultAddress, signerAccount.signer);
    const tx = await vault.exit();
    await deploy_utils_1.logTxDetails(tx, `${signerAccount.address} exits ${taskArgs.asset} vault`);
});
config_1.task("vault-exit").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vault-claim", "Claim rewards from vault")
    .addParam("asset", "Symbol of the asset that has a xZeno vault. eg zUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const vaultAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const vault = generated_1.StakingRewards__factory.connect(vaultAddress, signerAccount.signer);
    const tx = await vault.claimReward();
    await deploy_utils_1.logTxDetails(tx, `${signerAccount.address} claim rewards from ${taskArgs.asset} vault`);
});
config_1.task("vault-claim").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=vault.js.map