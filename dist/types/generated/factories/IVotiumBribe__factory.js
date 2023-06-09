"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVotiumBribe__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "_proposal",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_choiceIndex",
                type: "uint256",
            },
        ],
        name: "depositBribe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IVotiumBribe__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IVotiumBribe__factory = IVotiumBribe__factory;
IVotiumBribe__factory.abi = _abi;
//# sourceMappingURL=IVotiumBribe__factory.js.map