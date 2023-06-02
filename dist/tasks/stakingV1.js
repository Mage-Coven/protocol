"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.task("eject-stakers", "Ejects expired stakers from Meta staking contract (vZENO)")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const ejectorAddress = networkAddressFactory_1.getChainAddress("Ejector", chain);
    console.log(`Ejector address ${ejectorAddress}`);
    const ejector = generated_1.IEjector__factory.connect(ejectorAddress, signer);
    // TODO check the last time the eject was run
    // Check it's been more than 7 days since the last eject has been run
    // get stakers from API
    const response = await axios_1.default.get("https://api-dot-xzeno.appspot.com/stakers");
    const stakers = response.data.ejected;
    if (stakers.length === 0) {
        console.error(`No stakers to eject`);
        process.exit(0);
    }
    console.log(`${stakers.length} stakers to be ejected: ${stakers}`);
    const tx = await ejector.ejectMany(stakers);
    await deploy_utils_1.logTxDetails(tx, "ejectMany");
});
config_1.subtask("vzeno-expire", "Expire old staking V1 contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const vzenoAddress = networkAddressFactory_1.resolveAddress("vZENO", chain);
    const vzeno = generated_1.IncentivisedVotingLockup__factory.connect(vzenoAddress, signer);
    const tx = await vzeno.expireContract();
    await deploy_utils_1.logTxDetails(tx, "Expire old V1 ZENO staking contract");
});
config_1.task("vzeno-expire").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vzeno-withdraw", "Withdraw ZENO from old Staking V1 contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const vzenoAddress = networkAddressFactory_1.resolveAddress("vZENO", chain);
    const vzeno = generated_1.IncentivisedVotingLockup__factory.connect(vzenoAddress, signer);
    const tx = await vzeno.withdraw();
    await deploy_utils_1.logTxDetails(tx, "Withdraw ZENO from Staking V1 contract");
});
config_1.task("vzeno-withdraw").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vzeno-claim", "Claim ZENO from old Staking V1 contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const vzenoAddress = networkAddressFactory_1.resolveAddress("vZENO", chain);
    const vzeno = generated_1.IncentivisedVotingLockup__factory.connect(vzenoAddress, signer);
    const tx = await vzeno.claimReward();
    await deploy_utils_1.logTxDetails(tx, "Claim ZENO from old Staking V2 contract");
});
config_1.task("vzeno-claim").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("vzeno-exit", "Withdraw and claim ZENO from old Staking V1 contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed, false);
    const chain = networkAddressFactory_1.getChain(hre);
    const vzenoAddress = networkAddressFactory_1.resolveAddress("vZENO", chain);
    const vzeno = generated_1.IncentivisedVotingLockup__factory.connect(vzenoAddress, signer);
    const tx = await vzeno.exit();
    await deploy_utils_1.logTxDetails(tx, "Withdraw and claim ZENO from old Staking V2 contract");
});
config_1.task("vzeno-exit").setAction(async (_, __, runSuper) => {
    await runSuper();
});
//# sourceMappingURL=stakingV1.js.map