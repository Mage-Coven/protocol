"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const ethers_1 = require("ethers");
const utils_1 = require("./utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.subtask("bridge-deposit", "Sends mainnet token to Polygon across Polygon's PoS Bridge")
    .addOptionalParam("token", "Symbol of mainnet token that is to be sent. eg ZENO or mBTC", "ZENO", config_1.types.string)
    .addOptionalParam("user", "Address of the account on Polygon that will receive the bridged tokens", undefined, config_1.types.string)
    .addParam("amount", "Amount of tokens to be sent without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const chainManagerAddress = networkAddressFactory_1.resolveAddress("PolygonRootChainManager", chain);
    const chainManager = generated_1.IRootChainManager__factory.connect(chainManagerAddress, signer);
    const tokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.token, chain);
    const userAddress = networkAddressFactory_1.resolveAddress(taskArgs.user, chain);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const abiCoder = ethers_1.ethers.utils.defaultAbiCoder;
    const amountData = abiCoder.encode(["uint256"], [amount]);
    const tx = await chainManager.depositFor(userAddress, tokenAddress, amountData);
    await utils_1.logTxDetails(tx, `deposit to Polygon PoS Bridge`);
});
config_1.task("bridge-deposit").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("bridge-withdraw", "Sends Polygon tokens back to mainnet across Polygon's PoS Bridge")
    .addOptionalParam("token", "Symbol of mainnet token that is to be sent. eg ZENO or mBTC", "ZENO", config_1.types.string)
    .addParam("amount", "Amount of tokens to be sent without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const tokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.token, chain);
    const token = generated_1.IChildToken__factory.connect(tokenAddress, signer);
    const amount = math_1.simpleToExactAmount(taskArgs.amount);
    const tx = await token.withdraw(amount);
    await utils_1.logTxDetails(tx, `withdraw ${taskArgs.amount} ${taskArgs.token} to Mainnet over the PoS Bridge`);
});
config_1.task("bridge-withdraw").setAction(async (_, __, runSuper) => {
    await runSuper();
});
//# sourceMappingURL=bridge.js.map