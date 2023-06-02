"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedemptionPriceSnapMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newPrice",
                type: "uint256",
            },
        ],
        name: "setRedemptionPriceSnap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "snappedRedemptionPrice",
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
const _bytecode = "0x608060405234801561001057600080fd5b506b033b2e3c9fd0803ce800000060005560ac8061002f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80636998c48d146037578063a9531a0b14604c575b600080fd5b60005460405190815260200160405180910390f35b605c6057366004605e565b600055565b005b600060208284031215606f57600080fd5b503591905056fea2646970667358221220e26c67b48400297e187d5d48108d9a03dd250a7d9f5c8272182c6ceae130647864736f6c63430008060033";
class RedemptionPriceSnapMock__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RedemptionPriceSnapMock__factory = RedemptionPriceSnapMock__factory;
RedemptionPriceSnapMock__factory.bytecode = _bytecode;
RedemptionPriceSnapMock__factory.abi = _abi;
//# sourceMappingURL=RedemptionPriceSnapMock__factory.js.map