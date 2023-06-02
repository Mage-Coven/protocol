"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const constants_1 = require("@utils/constants");
const utils_1 = require("./utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const emission_disperse_bal_1 = require("./utils/emission-disperse-bal");
const flashbots_1 = require("./utils/flashbots");
const log = utils_1.logger("emission");
config_1.subtask("emission-calc", "Calculate the weekly emissions")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    // Resolve the vault addresses from the asset symbols
    const emissionsControllerAddress = networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    const emissionsController = generated_1.EmissionsController__factory.connect(emissionsControllerAddress, signer);
    const tx = await emissionsController.calculateRewards();
    await utils_1.logTxDetails(tx, "calculate rewards");
});
config_1.task("emission-calc").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("emission-dist", "Distribute the weekly emissions")
    .addOptionalParam("dials", "The number of dials starting at 0", 17, config_1.types.int)
    .addOptionalParam("dialIds", "A comma separated list of dial ids", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const emissionsControllerAddress = networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    const emissionsController = generated_1.EmissionsController__factory.connect(emissionsControllerAddress, signer);
    const dialIds = taskArgs.dialIds ? taskArgs.dialIds.split(",").map(Number) : [...Array(taskArgs.dials).keys()];
    const tx = await emissionsController.distributeRewards(dialIds);
    await utils_1.logTxDetails(tx, `distribute rewards for dial ids ${dialIds}`);
});
config_1.task("emission-dist").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("l2-emission-dist", "Distribute the weekly emissions on layer 2 to vaults")
    .addParam("recipient", "The address of the end recipient. eg Vault", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const emissionsControllerAddress = networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    const emissionsController = generated_1.L2EmissionsController__factory.connect(emissionsControllerAddress, signer);
    const recipientAddress = networkAddressFactory_1.resolveAddress(taskArgs.recipient, chain, "vault");
    const tx = await emissionsController.distributeRewards([recipientAddress]);
    await utils_1.logTxDetails(tx, `distribute rewards to ${taskArgs.recipient}`);
});
config_1.task("l2-emission-dist").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("emission-disperse-bal", "Disperse Polygon Balancer Pool ZENO rewards in a DisperseForwarder contract")
    .addParam("report", "Report number from the bal-mining-script repo. eg 79", undefined, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const disperseForwarderAddress = networkAddressFactory_1.resolveAddress("DisperseForwarder", chain);
    const disperseForwarder = generated_1.DisperseForwarder__factory.connect(disperseForwarderAddress, signer);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const zenoToken = generated_1.IERC20__factory.connect(zenoAddress, signer);
    // Get the amount of ZENO in the DisperseForwarder contract
    const zenoBalance = await zenoToken.balanceOf(disperseForwarderAddress);
    try {
        // Get the proportion the ZENO balance in the DisperseForwarder contract to the recipients based off the bal-mining-script report.
        const { disperser } = await emission_disperse_bal_1.getBalancerPolygonReport(taskArgs.report, zenoBalance);
        const tx = await disperseForwarder.disperseToken(disperser.recipients, disperser.values);
        await utils_1.logTxDetails(tx, `Disperse Balancer Pool ZENO rewards ${disperser.total}  to ${disperser.recipients} recipients`);
    }
    catch (error) {
        log(`Error dispersing report ${taskArgs.report} : ${error.message}`);
        process.exit(0);
    }
});
config_1.task("emission-disperse-bal").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("savings-dist-fees", "Distributes governance fees from the Savings Manager to the Revenue Recipient")
    .addOptionalParam("masset", "Symbol of mAsset that the fees were collected in. eg zUSD or mBTC", "zUSD", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const savingsManagerAddress = networkAddressFactory_1.resolveAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const mAssetAddress = networkAddressFactory_1.resolveAddress(taskArgs.masset, chain);
    const tx = await savingsManager.distributeUnallocatedInterest(mAssetAddress);
    await utils_1.logTxDetails(tx, `distribute ${taskArgs.masset} gov fees`);
});
config_1.task("savings-dist-fees").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("revenue-forward", "Forwards received revenue. eg Polygon zUSD revenue from SavingsManager")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const revenueForwarderAddress = networkAddressFactory_1.resolveAddress("RevenueRecipient", chain);
    const revenueForwarder = generated_1.RevenueForwarder__factory.connect(revenueForwarderAddress, signer);
    const tx = await revenueForwarder.forward();
    await utils_1.logTxDetails(tx, `forward gov fees`);
});
config_1.task("revenue-forward").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("revenue-buy-back", "Buy back ZENO from zUSD and mBTC gov fees")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const revenueBuyBackAddress = networkAddressFactory_1.resolveAddress("RevenueBuyBack", chain);
    const revenueBuyBack = generated_1.RevenueBuyBack__factory.connect(revenueBuyBackAddress, signer);
    let tx;
    if (hre.network.name === "hardhat") {
        tx = await revenueBuyBack.buyBackRewards([utils_1.zUSD.address, utils_1.mBTC.address]);
    }
    else {
        // Send via Flashbots
        const populatedTx = await revenueBuyBack.populateTransaction.buyBackRewards([utils_1.zUSD.address, utils_1.mBTC.address]);
        tx = await flashbots_1.sendPrivateTransaction(populatedTx, signer);
    }
    await utils_1.logTxDetails(tx, `buy back ZENO from gov fees`);
});
config_1.task("revenue-buy-back").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("revenue-donate-rewards", "Donate purchased ZENO to the staking dials in the Emissions Controller")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const revenueBuyBackAddress = networkAddressFactory_1.resolveAddress("RevenueBuyBack", chain);
    const revenueBuyBack = generated_1.RevenueBuyBack__factory.connect(revenueBuyBackAddress, signer);
    const tx = await revenueBuyBack.donateRewards();
    await utils_1.logTxDetails(tx, `donate purchased ZENO to Emissions Controller`);
});
config_1.task("revenue-donate-rewards").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("votium-forward", "Forwards votium bribe. from votium dial")
    .addParam("proposal", "Convex finance proposal for Weekly Gauge Weight", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    // For example on the URL  https://vote.convexfinance.com/#/proposal/QmZpsJAvbKEY9YKFCZBUzzSMC5Y9vfy6QPA4HoXGsiLUyg
    // the proposal is QmZpsJAvbKEY9YKFCZBUzzSMC5Y9vfy6QPA4HoXGsiLUyg
    const hashFn = (str) => hre.ethers.utils.keccak256(hre.ethers.utils.toUtf8Bytes(str));
    const MIN_BRIBE_AMOUNT = 1;
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const votiumBribeForwarderAddress = networkAddressFactory_1.resolveAddress("VotiumForwarder", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const votiumBribeForwarder = generated_1.VotiumBribeForwarder__factory.connect(votiumBribeForwarderAddress, signer);
    const choiceIndex = await votiumBribeForwarder.choiceIndex();
    const zenoToken = generated_1.IERC20__factory.connect(zenoAddress, signer);
    const zenoBalance = await zenoToken.balanceOf(votiumBribeForwarderAddress);
    if (zenoBalance.lte(MIN_BRIBE_AMOUNT)) {
        throw new Error("ZENO balance to low");
    }
    const proposal = hashFn(taskArgs.proposal);
    console.log(`ZENO ${zenoBalance.toString()} to deposit into proposal ${proposal} with choiceIndex ${choiceIndex}`);
    //  Deposit zeno bribe
    const tx = await votiumBribeForwarder.depositBribe(zenoBalance, proposal);
    await utils_1.logTxDetails(tx, "depositBribe(zenoBalance, proposal)");
});
config_1.task("votium-forward").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.task("emissions-process", "Weekly mainnet emissions process")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .addOptionalParam("proposal", "Convex finance proposal for Weekly Gauge Weight", undefined, config_1.types.string)
    .setAction(async ({ speed, proposal }, hre) => {
    // Dump the expected dial distribution amounts
    await hre.run("dials-snap", { speed });
    // Dynamic import of increaseTime to avoid Hardhat error:
    //   Error HH9: Error while loading Hardhat's configuration.
    //   You probably tried to import the "hardhat" module from your config or a file imported from it.
    const { increaseTime } = await Promise.resolve().then(() => __importStar(require("@utils/time")));
    // Get to the next epoch
    await increaseTime(constants_1.ONE_HOUR);
    // Sends any zUSD or mBTC governance fees from the Savings Manager to the RevenueBuyBack contract
    await hre.run("savings-dist-fees", { masset: "zUSD", speed });
    await hre.run("savings-dist-fees", { masset: "mBTC", speed });
    // Buys ZENO using zUSD and mBTC governance fees
    await hre.run("revenue-buy-back", { speed });
    // Donates ZENO rewards to the staking contract dials in the Emissions Controller
    await hre.run("revenue-donate-rewards", { speed });
    // Calculate the weekly distribution amounts
    await hre.run("emission-calc", { speed });
    // Distributes to dial Vaults
    await hre.run("emission-dist", { speed, dials: 15 });
    // // Distributes to dial Vaults but not the staking vaults
    // await hre.run("emission-dist", { speed, dialIds: "2,3,4,5,6,7,8,9,10" })
    // Dial 15 (Votium) is skipped for now
    if (proposal === undefined) {
        await hre.run("votium-forward", { speed, proposal });
    }
    // Distributes to dial 16
    await hre.run("emission-dist", { speed, dialIds: "16" });
    // Dump the expected dial distribution amounts
    await hre.run("dials-snap", { speed });
});
//# sourceMappingURL=emissions.js.map