"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockTrigger__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ILiquidator",
                name: "_liq",
                type: "address",
            },
            {
                internalType: "address",
                name: "_integration",
                type: "address",
            },
        ],
        name: "trigger",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061011c806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b92814d814602d575b600080fd5b603c6038366004609b565b603e565b005b60405163b350df5d60e01b81526001600160a01b03828116600483015283169063b350df5d90602401600060405180830381600087803b158015608057600080fd5b505af11580156093573d6000803e3d6000fd5b505050505050565b6000806040838503121560ad57600080fd5b823560b68160cf565b9150602083013560c48160cf565b809150509250929050565b6001600160a01b038116811460e357600080fd5b5056fea26469706673582212204b6fcf7f35b4612fb3de89ead28db4db0a61362b987a93a8232fa5bc02bd600e64736f6c63430008060033";
class MockTrigger__factory extends ethers_1.ContractFactory {
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
exports.MockTrigger__factory = MockTrigger__factory;
MockTrigger__factory.bytecode = _bytecode;
MockTrigger__factory.abi = _abi;
//# sourceMappingURL=MockTrigger__factory.js.map