"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const units_1 = require("@ethersproject/units");
const constants_1 = require("@utils/constants");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const quantity_formatters_1 = require("./utils/quantity-formatters");
const snap_utils_1 = require("./utils/snap-utils");
config_1.subtask("staked-snap", "Dumps a user's staking token details.")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addParam("user", "Address or contract name of user", undefined, config_1.types.string)
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const userAddress = networkAddressFactory_1.resolveAddress(taskArgs.user, chain);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedTokenBPT__factory.connect(stakingTokenAddress, signer);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    const callOverride = {
        blockTag: block.blockNumber,
    };
    const [rawBalance, cooldownBalance] = await stakingToken.rawBalanceOf(userAddress, callOverride);
    const boostedBalance = await stakingToken.balanceOf(userAddress, callOverride);
    const votes = await stakingToken.getVotes(userAddress, callOverride);
    const delegatedVotes = votes.sub(boostedBalance);
    const effectiveMultiplier = rawBalance.gt(0) ? boostedBalance.mul(10000).div(rawBalance) : math_1.BN.from(0);
    const delegatee = await stakingToken.delegates(userAddress, callOverride);
    const priceCoeff = taskArgs.asset === "ZENO" ? math_1.BN.from(10000) : await stakingToken.priceCoefficient();
    const earnedRewards = await stakingToken.earned(userAddress, callOverride);
    console.log(`Raw balance          ${quantity_formatters_1.usdFormatter(rawBalance)}`);
    console.log(`Boosted balance      ${quantity_formatters_1.usdFormatter(boostedBalance)}`);
    console.log(`Delegated votes      ${quantity_formatters_1.usdFormatter(delegatedVotes)}`);
    console.log(`Cooldown balance     ${quantity_formatters_1.usdFormatter(cooldownBalance)}`);
    console.log(`Voting power         ${quantity_formatters_1.usdFormatter(votes)}`);
    console.log(`Earned Rewards       ${quantity_formatters_1.usdFormatter(earnedRewards)}`);
    const balanceData = await stakingToken.balanceData(userAddress, callOverride);
    // Multipliers
    console.log("\nMultipliers");
    console.log(`Time                  ${units_1.formatUnits(balanceData.timeMultiplier + 100, 2)}`);
    console.log(`Quest                 ${units_1.formatUnits(balanceData.questMultiplier + 100, 2)}`);
    console.log(`ZENO Price coefficient ${units_1.formatUnits(priceCoeff, 4)}`);
    console.log(`Effective multiplier  ${units_1.formatUnits(effectiveMultiplier, 4)}`);
    if (balanceData.cooldownTimestamp > 0) {
        const cooldownEnds = balanceData.cooldownTimestamp + constants_1.ONE_WEEK.mul(3).toNumber();
        console.log(`\nCooldown ends ${new Date(cooldownEnds * 1000)}`);
        console.log(`Cooldown units ${quantity_formatters_1.usdFormatter(balanceData.cooldownUnits)}`);
    }
    console.log(`\nDelegatee ${delegatee}`);
});
config_1.task("staked-snap").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-stake", "Stake ZENO or mBPT in V2 Staking Token")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addParam("amount", "Amount of tokens to be staked without the token decimals.", undefined, config_1.types.float)
    .addParam("delegate", "Address or contract name the voting power will be delegated to.", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const stakeAmount = math_1.simpleToExactAmount(taskArgs.amount);
    let tx;
    if (taskArgs.delegate) {
        const delegateAddress = networkAddressFactory_1.resolveAddress(taskArgs.delegate, chain);
        tx = await stakingToken["stake(uint256,address)"](stakeAmount, delegateAddress);
    }
    else {
        tx = await stakingToken["stake(uint256)"](stakeAmount);
    }
    await deploy_utils_1.logTxDetails(tx, `Stake ${taskArgs.amount} ${taskArgs.symbol}`);
});
config_1.task("staked-stake").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-cooldown-start", "Start cooldown of V2 staking token")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addParam("amount", "Amount to of token to be staked without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const cooldownAmount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await stakingToken.startCooldown(cooldownAmount);
    await deploy_utils_1.logTxDetails(tx, `Start cooldown for ${taskArgs.amount} ${taskArgs.asset} tokens`);
});
config_1.task("staked-cooldown-start").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-cooldown-end", "End cooldown of V2 staking token")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const tx = await stakingToken.endCooldown();
    await deploy_utils_1.logTxDetails(tx, `End cooldown for ${taskArgs.asset} tokens`);
});
config_1.task("staked-cooldown-end").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-withdraw", "Withdraw ZENO or mBPT in V2 Staking Token")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addParam("amount", "Amount to of token to be staked without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("recipient", "Address or contract name that will receive the withdrawn tokens.", undefined, config_1.types.string)
    .addOptionalParam("fee", "True if withdraw fee to be taken from the amount. False if received amount to equal with withdraw amount.", true, config_1.types.boolean)
    .addOptionalParam("cooldown", "False if not exiting from a previous cooldown. True if previous cooldown to be ended.", false, config_1.types.boolean)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const withdrawAmount = math_1.simpleToExactAmount(taskArgs.amount);
    const recipientAddress = taskArgs.recipient ? networkAddressFactory_1.resolveAddress(taskArgs.recipient, chain) : await signer.getAddress();
    const tx = await stakingToken.withdraw(withdrawAmount, recipientAddress, taskArgs.fee, taskArgs.fee);
    await deploy_utils_1.logTxDetails(tx, `Withdraw ${taskArgs.amount} ${taskArgs.symbol}`);
});
config_1.task("staked-withdraw").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-claim", "Claim ZENO rewards from V2 staking token")
    .addOptionalParam("recipient", "Address or contract name that will receive the ZENO rewards.", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("ZENO", chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    let tx;
    if (taskArgs.recipient) {
        const recipientAddress = taskArgs.recipient ? networkAddressFactory_1.resolveAddress(taskArgs.recipient, chain) : await signer.getAddress();
        tx = await stakingToken["claimReward(address)"](recipientAddress);
    }
    else {
        tx = await stakingToken["claimReward()"]();
    }
    const receipt = await deploy_utils_1.logTxDetails(tx, `Claim earned ZENO rewards`);
    console.log(`Claimed ${units_1.formatUnits(receipt.events[0].args[2])} ZENO rewards`);
});
config_1.task("staked-claim").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-compound", "Stake any earned ZENO rewards")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("ZENO", chain, "vault");
    const stakingToken = generated_1.StakedTokenZENO__factory.connect(stakingTokenAddress, signer);
    const tx = await stakingToken.compoundRewards();
    const receipt = await deploy_utils_1.logTxDetails(tx, "Stake earned ZENO rewards");
    console.log(`Staked ${units_1.formatUnits(receipt.events[0].args[2])} ZENO rewards`);
});
config_1.task("staked-compound").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-delegate", "Delegate V2 Staking Tokens")
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addParam("delegate", "Address or contract name the voting power will be delegated to.", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.asset, chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const delegateAddress = networkAddressFactory_1.resolveAddress(taskArgs.delegate, chain);
    const tx = await stakingToken.delegate(delegateAddress);
    await deploy_utils_1.logTxDetails(tx, `Delegate voting power to ${taskArgs.delegate}`);
});
config_1.task("staked-delegate").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-update-price-coeff", "Updates the price coefficient on the staked mBPT Token.")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("mBPT", chain, "vault");
    const stakingToken = generated_1.StakedTokenBPT__factory.connect(stakingTokenAddress, signer);
    const tx = await stakingToken.fetchPriceCoefficient();
    await deploy_utils_1.logTxDetails(tx, `update price coefficient`);
});
config_1.task("staked-update-price-coeff").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-price-coeff", "Checks the price coefficient on the staked mBPT Token.").setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("mBPT", chain, "vault");
    const stakingToken = generated_1.StakedTokenBPT__factory.connect(stakingTokenAddress, signer);
    const oldPrice = (await stakingToken.priceCoefficient()).toNumber();
    const newPrice = (await stakingToken.getProspectivePriceCoefficient()).toNumber();
    const diffPercentage = ((newPrice - oldPrice) * 100) / oldPrice;
    console.log(`Old price ${oldPrice}, new price, diff ${newPrice} ${diffPercentage}%`);
});
config_1.task("staked-price-coeff").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-fees", "Converts fees accrued in BPT to ZENO, before depositing to the rewards contract.")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("mBPT", chain, "vault");
    const stakingToken = generated_1.StakedTokenBPT__factory.connect(stakingTokenAddress, signer);
    const feesBPT = await stakingToken.pendingBPTFees();
    if (feesBPT.lt(math_1.simpleToExactAmount(100))) {
        console.log(`Only ${feesBPT} mBPT in fees so will not convert to ZENO`);
        return;
    }
    const tx = await stakingToken.convertFees();
    await deploy_utils_1.logTxDetails(tx, `convert mBPT to fees`);
});
config_1.task("staked-fees").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("staked-time", "Updates a user's time multiplier.")
    .addParam("user", "Address or contract name of user", undefined, config_1.types.string)
    .addOptionalParam("asset", "Symbol of staking token. ZENO or mBPT", "ZENO", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const stakingTokenAddress = networkAddressFactory_1.resolveAddress("ZENO", chain, "vault");
    const stakingToken = generated_1.StakedToken__factory.connect(stakingTokenAddress, signer);
    const userAddress = networkAddressFactory_1.resolveAddress(taskArgs.user, chain);
    const tx = await stakingToken.reviewTimestamp(userAddress);
    await deploy_utils_1.logTxDetails(tx, `update time multiplier`);
});
config_1.task("staked-time").setAction(async (_, __, runSuper) => {
    await runSuper();
});
//# sourceMappingURL=stakingV2.js.map