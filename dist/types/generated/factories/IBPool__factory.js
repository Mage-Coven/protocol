"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenAmountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minPoolAmountOut",
                type: "uint256",
            },
        ],
        name: "joinswapExternAmountIn",
        outputs: [
            {
                internalType: "uint256",
                name: "poolAmountOut",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenAmountIn",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxPrice",
                type: "uint256",
            },
        ],
        name: "swapExactAmountIn",
        outputs: [
            {
                internalType: "uint256",
                name: "tokenAmountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "spotPriceAfter",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IBPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBPool__factory = IBPool__factory;
IBPool__factory.abi = _abi;
//# sourceMappingURL=IBPool__factory.js.map