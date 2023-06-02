"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISavingsManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
        ],
        name: "collectAndDistributeInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
        ],
        name: "collectAndStreamInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_liquidation",
                type: "uint256",
            },
        ],
        name: "depositLiquidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
        ],
        name: "distributeUnallocatedInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
        ],
        name: "lastBatchCollected",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ISavingsManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISavingsManager__factory = ISavingsManager__factory;
ISavingsManager__factory.abi = _abi;
//# sourceMappingURL=ISavingsManager__factory.js.map