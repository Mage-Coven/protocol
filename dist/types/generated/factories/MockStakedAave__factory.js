"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockStakedAave__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_aave",
                type: "address",
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
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        inputs: [],
        name: "COOLDOWN_SECONDS",
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
        name: "UNSTAKE_WINDOW",
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
        name: "aave",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
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
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "claimRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cooldown",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "stakersCooldowns",
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
const _bytecode = "0x60a0604052620d2f006005556202a3006006553480156200001f57600080fd5b506040516200126838038062001268833981016040819052620000429162000292565b604080518082018252600b81526a5374616b6564204161766560a81b60208083019182528351808501909452600784526673746b4141564560c81b9084015281519192916200009491600391620001cf565b508051620000aa906004906020840190620001cf565b5050506001600160601b0319606084901b16608052620000de82620000d883670de0b6b3a7640000620002ee565b620000e7565b50505062000363565b6001600160a01b038216620001425760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001569190620002d3565b90915550506001600160a01b0382166000908152602081905260408120805483929062000185908490620002d3565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dd9062000310565b90600052602060002090601f0160209004810192826200020157600085556200024c565b82601f106200021c57805160ff19168380011785556200024c565b828001600101855582156200024c579182015b828111156200024c5782518255916020019190600101906200022f565b506200025a9291506200025e565b5090565b5b808211156200025a57600081556001016200025f565b80516001600160a01b03811681146200028d57600080fd5b919050565b600080600060608486031215620002a857600080fd5b620002b38462000275565b9250620002c36020850162000275565b9150604084015190509250925092565b60008219821115620002e957620002e96200034d565b500190565b60008160001904831182151516156200030b576200030b6200034d565b500290565b600181811c908216806200032557607f821691505b602082108114156200034757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60805160601c610ed8620003906000396000818161023e015281816104ce015261071b0152610ed86000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad5780639a99b4f0116100715780639a99b4f014610280578063a457c2d714610293578063a9059cbb146102a6578063adc9772e146102b9578063dd62ed3e146102cc57600080fd5b806370a08231146101f057806372b49d6314610219578063787a08a614610222578063819faf7b1461023957806395d89b411461027857600080fd5b80631e9a6950116100f45780631e9a69501461019d57806323b872dd146101b2578063313ce567146101c5578063359c4a96146101d457806339509351146101dd57600080fd5b806306fdde0314610126578063091030c314610144578063095ea7b31461017257806318160ddd14610195575b600080fd5b61012e610305565b60405161013b9190610dcd565b60405180910390f35b610164610152366004610cf0565b60076020526000908152604090205481565b60405190815260200161013b565b610185610180366004610d81565b610397565b604051901515815260200161013b565b600254610164565b6101b06101ab366004610d81565b6103ad565b005b6101856101c0366004610d45565b610550565b6040516012815260200161013b565b61016460065481565b6101856101eb366004610d81565b6105fa565b6101646101fe366004610cf0565b6001600160a01b031660009081526020819052604090205490565b61016460055481565b6101b0336000908152600760205260409020429055565b6102607f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013b565b61012e610636565b6101b061028e366004610d81565b610645565b6101856102a1366004610d81565b610653565b6101856102b4366004610d81565b6106ec565b6101b06102c7366004610d81565b6106f9565b6101646102da366004610d12565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461031490610e51565b80601f016020809104026020016040519081016040528092919081815260200182805461034090610e51565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b5050505050905090565b60006103a43384846107bc565b50600192915050565b600554336000908152600760205260409020546103ca9190610e22565b42116104155760405162461bcd60e51b815260206004820152601560248201527424a729aaa32324a1a4a2a72a2fa1a7a7a62227aba760591b60448201526064015b60405180910390fd5b600654600554336000908152600760205260409020546104359190610e22565b61043f9190610e22565b421061048d5760405162461bcd60e51b815260206004820152601760248201527f554e5354414b455f57494e444f575f46494e4953484544000000000000000000604482015260640161040c565b33600081815260208190526040902054906104a890826108e1565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561051257600080fd5b505af1158015610526573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054a9190610dab565b50505050565b600061055d848484610a27565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105e25760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161040c565b6105ef85338584036107bc565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103a4918590610631908690610e22565b6107bc565b60606004805461031490610e51565b61064f8282610bf5565b5050565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156106d55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161040c565b6106e233858584036107bc565b5060019392505050565b60006103a4338484610a27565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561076757600080fd5b505af115801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190610dab565b5033600090815260076020526040902042905561064f8282610bf5565b6001600160a01b03831661081e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161040c565b6001600160a01b03821661087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161040c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0382166109415760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161040c565b6001600160a01b038216600090815260208190526040902054818110156109b55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161040c565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109e4908490610e3a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108d4565b6001600160a01b038316610a8b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161040c565b6001600160a01b038216610aed5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161040c565b6001600160a01b03831660009081526020819052604090205481811015610b655760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161040c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b9c908490610e22565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610be891815260200190565b60405180910390a361054a565b6001600160a01b038216610c4b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161040c565b8060026000828254610c5d9190610e22565b90915550506001600160a01b03821660009081526020819052604081208054839290610c8a908490610e22565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b0381168114610ceb57600080fd5b919050565b600060208284031215610d0257600080fd5b610d0b82610cd4565b9392505050565b60008060408385031215610d2557600080fd5b610d2e83610cd4565b9150610d3c60208401610cd4565b90509250929050565b600080600060608486031215610d5a57600080fd5b610d6384610cd4565b9250610d7160208501610cd4565b9150604084013590509250925092565b60008060408385031215610d9457600080fd5b610d9d83610cd4565b946020939093013593505050565b600060208284031215610dbd57600080fd5b81518015158114610d0b57600080fd5b600060208083528351808285015260005b81811015610dfa57858101830151858201604001528201610dde565b81811115610e0c576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610e3557610e35610e8c565b500190565b600082821015610e4c57610e4c610e8c565b500390565b600181811c90821680610e6557607f821691505b60208210811415610e8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a2b3279861d2af0dd848dc48655597554fd631c8da587cb5828e5530aeb0e98964736f6c63430008060033";
class MockStakedAave__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_aave, _initialRecipient, _initialMint, overrides) {
        return super.deploy(_aave, _initialRecipient, _initialMint, overrides || {});
    }
    getDeployTransaction(_aave, _initialRecipient, _initialMint, overrides) {
        return super.getDeployTransaction(_aave, _initialRecipient, _initialMint, overrides || {});
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
exports.MockStakedAave__factory = MockStakedAave__factory;
MockStakedAave__factory.bytecode = _bytecode;
MockStakedAave__factory.abi = _abi;
//# sourceMappingURL=MockStakedAave__factory.js.map