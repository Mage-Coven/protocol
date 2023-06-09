"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockVotiumBribe__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_proposal",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_choiceIndex",
                type: "uint256",
            },
        ],
        name: "Bribed",
        type: "event",
    },
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
    {
        inputs: [],
        name: "feeAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080604052600080546001600160a01b03191673e39b8617d571cee5e75e1ec6b2bb40ddc8cf6fa317905534801561003657600080fd5b50610509806100466000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063412753581461003b578063f7b5d4a01461006a575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61007d6100783660046103ca565b61007f565b005b60008061008c8186610482565b6000549091506100ab906001600160a01b038881169133911685610114565b6100c06001600160a01b038716333084610114565b604080516001600160a01b03881681526020810183905290810184905284907f74bd0b58587a15767427910140bcf99db1ef7f905cb0a2983a72cd20339542279060600160405180910390a2505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261016e908590610174565b50505050565b60006101c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102509092919063ffffffff16565b80519091501561024b57808060200190518101906101e79190610411565b61024b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b505050565b606061025f8484600085610269565b90505b9392505050565b6060824710156102ca5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610242565b843b6103185760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610242565b600080866001600160a01b031685876040516103349190610433565b60006040518083038185875af1925050503d8060008114610371576040519150601f19603f3d011682016040523d82523d6000602084013e610376565b606091505b5091509150610386828286610391565b979650505050505050565b606083156103a0575081610262565b8251156103b05782518084602001fd5b8160405162461bcd60e51b8152600401610242919061044f565b600080600080608085870312156103e057600080fd5b84356001600160a01b03811681146103f757600080fd5b966020860135965060408601359560600135945092505050565b60006020828403121561042357600080fd5b8151801515811461026257600080fd5b600082516104458184602087016104a7565b9190910192915050565b602081526000825180602084015261046e8160408501602087016104a7565b601f01601f19169190910160400192915050565b6000828210156104a257634e487b7160e01b600052601160045260246000fd5b500390565b60005b838110156104c25781810151838201526020016104aa565b8381111561016e575050600091015256fea26469706673582212206ebd917517c3ae219739027b55814afb99fc025a788d86e29ffa73940efe783d64736f6c63430008060033";
class MockVotiumBribe__factory extends ethers_1.ContractFactory {
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
exports.MockVotiumBribe__factory = MockVotiumBribe__factory;
MockVotiumBribe__factory.bytecode = _bytecode;
MockVotiumBribe__factory.abi = _abi;
//# sourceMappingURL=MockVotiumBribe__factory.js.map