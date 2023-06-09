"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRootChainManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "userAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootToken",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "depositFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRootChainManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRootChainManager__factory = IRootChainManager__factory;
IRootChainManager__factory.abi = _abi;
//# sourceMappingURL=IRootChainManager__factory.js.map