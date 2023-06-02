"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.subtask("save-deposit", "Deposit to savings contract")
    .addParam("masset", "Symbol of the mAsset. eg zUSD or mBTC", undefined, config_1.types.string)
    .addParam("amount", "Amount to be staked", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const saveAddress = networkAddressFactory_1.resolveAddress(taskArgs.masset, chain, "savings");
    const save = generated_1.SavingsContract__factory.connect(saveAddress, signerAccount.signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await save["depositSavings(uint256)"](amount);
    await deploy_utils_1.logTxDetails(tx, `deposit ${taskArgs.amount} ${taskArgs.masset} in Save`);
});
config_1.task("save-deposit").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("save-redeem", "Redeems a number of Save credits from a savings contract")
    .addParam("masset", "Symbol of the mAsset. eg zUSD or mBTC", undefined, config_1.types.string)
    .addParam("amount", "Amount of Save credits to be redeemed", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const saveAddress = networkAddressFactory_1.resolveAddress(taskArgs.masset, chain, "savings");
    const save = generated_1.SavingsContract__factory.connect(saveAddress, signerAccount.signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await save.redeem(amount);
    await deploy_utils_1.logTxDetails(tx, `redeem ${taskArgs.amount} ${taskArgs.masset} in Save`);
});
config_1.task("save-redeem").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=save.js.map