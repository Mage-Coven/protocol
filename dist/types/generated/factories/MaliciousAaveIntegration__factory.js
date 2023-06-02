"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaliciousAaveIntegration__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_nexus",
                type: "address",
            },
            {
                internalType: "address",
                name: "_platformAddress",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "_bAssets",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "_pTokens",
                type: "address[]",
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
                name: "_bAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_pToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_pToken",
                type: "address",
            },
        ],
        name: "PTokenAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "bAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "pToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "userAmount",
                type: "uint256",
            },
        ],
        name: "PlatformWithdrawal",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "Whitelisted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_pToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "Withdrawal",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_whitelisted",
                type: "address[]",
            },
        ],
        name: "addWhitelist",
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
        name: "bAssetToPToken",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
        ],
        name: "checkBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "balance",
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
                name: "_bAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_hasTxFee",
                type: "bool",
            },
        ],
        name: "deposit",
        outputs: [
            {
                internalType: "uint256",
                name: "quantityDeposited",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "nexus",
        outputs: [
            {
                internalType: "contract INexus",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "platformAddress",
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
    {
        inputs: [],
        name: "reApproveAllTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_pToken",
                type: "address",
            },
        ],
        name: "setPTokenAddress",
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
        name: "whitelist",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_isTokenFeeCharged",
                type: "bool",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_totalAmount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_isTokenFeeCharged",
                type: "bool",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_bAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdrawRaw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b5060405162002109380380620021098339810160408190526200003491620008fa565b836001600160a01b038116620000915760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052600080546001600160a01b0319166001600160a01b038516179055815181518114620001105760405162461bcd60e51b815260206004820152601460248201527f496e76616c696420696e70757420617272617973000000000000000000000000604482015260640162000088565b60005b818110156200017b576200016684828151811062000135576200013562000a78565b602002602001015184838151811062000152576200015262000a78565b60200260200101516200018760201b60201c565b80620001728162000a4e565b91505062000113565b50505050505062000aa4565b6001600160a01b038281166000908152600160205260409020541615620001e65760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b604482015260640162000088565b6001600160a01b038216158015906200020757506001600160a01b03811615155b620002495760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015260640162000088565b6001600160a01b03828116600081815260016020818152604080842080549688166001600160a01b031997881681179091556002805494850181559094527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909201805490951684179094555190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a2620002f28282620002f6565b5050565b60006200030262000320565b90506200031b83826200040060201b620006a31760201c565b505050565b6000805460408051630261bf8b60e01b8152905183926001600160a01b031691630261bf8b916004808301926020929190829003018186803b1580156200036657600080fd5b505afa1580156200037b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003a19190620008dc565b90506001600160a01b038116620003fb5760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f742065786973740000000000604482015260640162000088565b919050565b62000426816000846001600160a01b03166200044d60201b620006ca179092919060201c565b620002f281600019846001600160a01b03166200044d60201b620006ca179092919060201c565b801580620004db5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200049e57600080fd5b505afa158015620004b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004d99190620009ae565b155b6200054f5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000088565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200031b918591620005a716565b600062000603826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200068560201b62000821179092919060201c565b8051909150156200031b57808060200190518101906200062491906200098a565b6200031b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000088565b6060620006968484600085620006a0565b90505b9392505050565b606082471015620007035760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000088565b843b620007535760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000088565b600080866001600160a01b03168587604051620007719190620009c8565b60006040518083038185875af1925050503d8060008114620007b0576040519150601f19603f3d011682016040523d82523d6000602084013e620007b5565b606091505b509092509050620007c8828286620007d3565b979650505050505050565b60608315620007e457508162000699565b825115620007f55782518084602001fd5b8160405162461bcd60e51b8152600401620000889190620009e6565b80516001600160a01b0381168114620003fb57600080fd5b600082601f8301126200083b57600080fd5b815160206001600160401b03808311156200085a576200085a62000a8e565b8260051b604051601f19603f8301168101818110848211171562000882576200088262000a8e565b60405284815283810192508684018288018501891015620008a257600080fd5b600092505b85831015620008d057620008bb8162000811565b845292840192600192909201918401620008a7565b50979650505050505050565b600060208284031215620008ef57600080fd5b620006998262000811565b600080600080608085870312156200091157600080fd5b6200091c8562000811565b93506200092c6020860162000811565b60408601519093506001600160401b03808211156200094a57600080fd5b620009588883890162000829565b935060608701519150808211156200096f57600080fd5b506200097e8782880162000829565b91505092959194509250565b6000602082840312156200099d57600080fd5b815180151581146200069957600080fd5b600060208284031215620009c157600080fd5b5051919050565b60008251620009dc81846020870162000a1b565b9190910192915050565b602081526000825180602084015262000a0781604085016020870162000a1b565b601f01601f19169190910160400192915050565b60005b8381101562000a3857818101518382015260200162000a1e565b8381111562000a48576000848401525b50505050565b600060001982141562000a7157634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c61163f62000aca600039600081816101930152611106015261163f6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a3f5c1d211610071578063a3f5c1d21461018e578063a4e28595146101b5578063a755349a146101c8578063c89fc72f146101d0578063dbe55e56146101e3578063edac985b146101f657600080fd5b80630ed57b3a146100b95780633edd1128146100ce5780635f515226146100f457806371c4658514610107578063934785b7146101485780639b19251a1461015b575b600080fd5b6100cc6100c736600461122e565b610209565b005b6100e16100dc36600461135a565b61021f565b6040519081526020015b60405180910390f35b6100e16101023660046111f4565b61042b565b6101306101153660046111f4565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100eb565b6100cc6101563660046112a8565b610454565b61017e6101693660046111f4565b60036020526000908152604090205460ff1681565b60405190151581526020016100eb565b6101307f000000000000000000000000000000000000000000000000000000000000000081565b6100cc6101c3366004611267565b610496565b6100cc61056d565b6100cc6101de3660046112fb565b6105d7565b600054610130906001600160a01b031681565b6100cc61020436600461139c565b61061a565b610211610838565b61021b82826108a2565b5050565b3360009081526003602052604081205460ff166102575760405162461bcd60e51b815260040161024e906114ed565b60405180910390fd5b600083116102a05760405162461bcd60e51b81526020600482015260166024820152754d757374206465706f73697420736f6d657468696e6760501b604482015260640161024e565b60006102ab85610a06565b905083915082156103645760006102c182610a6e565b90506102cb610ae8565b60405163e8eda9df60e01b81526001600160a01b03888116600483015260248281018990523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b50505050600061034683610a6e565b905061035b846103568484611543565b610bc2565b935050506103dd565b61036c610ae8565b60405163e8eda9df60e01b81526001600160a01b03878116600483015260248281018890523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b1580156103c457600080fd5b505af11580156103d8573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528716917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a2509392505050565b60008061043783610a06565b905061044281610a6e565b61044d906005611524565b9392505050565b3360009081526003602052604090205460ff166104835760405162461bcd60e51b815260040161024e906114ed565b6104908484848585610bd7565b50505050565b3360009081526003602052604090205460ff166104c55760405162461bcd60e51b815260040161024e906114ed565b6000811161050f5760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b604482015260640161024e565b6105236001600160a01b0383168483610de5565b6040805160008152602081018390526001600160a01b038416917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398910160405180910390a2505050565b610575610838565b6002546000610582610ae8565b905060005b828110156105d2576105c0600282815481106105a5576105a56115b7565b6000918252602090912001546001600160a01b0316836106a3565b806105ca81611586565b915050610587565b505050565b3360009081526003602052604090205460ff166106065760405162461bcd60e51b815260040161024e906114ed565b6106138585858585610bd7565b5050505050565b60008151116106635760405162461bcd60e51b8152602060048201526015602482015274456d7074792077686974656c69737420617272617960581b604482015260640161024e565b60005b815181101561021b57610691828281518110610684576106846115b7565b6020026020010151610e15565b8061069b81611586565b915050610666565b6106b86001600160a01b0383168260006106ca565b61021b6001600160a01b038316826000195b8015806107535750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561071957600080fd5b505afa15801561072d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107519190611485565b155b6107be5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161024e565b6040516001600160a01b0383166024820152604481018290526105d290849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f08565b60606108308484600085610fda565b949350505050565b610840611102565b6001600160a01b0316336001600160a01b0316146108a05760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640161024e565b565b6001600160a01b0382811660009081526001602052604090205416156108ff5760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b604482015260640161024e565b6001600160a01b0382161580159061091f57506001600160a01b03811615155b61095f5760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015260640161024e565b6001600160a01b03828116600081815260016020818152604080842080549688166001600160a01b031997881681179091556002805494850181559094527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909201805490951684179094555190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a261021b828261119a565b6001600160a01b0380821660009081526001602052604081205490911680610a685760405162461bcd60e51b815260206004820152601560248201527418551bdad95b88191bd95cc81b9bdd08195e1a5cdd605a1b604482015260640161024e565b92915050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610ab057600080fd5b505afa158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a689190611485565b6000805460408051630261bf8b60e01b8152905183926001600160a01b031691630261bf8b916004808301926020929190829003018186803b158015610b2d57600080fd5b505afa158015610b41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b659190611211565b90506001600160a01b038116610bbd5760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f742065786973740000000000604482015260640161024e565b919050565b6000818311610bd1578261044d565b50919050565b60008311610c215760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b604482015260640161024e565b6000610c2c85610a06565b90508115610d0757828414610c8e5760405162461bcd60e51b815260206004820152602260248201527f436163686520696e61637469766520666f722061737365747320776974682066604482015261656560f01b606482015260840161024e565b610c96610ae8565b604051631a4ca37b60e21b81526001600160a01b03878116600483015260248201879052888116604483015291909116906369328dec90606401600060405180830381600087803b158015610cea57600080fd5b505af1158015610cfe573d6000803e3d6000fd5b50505050610d8e565b610d0f610ae8565b604051631a4ca37b60e21b81526001600160a01b0387811660048301526024820186905230604483015291909116906369328dec90606401600060405180830381600087803b158015610d6157600080fd5b505af1158015610d75573d6000803e3d6000fd5b50610d8e925050506001600160a01b0386168786610de5565b604080516001600160a01b03838116825260208201869052918101869052908616907fb925ac01b9c34cc156a17a1e3da718f364df34eec9d0c9dc4e59c2bb1e7ba54b9060600160405180910390a2505050505050565b6040516001600160a01b0383166024820152604481018290526105d290849063a9059cbb60e01b906064016107ea565b6001600160a01b038116610e5d5760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640161024e565b6001600160a01b03811660009081526003602052604090205460ff1615610ebc5760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b604482015260640161024e565b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a549190a250565b6000610f5d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108219092919063ffffffff16565b8051909150156105d25780806020019051810190610f7b9190611468565b6105d25760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161024e565b60608247101561103b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161024e565b843b6110895760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161024e565b600080866001600160a01b031685876040516110a5919061149e565b60006040518083038185875af1925050503d80600081146110e2576040519150601f19603f3d011682016040523d82523d6000602084013e6110e7565b606091505b50915091506110f78282866111b0565b979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561115d57600080fd5b505afa158015611171573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111959190611211565b905090565b60006111a4610ae8565b90506105d283826106a3565b606083156111bf57508161044d565b8251156111cf5782518084602001fd5b8160405162461bcd60e51b815260040161024e91906114ba565b8035610bbd816115e3565b60006020828403121561120657600080fd5b813561044d816115e3565b60006020828403121561122357600080fd5b815161044d816115e3565b6000806040838503121561124157600080fd5b823561124c816115e3565b9150602083013561125c816115e3565b809150509250929050565b60008060006060848603121561127c57600080fd5b8335611287816115e3565b92506020840135611297816115e3565b929592945050506040919091013590565b600080600080608085870312156112be57600080fd5b84356112c9816115e3565b935060208501356112d9816115e3565b92506040850135915060608501356112f0816115fb565b939692955090935050565b600080600080600060a0868803121561131357600080fd5b853561131e816115e3565b9450602086013561132e816115e3565b93506040860135925060608601359150608086013561134c816115fb565b809150509295509295909350565b60008060006060848603121561136f57600080fd5b833561137a816115e3565b9250602084013591506040840135611391816115fb565b809150509250925092565b600060208083850312156113af57600080fd5b823567ffffffffffffffff808211156113c757600080fd5b818501915085601f8301126113db57600080fd5b8135818111156113ed576113ed6115cd565b8060051b604051601f19603f83011681018181108582111715611412576114126115cd565b604052828152858101935084860182860187018a101561143157600080fd5b600095505b8386101561145b57611447816111e9565b855260019590950194938601938601611436565b5098975050505050505050565b60006020828403121561147a57600080fd5b815161044d816115fb565b60006020828403121561149757600080fd5b5051919050565b600082516114b081846020870161155a565b9190910192915050565b60208152600082518060208401526114d981604085016020870161155a565b601f01601f19169190910160400192915050565b60208082526019908201527f4e6f7420612077686974656c6973746564206164647265737300000000000000604082015260600190565b600081600019048311821515161561153e5761153e6115a1565b500290565b600082821015611555576115556115a1565b500390565b60005b8381101561157557818101518382015260200161155d565b838111156104905750506000910152565b600060001982141561159a5761159a6115a1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146115f857600080fd5b50565b80151581146115f857600080fdfea26469706673582212202d918be54a6c136ed6f5eced1b9fc0b5854ba2b167ea96d0887fb7bf125cdfae64736f6c63430008060033";
class MaliciousAaveIntegration__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nexus, _platformAddress, _bAssets, _pTokens, overrides) {
        return super.deploy(_nexus, _platformAddress, _bAssets, _pTokens, overrides || {});
    }
    getDeployTransaction(_nexus, _platformAddress, _bAssets, _pTokens, overrides) {
        return super.getDeployTransaction(_nexus, _platformAddress, _bAssets, _pTokens, overrides || {});
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
exports.MaliciousAaveIntegration__factory = MaliciousAaveIntegration__factory;
MaliciousAaveIntegration__factory.bytecode = _bytecode;
MaliciousAaveIntegration__factory.abi = _abi;
//# sourceMappingURL=MaliciousAaveIntegration__factory.js.map