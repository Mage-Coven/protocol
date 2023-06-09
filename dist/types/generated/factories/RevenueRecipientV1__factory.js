"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueRecipientV1__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
        ],
        name: "migrateBPT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class RevenueRecipientV1__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RevenueRecipientV1__factory = RevenueRecipientV1__factory;
RevenueRecipientV1__factory.abi = _abi;
//# sourceMappingURL=RevenueRecipientV1__factory.js.map