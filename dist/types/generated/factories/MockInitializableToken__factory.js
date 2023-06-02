"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockInitializableToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_nameArg",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbolArg",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_decimals",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "_initialRecipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_initialMint",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610d63806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636c945221116100715780636c9452211461014757806370a082311461015c57806395d89b4114610185578063a457c2d71461018d578063a9059cbb146101a0578063dd62ed3e146101b357600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101ec565b6040516100ce9190610b4e565b60405180910390f35b6100ea6100e5366004610a82565b61027e565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610a46565b610295565b60055460405160ff90911681526020016100ce565b6100ea610142366004610a82565b61034b565b61015a610155366004610aac565b610382565b005b6100fe61016a3660046109f1565b6001600160a01b031660009081526020819052604090205490565b6100c1610421565b6100ea61019b366004610a82565b610430565b6100ea6101ae366004610a82565b6104cb565b6100fe6101c1366004610a13565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101fb90610cdc565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610cdc565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b5050505050905090565b600061028b3384846104d8565b5060015b92915050565b60006102a28484846105fc565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561032c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610340853361033b8685610cc5565b6104d8565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161028b91859061033b908690610ba3565b6103f787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892506107d4915050565b6104188261040960ff8616600a610bfe565b6104139084610ca6565b610814565b50505050505050565b6060600480546101fb90610cdc565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104b25760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610323565b6104c1338561033b8685610cc5565b5060019392505050565b600061028b3384846105fc565b6001600160a01b03831661053a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610323565b6001600160a01b03821661059b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610323565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610323565b6001600160a01b0382166106c25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610323565b6001600160a01b0383166000908152602081905260409020548181101561073a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610323565b6107448282610cc5565b6001600160a01b03808616600090815260208190526040808220939093559085168152908120805484929061077a908490610ba3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107c691815260200190565b60405180910390a350505050565b82516107e79060039060208601906108f3565b5081516107fb9060049060208501906108f3565b506005805460ff191660ff929092169190911790555050565b6001600160a01b03821661086a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610323565b806002600082825461087c9190610ba3565b90915550506001600160a01b038216600090815260208190526040812080548392906108a9908490610ba3565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546108ff90610cdc565b90600052602060002090601f0160209004810192826109215760008555610967565b82601f1061093a57805160ff1916838001178555610967565b82800160010185558215610967579182015b8281111561096757825182559160200191906001019061094c565b50610973929150610977565b5090565b5b808211156109735760008155600101610978565b80356001600160a01b03811681146109a357600080fd5b919050565b60008083601f8401126109ba57600080fd5b50813567ffffffffffffffff8111156109d257600080fd5b6020830191508360208285010111156109ea57600080fd5b9250929050565b600060208284031215610a0357600080fd5b610a0c8261098c565b9392505050565b60008060408385031215610a2657600080fd5b610a2f8361098c565b9150610a3d6020840161098c565b90509250929050565b600080600060608486031215610a5b57600080fd5b610a648461098c565b9250610a726020850161098c565b9150604084013590509250925092565b60008060408385031215610a9557600080fd5b610a9e8361098c565b946020939093013593505050565b600080600080600080600060a0888a031215610ac757600080fd5b873567ffffffffffffffff80821115610adf57600080fd5b610aeb8b838c016109a8565b909950975060208a0135915080821115610b0457600080fd5b50610b118a828b016109a8565b909650945050604088013560ff81168114610b2b57600080fd5b9250610b396060890161098c565b91506080880135905092959891949750929550565b600060208083528351808285015260005b81811015610b7b57858101830151858201604001528201610b5f565b81811115610b8d576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610bb657610bb6610d17565b500190565b600181815b80851115610bf6578160001904821115610bdc57610bdc610d17565b80851615610be957918102915b93841c9390800290610bc0565b509250929050565b6000610a0c8383600082610c145750600161028f565b81610c215750600061028f565b8160018114610c375760028114610c4157610c5d565b600191505061028f565b60ff841115610c5257610c52610d17565b50506001821b61028f565b5060208310610133831016604e8410600b8410161715610c80575081810a61028f565b610c8a8383610bbb565b8060001904821115610c9e57610c9e610d17565b029392505050565b6000816000190483118215151615610cc057610cc0610d17565b500290565b600082821015610cd757610cd7610d17565b500390565b600181811c90821680610cf057607f821691505b60208210811415610d1157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203449114d30d17f641b62e7a078bfe5901320b5d3a5a7dd566230ae95f96a5cc364736f6c63430008060033";
class MockInitializableToken__factory extends ethers_1.ContractFactory {
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
exports.MockInitializableToken__factory = MockInitializableToken__factory;
MockInitializableToken__factory.bytecode = _bytecode;
MockInitializableToken__factory.abi = _abi;
//# sourceMappingURL=MockInitializableToken__factory.js.map