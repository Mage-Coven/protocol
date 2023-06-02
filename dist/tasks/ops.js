"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const stakedToken_1 = require("types/stakedToken");
const ethers_1 = require("defender-relay-client/lib/ethers");
const math_1 = require("@utils/math");
const tokens_1 = require("./utils/tokens");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const snap_utils_1 = require("./utils/snap-utils");
const quest_utils_1 = require("./utils/quest-utils");
config_1.task("collect-interest", "Collects and streams interest from platforms")
    .addParam("asset", "Token symbol of main or feeder pool asset. eg zUSD, mBTC, fpmBTC/HBTC or fpzUSD/GUSD", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const asset = tokens_1.tokens.find((t) => t.symbol === taskArgs.asset);
    if (!asset) {
        console.error(`Failed to find main or feeder pool asset with token symbol ${taskArgs.asset}`);
        process.exit(1);
    }
    const savingsManagerAddress = networkAddressFactory_1.getChainAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const lastBatchCollected = await savingsManager.lastBatchCollected(asset.address);
    const lastBatchDate = new Date(lastBatchCollected.mul(1000).toNumber());
    console.log(`The last interest collection was ${lastBatchDate}, epoch ${lastBatchCollected} seconds`);
    const currentEpoch = new Date().getTime() / 1000;
    if (currentEpoch - lastBatchCollected.toNumber() < 60 * 60 * 6) {
        console.error(`Can not run again as the last run was less then 6 hours ago`);
        process.exit(3);
    }
    const tx = await savingsManager.collectAndStreamInterest(asset.address);
    await deploy_utils_1.logTxDetails(tx, "collectAndStreamInterest");
});
config_1.task("revenue-deposit", "Deposit zUSD and mBTC revenue into Balancer Pool using private transaction")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const balancerPoolTokenAddress = "0x02ec2c01880a0673c76e12ebe6ff3aad0a8da968";
    const scale = math_1.simpleToExactAmount(1);
    // 1 - Get contracts
    const zUSD = generated_1.ERC20__factory.connect(networkAddressFactory_1.resolveAddress("zUSD", chain), signer);
    const mBTC = generated_1.ERC20__factory.connect(networkAddressFactory_1.resolveAddress("mBTC", chain), signer);
    const RevenueRecipientAddress = networkAddressFactory_1.resolveAddress("RevenueRecipient", chain);
    const recipient = generated_1.RevenueRecipient__factory.connect(RevenueRecipientAddress, signer);
    // 2 - work out pcts
    let assets = [zUSD, mBTC];
    const balRecipient = await Promise.all(assets.map((a) => a.balanceOf(RevenueRecipientAddress)));
    assets = assets.filter((b, i) => balRecipient[i].gt(math_1.BN.from(0)));
    if (assets.length === 0)
        return;
    const balPool = await Promise.all(assets.map((a) => a.balanceOf(balancerPoolTokenAddress)));
    const pcts = assets.map((a, i) => {
        const maxPool = balPool[i].mul(10).div(35);
        if (balRecipient[i].lt(maxPool))
            return scale;
        return math_1.simpleToExactAmount(maxPool).div(balRecipient[i]);
    });
    const tx = await recipient.depositToPool(assets.map((a) => a.address), pcts);
    deploy_utils_1.logTxDetails(tx, "deposit top");
});
config_1.task("polly-daily", "Runs the daily jobs against the contracts on Polygon mainnet")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const aave = generated_1.PAaveIntegration__factory.connect(tokens_1.PUSDC.integrator, signer);
    const aaveTx = await aave.claimRewards({ gasLimit: 200000 });
    await deploy_utils_1.logTxDetails(aaveTx, "claimRewards");
    const liquidatorAddress = networkAddressFactory_1.getChainAddress("Liquidator", chain);
    const liquidator = generated_1.PLiquidator__factory.connect(liquidatorAddress, signer);
    const liquidatorTx = await liquidator.triggerLiquidation(tokens_1.PUSDC.integrator, { gasLimit: 2000000 });
    await deploy_utils_1.logTxDetails(liquidatorTx, "triggerLiquidation");
    const savingsManagerAddress = networkAddressFactory_1.getChainAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const savingsManagerTx = await savingsManager.collectAndStreamInterest(tokens_1.PzUSD.address, {
        gasLimit: 2000000,
    });
    await deploy_utils_1.logTxDetails(savingsManagerTx, "collectAndStreamInterest");
});
config_1.task("proxy-upgrades", "Proxy implementation changes")
    .addParam("asset", "Token symbol of main or feeder pool asset. eg zUSD, mBTC, fpmBTC/HBTC or fpzUSD/GUSD", undefined, config_1.types.string, false)
    .addOptionalParam("from", "Block to query transaction events from. (default: deployment block)", 10148031, config_1.types.int)
    .addOptionalParam("to", "Block to query transaction events to. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const asset = tokens_1.tokens.find((t) => t.symbol === taskArgs.asset);
    if (!asset) {
        console.error(`Failed to find main or feeder pool asset with token symbol ${taskArgs.asset}`);
        process.exit(1);
    }
    const { fromBlock, toBlock } = await snap_utils_1.getBlockRange(hre.ethers, taskArgs.from, taskArgs.to);
    const proxy = generated_1.AssetProxy__factory.connect(asset.address, signer);
    const filter = await proxy.filters.Upgraded();
    const logs = await proxy.queryFilter(filter, fromBlock.blockNumber, toBlock.blockNumber);
    console.log(`${asset.symbol} proxy ${asset.address}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logs.forEach((log) => {
        console.log(`Upgraded at block ${log.blockNumber} to ${log.args.implementation} in tx in ${log.blockHash}`);
    });
});
config_1.task("proxy-admin", "Get the admin address of a proxy contract")
    .addParam("proxy", "Token symbol, contract name or address of the proxy contract. eg zUSD, EmissionsController", undefined, config_1.types.string, false)
    .addOptionalParam("type", "'address' or 'feederPool'", "address", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const proxyAddress = networkAddressFactory_1.resolveAddress(taskArgs.proxy, chain, taskArgs.type);
    const adminSlot = "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";
    const adminAddress = await signer.provider.getStorageAt(proxyAddress, adminSlot);
    console.log(`Admin: ${adminAddress}`);
});
config_1.task("proxy-admin-change", "Change the admin of a proxy contract")
    .addParam("proxy", "Token symbol, contract name or address of the proxy contract. eg zUSD, EmissionsController", undefined, config_1.types.string, false)
    .addOptionalParam("type", "'address' or 'feederPool'", "address", config_1.types.string)
    .addOptionalParam("admin", "Contract name or address of the new admin. eg DelayedProxyAdmin", "DelayedProxyAdmin", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const proxyAddress = networkAddressFactory_1.resolveAddress(taskArgs.proxy, chain, taskArgs.type);
    const proxy = generated_1.AssetProxy__factory.connect(proxyAddress, signer);
    const newAdminAddress = networkAddressFactory_1.resolveAddress(taskArgs.admin, chain);
    const tx = await proxy.changeAdmin(newAdminAddress);
    await deploy_utils_1.logTxDetails(tx, "change admin");
});
config_1.task("quest-add", "Adds a quest to the staked token")
    .addParam("multiplier", "Quest multiplier. 1 = 1.01x or 1%, 10 = 1.1x or 10%", undefined, config_1.types.int, false)
    .addParam("type", "Seasonal or permanent", "seasonal", config_1.types.string)
    .addOptionalParam("pk", "Test private key", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false, taskArgs.pk);
    const chain = networkAddressFactory_1.getChain(hre);
    let type;
    if (taskArgs.type === "seasonal" || taskArgs.type === "s") {
        type = stakedToken_1.QuestType.SEASONAL;
    }
    else if (taskArgs.type === "permanent" || taskArgs.type === "p") {
        type = stakedToken_1.QuestType.PERMANENT;
    }
    else {
        throw Error(`Invalid quest type ${taskArgs.type}. Must be either: seasonal, s, permanent or p.`);
    }
    const questManagerAddress = await networkAddressFactory_1.resolveAddress("QuestManager", chain);
    const questManager = generated_1.QuestManager__factory.connect(questManagerAddress, signer);
    const expiry = Math.floor(Date.now() / 1000);
    const addQuestData = questManager.interface.encodeFunctionData("addQuest", [type, taskArgs.multiplier, expiry]);
    console.log(`Destination ${questManagerAddress}, data: ${addQuestData}`);
    const tx = await questManager.addQuest(type, taskArgs.multiplier, expiry);
    await deploy_utils_1.logTxDetails(tx, `Add ${taskArgs.type} quest with ${taskArgs.multiplier} multiplier`);
});
config_1.task("quest-complete-queue", "Completes all user quests in the quests queue")
    .addParam("signerKey", "Signer API key", undefined, config_1.types.string, false)
    .addParam("signerSecret", "Signer API secret", undefined, config_1.types.string, false)
    .addOptionalParam("qid", "Queue identified", 2, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const opsSigner = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const questManagerAddress = await networkAddressFactory_1.resolveAddress("QuestManager", chain);
    const questManager = generated_1.QuestManager__factory.connect(questManagerAddress, opsSigner);
    // get users who have completed quests from the queue
    const questId = taskArgs.qid;
    const queuedUsers = await quest_utils_1.getQueuedUsersForQuest(questId);
    if (queuedUsers.length === 0) {
        console.error(`No user completed quests`);
        process.exit(0);
    }
    console.log(`${queuedUsers.length} users in the completion queue.`);
    // Need to filter out any users that completed the quest themselves
    const hasCompletedPromises = queuedUsers.map((user) => questManager.hasCompleted(user, questId));
    const hasCompleted = await Promise.all(hasCompletedPromises);
    const usersUnclaimed = queuedUsers.filter((user, i) => hasCompleted[i] === false);
    console.log(`${usersUnclaimed.length} users have not claimed the quest on-chain: ${usersUnclaimed}`);
    // Filter out any user that have not completed the migration but in somehow in the queue
    const questNames = ["theGreatMigration", "theGreatMigration", "metanautSpaceProgram"];
    const usersCheckedPromises = usersUnclaimed.map((user) => quest_utils_1.hasUserCompletedQuest(user, questNames[questId]));
    const usersChecked = await Promise.all(usersCheckedPromises);
    const usersUnclaimedChecked = usersUnclaimed.filter((user, i) => usersChecked[i] === true);
    console.log(`About to complete ${usersUnclaimedChecked.length} users: ${usersUnclaimedChecked}`);
    // Get Quest Signer from Defender
    const credentials = {
        apiKey: taskArgs.signerKey,
        apiSecret: taskArgs.signerSecret,
    };
    const provider = new ethers_1.DefenderRelayProvider(credentials);
    const questSigner = new ethers_1.DefenderRelaySigner(credentials, provider, { speed: taskArgs.speed });
    // Quest Signer signs the users as having completed the migration quest
    const sig = await quest_utils_1.signQuestUsers(questId, usersUnclaimedChecked, questSigner);
    // Complete the quests in the Quest Manager contract
    const tx = await questManager.completeQuestUsers(questId, usersUnclaimedChecked, sig);
    await deploy_utils_1.logTxDetails(tx, "complete quest users");
});
//# sourceMappingURL=ops.js.map