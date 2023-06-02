"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMasset1__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
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
        name: "collectInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "totalInterestGained",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "newSupply",
                type: "uint256",
            },
        ],
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
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "setAmountForCollectInterest",
        outputs: [],
        stateMutability: "nonpayable",
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
const _bytecode = "0x608060405260006006553480156200001657600080fd5b5060405162000ecc38038062000ecc8339810160408190526200003991620002fe565b84848484848484816003908051906020019062000058929190620001a1565b5080516200006e906004906020840190620001a1565b50506005805460ff191660ff8616908117909155620000a9915083906200009790600a62000412565b620000a39084620004dd565b620000b9565b5050505050505050505062000568565b6001600160a01b038216620001145760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001289190620003ae565b90915550506001600160a01b0382166000908152602081905260408120805483929062000157908490620003ae565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001af90620004ff565b90600052602060002090601f016020900481019282620001d357600085556200021e565b82601f10620001ee57805160ff19168380011785556200021e565b828001600101855582156200021e579182015b828111156200021e57825182559160200191906001019062000201565b506200022c92915062000230565b5090565b5b808211156200022c576000815560010162000231565b600082601f8301126200025957600080fd5b81516001600160401b038082111562000276576200027662000552565b604051601f8301601f19908116603f01168101908282118183101715620002a157620002a162000552565b81604052838152602092508683858801011115620002be57600080fd5b600091505b83821015620002e25785820183015181830184015290820190620002c3565b83821115620002f45760008385830101525b9695505050505050565b600080600080600060a086880312156200031757600080fd5b85516001600160401b03808211156200032f57600080fd5b6200033d89838a0162000247565b965060208801519150808211156200035457600080fd5b50620003638882890162000247565b945050604086015160ff811681146200037b57600080fd5b60608701519093506001600160a01b03811681146200039957600080fd5b80925050608086015190509295509295909350565b60008219821115620003c457620003c46200053c565b500190565b600181815b808511156200040a578160001904821115620003ee57620003ee6200053c565b80851615620003fc57918102915b93841c9390800290620003ce565b509250929050565b600062000420838362000427565b9392505050565b6000826200043857506001620004d7565b816200044757506000620004d7565b81600181146200046057600281146200046b576200048b565b6001915050620004d7565b60ff8411156200047f576200047f6200053c565b50506001821b620004d7565b5060208310610133831016604e8410600b8410161715620004b0575081810a620004d7565b620004bc8383620003c9565b8060001904821115620004d357620004d36200053c565b0290505b92915050565b6000816000190483118215151615620004fa57620004fa6200053c565b500290565b600181811c908216806200051457607f821691505b602082108114156200053657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61095480620005786000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063313ce5671161008c57806395d89b411161006657806395d89b41146101bd578063a457c2d7146101c5578063a9059cbb146101d8578063dd62ed3e146101eb57600080fd5b8063313ce5671461016c578063395093511461018157806370a082311461019457600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd146101275780632a2fab221461013a5780632dd5dde014610157575b600080fd5b6100dc610224565b6040516100e99190610868565b60405180910390f35b610105610100366004610825565b6102b6565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046107e9565b6102cc565b61014261037b565b604080519283526020830191909152016100e9565b61016a61016536600461084f565b600655565b005b60055460405160ff90911681526020016100e9565b61010561018f366004610825565b610394565b6101196101a2366004610794565b6001600160a01b031660009081526020819052604090205490565b6100dc6103d0565b6101056101d3366004610825565b6103df565b6101056101e6366004610825565b610478565b6101196101f93660046107b6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b606060038054610233906108e3565b80601f016020809104026020016040519081016040528092919081815260200182805461025f906108e3565b80156102ac5780601f10610281576101008083540402835291602001916102ac565b820191906000526020600020905b81548152906001019060200180831161028f57829003601f168201915b5050505050905090565b60006102c3338484610485565b50600192915050565b60006102d98484846105a9565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103635760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103708533858403610485565b506001949350505050565b600654600061038960025490565b600060065591929050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102c39185906103cb9086906108bd565b610485565b606060048054610233906108e3565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104615760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161035a565b61046e3385858403610485565b5060019392505050565b60006102c33384846105a9565b6001600160a01b0383166104e75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161035a565b6001600160a01b0382166105485760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161035a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661060d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161035a565b6001600160a01b03821661066f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161035a565b6001600160a01b038316600090815260208190526040902054818110156106e75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161035a565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061071e9084906108bd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161076a91815260200190565b60405180910390a350505050565b80356001600160a01b038116811461078f57600080fd5b919050565b6000602082840312156107a657600080fd5b6107af82610778565b9392505050565b600080604083850312156107c957600080fd5b6107d283610778565b91506107e060208401610778565b90509250929050565b6000806000606084860312156107fe57600080fd5b61080784610778565b925061081560208501610778565b9150604084013590509250925092565b6000806040838503121561083857600080fd5b61084183610778565b946020939093013593505050565b60006020828403121561086157600080fd5b5035919050565b600060208083528351808285015260005b8181101561089557858101830151858201604001528201610879565b818111156108a7576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156108de57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806108f757607f821691505b6020821081141561091857634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212208d78d9f4535201c64948cd4ccd02d40f5b12059a5d632bfeeafc2fbe9ebb044b64736f6c63430008060033";
class MockMasset1__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_name, _symbol, _decimals, _initialRecipient, _initialMint, overrides) {
        return super.deploy(_name, _symbol, _decimals, _initialRecipient, _initialMint, overrides || {});
    }
    getDeployTransaction(_name, _symbol, _decimals, _initialRecipient, _initialMint, overrides) {
        return super.getDeployTransaction(_name, _symbol, _decimals, _initialRecipient, _initialMint, overrides || {});
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
exports.MockMasset1__factory = MockMasset1__factory;
MockMasset1__factory.bytecode = _bytecode;
MockMasset1__factory.abi = _abi;
//# sourceMappingURL=MockMasset1__factory.js.map