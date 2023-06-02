"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMasset__factory = void 0;
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
        name: "collectPlatformInterest",
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
        inputs: [
            {
                internalType: "address",
                name: "_input",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_inputQuantity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_minOutputQuantity",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "out_amt",
                type: "uint256",
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
                name: "_output",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_mAssetQuantity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_minOutputQuantity",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
        ],
        name: "redeem",
        outputs: [
            {
                internalType: "uint256",
                name: "outputQuantity",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "setAmountForPlatformInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_newRatio",
                type: "uint256",
            },
        ],
        name: "setRatio",
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
const _bytecode = "0x6080604052670d99a8cec7e20000600655600060075560006008553480156200002757600080fd5b5060405162001726380380620017268339810160408190526200004a916200030f565b84848484848484816003908051906020019062000069929190620001b2565b5080516200007f906004906020840190620001b2565b50506005805460ff191660ff8616908117909155620000ba91508390620000a890600a62000423565b620000b49084620004ee565b620000ca565b5050505050505050505062000579565b6001600160a01b038216620001255760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001399190620003bf565b90915550506001600160a01b0382166000908152602081905260408120805483929062000168908490620003bf565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001c09062000510565b90600052602060002090601f016020900481019282620001e457600085556200022f565b82601f10620001ff57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022f57825182559160200191906001019062000212565b506200023d92915062000241565b5090565b5b808211156200023d576000815560010162000242565b600082601f8301126200026a57600080fd5b81516001600160401b038082111562000287576200028762000563565b604051601f8301601f19908116603f01168101908282118183101715620002b257620002b262000563565b81604052838152602092508683858801011115620002cf57600080fd5b600091505b83821015620002f35785820183015181830184015290820190620002d4565b83821115620003055760008385830101525b9695505050505050565b600080600080600060a086880312156200032857600080fd5b85516001600160401b03808211156200034057600080fd5b6200034e89838a0162000258565b965060208801519150808211156200036557600080fd5b50620003748882890162000258565b945050604086015160ff811681146200038c57600080fd5b60608701519093506001600160a01b0381168114620003aa57600080fd5b80925050608086015190509295509295909350565b60008219821115620003d557620003d56200054d565b500190565b600181815b808511156200041b578160001904821115620003ff57620003ff6200054d565b808516156200040d57918102915b93841c9390800290620003df565b509250929050565b600062000431838362000438565b9392505050565b6000826200044957506001620004e8565b816200045857506000620004e8565b81600181146200047157600281146200047c576200049c565b6001915050620004e8565b60ff8411156200049057620004906200054d565b50506001821b620004e8565b5060208310610133831016604e8410600b8410161715620004c1575081810a620004e8565b620004cd8383620003da565b8060001904821115620004e457620004e46200054d565b0290505b92915050565b60008160001904831182151516156200050b576200050b6200054d565b500290565b600181811c908216806200052557607f821691505b602082108114156200054757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61119d80620005896000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063609bb413116100a2578063a457c2d711610071578063a457c2d71461023a578063a9059cbb1461024d578063b2237ba314610260578063dd62ed3e14610273578063f74bfe8e146102ac57600080fd5b8063609bb413146101ee57806370a08231146102015780637e8901ea1461022a57806395d89b411461023257600080fd5b80632a2fab22116100e95780632a2fab22146101815780632dd5dde01461019e578063313ce567146101b357806339509351146101c857806343bcfab6146101db57600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102bf565b6040516101309190610f66565b60405180910390f35b61014c610147366004610e98565b610351565b6040519015158152602001610130565b6002545b604051908152602001610130565b61014c61017c366004610e5c565b610368565b610189610417565b60408051928352602083019190915201610130565b6101b16101ac366004610f2a565b600755565b005b60055460405160ff9091168152602001610130565b61014c6101d6366004610e98565b61043f565b6101606101e9366004610ec2565b61047b565b6101b16101fc366004610f2a565b600855565b61016061020f366004610e07565b6001600160a01b031660009081526020819052604090205490565b61018961064e565b610123610676565b61014c610248366004610e98565b610685565b61014c61025b366004610e98565b61071e565b6101b161026e366004610f2a565b600655565b610160610281366004610e29565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101606102ba366004610ec2565b61072b565b6060600380546102ce90611116565b80601f01602080910402602001604051908101604052809291908181526020018280546102fa90611116565b80156103475780601f1061031c57610100808354040283529160200191610347565b820191906000526020600020905b81548152906001019060200180831161032a57829003601f168201915b5050505050905090565b600061035e3384846108d2565b5060015b92915050565b60006103758484846109f7565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103ff5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61040c85338584036108d2565b506001949350505050565b60008061042633600754610bc6565b600754915061043460025490565b600060075591929050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161035e918590610476908690610fbb565b6108d2565b60006104873385610ca5565b6000856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c257600080fd5b505afa1580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa9190610f43565b60ff1690506ec097ce7bc90715b34b9f100000000061051a82600a611038565b60065461052790886110e0565b61053191906110e0565b61053b9190610fd3565b9150838210156105845760405162461bcd60e51b815260206004820152601460248201527362417373657420717479203c206d696e2071747960601b60448201526064016103f6565b600082116105c25760405162461bcd60e51b815260206004820152600b60248201526a04f7574707574203d3d20360ac1b60448201526064016103f6565b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820184905287169063a9059cbb90604401602060405180830381600087803b15801561060c57600080fd5b505af1158015610620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106449190610f08565b5050949350505050565b60008061065d33600854610bc6565b600854915061066b60025490565b600060085591929050565b6060600480546102ce90611116565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156107075760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103f6565b61071433858584036108d2565b5060019392505050565b600061035e3384846109f7565b600080856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561076757600080fd5b505afa15801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190610f43565b60ff169050670de0b6b3a76400006006548260126107bd91906110ff565b6107c890600a611038565b6107d290886110e0565b6107dc91906110e0565b6107e69190610fd3565b9150838210156108385760405162461bcd60e51b815260206004820152601e60248201527f4d494e543a204f757470757420616d6f756e74206e6f7420656e6f756768000060448201526064016103f6565b6040516323b872dd60e01b8152336004820152306024820152604481018690526001600160a01b038716906323b872dd90606401602060405180830381600087803b15801561088657600080fd5b505af115801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190610f08565b506108c98383610bc6565b50949350505050565b6001600160a01b0383166109345760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103f6565b6001600160a01b0382166109955760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103f6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610a5b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103f6565b6001600160a01b038216610abd5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103f6565b6001600160a01b03831660009081526020819052604090205481811015610b355760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103f6565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b6c908490610fbb565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bb891815260200190565b60405180910390a350505050565b6001600160a01b038216610c1c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103f6565b8060026000828254610c2e9190610fbb565b90915550506001600160a01b03821660009081526020819052604081208054839290610c5b908490610fbb565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610d055760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103f6565b6001600160a01b03821660009081526020819052604090205481811015610d795760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103f6565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610da89084906110ff565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016109ea565b80356001600160a01b0381168114610e0257600080fd5b919050565b600060208284031215610e1957600080fd5b610e2282610deb565b9392505050565b60008060408385031215610e3c57600080fd5b610e4583610deb565b9150610e5360208401610deb565b90509250929050565b600080600060608486031215610e7157600080fd5b610e7a84610deb565b9250610e8860208501610deb565b9150604084013590509250925092565b60008060408385031215610eab57600080fd5b610eb483610deb565b946020939093013593505050565b60008060008060808587031215610ed857600080fd5b610ee185610deb565b93506020850135925060408501359150610efd60608601610deb565b905092959194509250565b600060208284031215610f1a57600080fd5b81518015158114610e2257600080fd5b600060208284031215610f3c57600080fd5b5035919050565b600060208284031215610f5557600080fd5b815160ff81168114610e2257600080fd5b600060208083528351808285015260005b81811015610f9357858101830151858201604001528201610f77565b81811115610fa5576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610fce57610fce611151565b500190565b600082610ff057634e487b7160e01b600052601260045260246000fd5b500490565b600181815b8085111561103057816000190482111561101657611016611151565b8085161561102357918102915b93841c9390800290610ffa565b509250929050565b6000610e22838360008261104e57506001610362565b8161105b57506000610362565b8160018114611071576002811461107b57611097565b6001915050610362565b60ff84111561108c5761108c611151565b50506001821b610362565b5060208310610133831016604e8410600b84101617156110ba575081810a610362565b6110c48383610ff5565b80600019048211156110d8576110d8611151565b029392505050565b60008160001904831182151516156110fa576110fa611151565b500290565b60008282101561111157611111611151565b500390565b600181811c9082168061112a57607f821691505b6020821081141561114b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f702963410e68ba578e0e8860704eedafe3758f17c3622fb2c033785386507df64736f6c63430008060033";
class MockMasset__factory extends ethers_1.ContractFactory {
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
exports.MockMasset__factory = MockMasset__factory;
MockMasset__factory.bytecode = _bytecode;
MockMasset__factory.abi = _abi;
//# sourceMappingURL=MockMasset__factory.js.map