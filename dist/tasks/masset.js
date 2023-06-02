"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.subtask("masset-redeem", "Redeems a number of Save credits from a savings contract")
    .addParam("masset", "Symbol of the mAsset. eg zUSD or mBTC", undefined, config_1.types.string)
    .addParam("basset", "Symbol of the bAsset. eg USDC, DAI, USDT or DAI", undefined, config_1.types.string)
    .addParam("amount", "Amount of mAssets to be redeemed", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAccount = await signerFactory_1.getSignerAccount(hre, taskArgs.speed);
    const mAssetAddress = networkAddressFactory_1.resolveAddress(taskArgs.masset, chain, "address");
    const bAsset = networkAddressFactory_1.resolveToken(taskArgs.basset, chain, "address");
    const mAsset = generated_1.Masset__factory.connect(mAssetAddress, signerAccount.signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const minAmount = amount
        .mul(99)
        .div(100)
        .div(math_1.BN.from(10).pow(18 - bAsset.decimals));
    const tx = await mAsset.redeem(bAsset.address, amount, minAmount, signerAccount.address);
    await deploy_utils_1.logTxDetails(tx, `redeem ${taskArgs.amount} ${taskArgs.masset} for ${taskArgs.basset}`);
});
config_1.task("masset-redeem").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=masset.js.map