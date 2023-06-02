"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBundledTransactions = exports.sendBundledRawTransactions = exports.sendPrivateTransaction = void 0;
const math_1 = require("@utils/math");
const providers_1 = require("@ethersproject/providers");
// Ethers provider for Flashbots Protect RPC
const flashbotsProvider = new providers_1.JsonRpcProvider("https://rpc.flashbots.net");
const sendPrivateTransaction = async (tx, signer) => {
    var _a, _b, _c, _d, _e;
    console.log(`About to send private transaction using signer address ${await signer.getAddress()}`);
    const gasPriceChain = (_a = tx.gasPrice) !== null && _a !== void 0 ? _a : (await signer.getGasPrice());
    const gasPrice = gasPriceChain.mul(11).div(10); // add 10% to gas price
    const txUnsigned = {
        to: tx.to,
        data: tx.data,
        nonce: (_b = tx.nonce) !== null && _b !== void 0 ? _b : (await signer.getTransactionCount()),
        gasLimit: (_c = tx.gasLimit) !== null && _c !== void 0 ? _c : (await signer.estimateGas(tx)),
        gasPrice,
        value: (_d = tx.value) !== null && _d !== void 0 ? _d : math_1.BN.from(0),
        chainId: (_e = tx.chainId) !== null && _e !== void 0 ? _e : (await signer.getChainId()),
    };
    console.log(`nonce ${txUnsigned.nonce}`);
    console.log(`gas limit ${txUnsigned.gasLimit}`);
    console.log(`gas price ${txUnsigned.gasPrice}`);
    const txRaw = await signer.signTransaction(txUnsigned);
    return flashbotsProvider.sendTransaction(txRaw);
};
exports.sendPrivateTransaction = sendPrivateTransaction;
const sendBundledRawTransactions = async (txsEncodedSigned, fromBlock) => {
    const txHash = await flashbotsProvider.send("eth_sendBundle", [{ txs: txsEncodedSigned, fromBlock: fromBlock.toHexString() }]);
    console.log(`Taichi tx hash ${txHash}`);
    return txHash;
};
exports.sendBundledRawTransactions = sendBundledRawTransactions;
const sendBundledTransactions = async (txs, signer) => {
    var _a, _b;
    console.log(`About to send a bundle of ${txs.length} transactions using signer address ${await signer.getAddress()}`);
    let nonce = await signer.getTransactionCount();
    const gasPrice = await signer.getGasPrice();
    const chainId = await signer.getChainId();
    const block = await signer.provider.getBlock("latest");
    const rawTxs = [];
    for (const tx of txs) {
        const txUnsigned = {
            to: tx.to,
            data: tx.data,
            nonce,
            gasLimit: (_a = tx.gasLimit) !== null && _a !== void 0 ? _a : (await signer.estimateGas(tx)),
            gasPrice: gasPrice.mul(6).div(5),
            value: (_b = tx.value) !== null && _b !== void 0 ? _b : math_1.BN.from(0),
            chainId,
        };
        console.log(`nonce ${txUnsigned.nonce}`);
        console.log(`gas limit ${txUnsigned.gasLimit}`);
        console.log(`gas price ${txUnsigned.gasPrice}`);
        const txRaw = await signer.signTransaction(txUnsigned);
        nonce += 1;
    }
    return exports.sendBundledRawTransactions(rawTxs, math_1.BN.from(block.number));
};
exports.sendBundledTransactions = sendBundledTransactions;
//# sourceMappingURL=flashbots.js.map