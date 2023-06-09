"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRPFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "factoryAddress",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "poolTokenSymbol",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "poolTokenName",
                        type: "string",
                    },
                    {
                        internalType: "address[]",
                        name: "constituentTokens",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "tokenBalances",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "tokenWeights",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256",
                        name: "swapFee",
                        type: "uint256",
                    },
                ],
                internalType: "struct CRPFactory.PoolParams",
                name: "poolParams",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "canPauseSwapping",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "canChangeSwapFee",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "canChangeWeights",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "canAddRemoveTokens",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "canWhitelistLPs",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "canChangeCap",
                        type: "bool",
                    },
                ],
                internalType: "struct CRPFactory.Rights",
                name: "rights",
                type: "tuple",
            },
        ],
        name: "newCrp",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class CRPFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CRPFactory__factory = CRPFactory__factory;
CRPFactory__factory.abi = _abi;
//# sourceMappingURL=CRPFactory__factory.js.map