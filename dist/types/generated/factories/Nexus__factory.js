"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nexus__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_governorAddr",
                type: "address",
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
                name: "governor",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposed",
                type: "address",
            },
        ],
        name: "GovernorChangeCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "proposedGovernor",
                type: "address",
            },
        ],
        name: "GovernorChangeClaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "governor",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposed",
                type: "address",
            },
        ],
        name: "GovernorChangeRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousGovernor",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newGovernor",
                type: "address",
            },
        ],
        name: "GovernorChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isLocked",
                type: "bool",
            },
        ],
        name: "ModuleAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "ModuleCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "ModuleLockCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "ModuleLockEnabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "ModuleLockRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "ModuleProposed",
        type: "event",
    },
    {
        inputs: [],
        name: "UPGRADE_DELAY",
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
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "acceptProposedModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "_keys",
                type: "bytes32[]",
            },
        ],
        name: "acceptProposedModules",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cancelGovernorChange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "cancelLockModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "cancelProposedModule",
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
        name: "changeGovernor",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "claimGovernorChange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "delay",
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
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "getModule",
        outputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "governor",
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
                internalType: "bytes32[]",
                name: "_keys",
                type: "bytes32[]",
            },
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
            {
                internalType: "bool[]",
                name: "_isLocked",
                type: "bool[]",
            },
            {
                internalType: "address",
                name: "_governorAddr",
                type: "address",
            },
        ],
        name: "initialize",
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
        name: "initialized",
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
        inputs: [],
        name: "isGovernor",
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
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "lockModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "moduleExists",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "modules",
        outputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isLocked",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_addr",
                type: "address",
            },
        ],
        name: "proposeModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "proposedGovernor",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "proposedLockModules",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "proposedModules",
        outputs: [
            {
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "timestamp",
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
                name: "_proposedGovernor",
                type: "address",
            },
        ],
        name: "requestGovernorChange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_key",
                type: "bytes32",
            },
        ],
        name: "requestLockModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "requestTime",
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
const _bytecode = "0x6080604052600180546001600160a01b0319169055600060028190556003556008805460ff191690553480156200003557600080fd5b50604051620019453803806200194583398101604081905262000058916200019f565b600080546001600160a01b031916339081178255604051839262093a8092849290919060008051602062001925833981519152908290a36200009a81620000fd565b5060008111620000f15760405162461bcd60e51b815260206004820152601f60248201527f44656c6179206d7573742062652067726561746572207468616e207a65726f0060448201526064015b60405180910390fd5b60025550620001d19050565b6001600160a01b038116620001555760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f722069732061646472657373283029006044820152606401620000e8565b600080546040516001600160a01b03808516939216916000805160206200192583398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215620001b257600080fd5b81516001600160a01b0381168114620001ca57600080fd5b9392505050565b61174480620001e16000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806385acd641116100c3578063b0b6cc1a1161007c578063b0b6cc1a1461031d578063c7af335214610371578063d7e0842a14610384578063d7fd0e7714610397578063e4c0aaf4146103a0578063efa2f3a2146103b357600080fd5b806385acd641146102ab5780638a11a370146102d45780638c33c19c146102e757806394ccb137146102ef57806397f5fea614610302578063ad339d7a1461031557600080fd5b8063381042c811610115578063381042c81461020d57806347fe8b1d146102205780636921ea411461022a5780636a42b8f81461023d5780636a89934b146102465780636d4e19911461029857600080fd5b8063099c47bc1461015d57806309ea14aa146101725780630c340a2414610185578063158ef93e146101af578063165ed306146101cc57806328066b86146101fa575b600080fd5b61017061016b3660046114cb565b6103c6565b005b610170610180366004611615565b610409565b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6008546101bc9060ff1681565b60405190151581526020016101a6565b6101ec6101da3660046115fc565b60076020526000908152604090205481565b6040519081526020016101a6565b6101706102083660046115fc565b610631565b6101bc61021b36600461152f565b610664565b6101ec62093a8081565b6101706102383660046114ed565b610889565b6101ec60025481565b6102796102543660046115fc565b600660205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101a6565b6101706102a63660046115fc565b610938565b6101926102b93660046115fc565b6000908152600460205260409020546001600160a01b031690565b600154610192906001600160a01b031681565b610170610a0d565b6101bc6102fd3660046115fc565b610a46565b6101706103103660046115fc565b610a82565b610170610bd1565b61035261032b3660046115fc565b6004602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b0390931683529015156020830152016101a6565b6000546001600160a01b031633146101bc565b6101706103923660046115fc565b610c8a565b6101ec60035481565b6101706103ae3660046114cb565b610d60565b6101706103c13660046115fc565b610dd2565b6000546001600160a01b031633146103f95760405162461bcd60e51b81526004016103f090611678565b60405180910390fd5b4260035561040681610e92565b50565b6000546001600160a01b031633146104335760405162461bcd60e51b81526004016103f090611678565b816104775760405162461bcd60e51b81526020600482015260146024820152734b6579206d757374206e6f74206265207a65726f60601b60448201526064016103f0565b6001600160a01b0381166104cd5760405162461bcd60e51b815260206004820152601c60248201527f4d6f64756c652061646472657373206d757374206e6f7420626520300000000060448201526064016103f0565b600082815260046020526040902054600160a01b900460ff16156105035760405162461bcd60e51b81526004016103f090611641565b6000828152600460205260409020546001600160a01b038281169116141561056d5760405162461bcd60e51b815260206004820152601f60248201527f4d6f64756c6520616c7265616479206861732073616d6520616464726573730060448201526064016103f0565b60008281526006602052604090206001810154156105cd5760405162461bcd60e51b815260206004820152601760248201527f4d6f64756c6520616c72656164792070726f706f73656400000000000000000060448201526064016103f0565b80546001600160a01b0319166001600160a01b0383169081178255426001830181905560408051928352602083019190915284917fa5917e6bf5563219e2772cffe6989d6f2ef8235ab280ab88f8c37479562e58a3910160405180910390a2505050565b6000546001600160a01b0316331461065b5760405162461bcd60e51b81526004016103f090611678565b61040681610fd3565b600080546001600160a01b0316331461068f5760405162461bcd60e51b81526004016103f090611678565b60085460ff16156106e25760405162461bcd60e51b815260206004820152601c60248201527f4e6578757320697320616c726561647920696e697469616c697a65640000000060448201526064016103f0565b86806107235760405162461bcd60e51b815260206004820152601060248201526f139bc81ad95e5cc81c1c9bdd9a59195960821b60448201526064016103f0565b8086146107725760405162461bcd60e51b815260206004820152601960248201527f496e73756666696369656e74206164647265737320646174610000000000000060448201526064016103f0565b8084146107c15760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e74206c6f636b65642073746174757365730000000060448201526064016103f0565b60005b8181101561084d5761083b8a8a838181106107e1576107e16116f8565b905060200201358989848181106107fa576107fa6116f8565b905060200201602081019061080f91906114cb565b888885818110610821576108216116f8565b905060200201602081019061083691906115da565b61108d565b80610845816116c7565b9150506107c4565b506000546001600160a01b0384811691161461086c5761086c836111eb565b50506008805460ff19166001908117909155979650505050505050565b6000546001600160a01b031633146108b35760405162461bcd60e51b81526004016103f090611678565b80806108f45760405162461bcd60e51b815260206004820152601060248201526f4b65797320617272617920656d70747960801b60448201526064016103f0565b60005b8181101561093257610920848483818110610914576109146116f8565b90506020020135610fd3565b8061092a816116c7565b9150506108f7565b50505050565b6000546001600160a01b031633146109625760405162461bcd60e51b81526004016103f090611678565b60008181526007602052604090205461097a9061129c565b6109b75760405162461bcd60e51b815260206004820152600e60248201526d2232b630bc903737ba1037bb32b960911b60448201526064016103f0565b6000818152600460209081526040808320805460ff60a01b1916600160a01b17905560079091528082208290555182917f097d0a4360ac95150faf267a7b4a999756a69238c2c7023cac729d81f0b733a391a250565b6000546001600160a01b03163314610a375760405162461bcd60e51b81526004016103f090611678565b6000600355610a446112c3565b565b60008115801590610a6d57506000828152600460205260409020546001600160a01b031615155b15610a7a57506001919050565b506000919050565b6000546001600160a01b03163314610aac5760405162461bcd60e51b81526004016103f090611678565b610ab581610a46565b610af55760405162461bcd60e51b8152602060048201526011602482015270135bd91d5b19481b5d5cdd08195e1a5cdd607a1b60448201526064016103f0565b600081815260046020526040902054600160a01b900460ff1615610b2b5760405162461bcd60e51b81526004016103f090611641565b60008181526007602052604090205415610b7f5760405162461bcd60e51b8152602060048201526015602482015274131bd8dac8185b1c9958591e481c1c9bdc1bdcd959605a1b60448201526064016103f0565b600081815260076020526040908190204290819055905182917f57456e8dc47899fbd8a75be3129514a3e4cca602e26b766d4bbb821975c4375891610bc691815260200190565b60405180910390a250565b6001546001600160a01b03163314610c2b5760405162461bcd60e51b815260206004820152601f60248201527f53656e646572206973206e6f742070726f706f73656420676f7665726e6f720060448201526064016103f0565b600254600354610c3b91906116af565b421015610c7b5760405162461bcd60e51b815260206004820152600e60248201526d2232b630bc903737ba1037bb32b960911b60448201526064016103f0565b610c836113aa565b6000600355565b6000546001600160a01b03163314610cb45760405162461bcd60e51b81526004016103f090611678565b60008181526006602052604090206001015480610d135760405162461bcd60e51b815260206004820152601960248201527f50726f706f736564206d6f64756c65206e6f7420666f756e640000000000000060448201526064016103f0565b60008281526006602052604080822080546001600160a01b03191681556001018290555183917f4dd889c845f5a942b8304764283938168000b8f4903940690beb685ca2fc16cc91a25050565b6000546001600160a01b03163314610d8a5760405162461bcd60e51b81526004016103f090611678565b60405162461bcd60e51b815260206004820152601960248201527f446972656374206368616e6765206e6f7420616c6c6f7765640000000000000060448201526064016103f0565b6000546001600160a01b03163314610dfc5760405162461bcd60e51b81526004016103f090611678565b600081815260076020526040902054610e575760405162461bcd60e51b815260206004820152601d60248201527f4d6f64756c65206c6f636b2072657175657374206e6f7420666f756e6400000060448201526064016103f0565b6000818152600760205260408082208290555182917f3d670309414f84151711e0ac2795a2b1686580ad9faca995492166a486255db391a250565b6000546001600160a01b03163314610ebc5760405162461bcd60e51b81526004016103f090611678565b6001600160a01b038116610f125760405162461bcd60e51b815260206004820152601f60248201527f50726f706f73656420676f7665726e6f7220697320616464726573732830290060448201526064016103f0565b6001546001600160a01b031615610f6b5760405162461bcd60e51b815260206004820152601d60248201527f50726f706f73656420676f7665726e6f7220616c72656164792073657400000060448201526064016103f0565b600180546001600160a01b0319166001600160a01b038316908117909155610f9b6000546001600160a01b031690565b6001600160a01b03167fa48c163cc46eb28aba8bdb525da18f15a83020cc18f439c933d79ea3ad9b50bb60405160405180910390a350565b600081815260066020908152604091829020825180840190935280546001600160a01b031683526001015490820181905261100d9061129c565b6110595760405162461bcd60e51b815260206004820152601d60248201527f4d6f64756c6520757067726164652064656c6179206e6f74206f76657200000060448201526064016103f0565b600082815260066020526040812080546001600160a01b031916815560010181905581516110899184919061108d565b5050565b6001600160a01b038216600090815260056020526040902054156110f35760405162461bcd60e51b815260206004820152601d60248201527f4d6f64756c6573206d757374206861766520756e69717565206164647200000060448201526064016103f0565b600083815260046020526040902054600160a01b900460ff16156111295760405162461bcd60e51b81526004016103f090611641565b6000838152600460205260409020546001600160a01b03168015611161576001600160a01b0381166000908152600560205260408120555b600084815260046020908152604080832080546001600160a01b0388166001600160a81b03199091168117600160a01b88151590810291909117909255808552600584529382902088905581519384529183019190915285917f7bf901a62d0edd068a4e74518eb8241133713d384171c7d0a3b7f6eb5c04095d910160405180910390a250505050565b6001600160a01b0381166112415760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f7220697320616464726573732830290060448201526064016103f0565b600080546040516001600160a01b03808516939216917fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c8491a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008082118015610a6d57506112b562093a80836116af565b4210610a7a57506001919050565b6000546001600160a01b031633146112ed5760405162461bcd60e51b81526004016103f090611678565b6001546001600160a01b03166113455760405162461bcd60e51b815260206004820152601960248201527f50726f706f73656420476f7665726e6f72206e6f74207365740000000000000060448201526064016103f0565b6001546001600160a01b03166113636000546001600160a01b031690565b6001600160a01b03167f2f7bb10f75b8694ea78291d7ca4c9f2a75bc45f0f97046164ad3ee984bdf4bba60405160405180910390a3600180546001600160a01b0319169055565b6001546001600160a01b031633146114045760405162461bcd60e51b815260206004820152601f60248201527f53656e646572206973206e6f742070726f706f73656420676f7665726e6f720060448201526064016103f0565b600154611419906001600160a01b03166111eb565b6001546040516001600160a01b03909116907f0ad714cb5607f3b529b5d3292190925ae992a77b291e39ec09c390d4787896ba90600090a2600180546001600160a01b0319169055565b80356001600160a01b038116811461147a57600080fd5b919050565b60008083601f84011261149157600080fd5b50813567ffffffffffffffff8111156114a957600080fd5b6020830191508360208260051b85010111156114c457600080fd5b9250929050565b6000602082840312156114dd57600080fd5b6114e682611463565b9392505050565b6000806020838503121561150057600080fd5b823567ffffffffffffffff81111561151757600080fd5b6115238582860161147f565b90969095509350505050565b60008060008060008060006080888a03121561154a57600080fd5b873567ffffffffffffffff8082111561156257600080fd5b61156e8b838c0161147f565b909950975060208a013591508082111561158757600080fd5b6115938b838c0161147f565b909750955060408a01359150808211156115ac57600080fd5b506115b98a828b0161147f565b90945092506115cc905060608901611463565b905092959891949750929550565b6000602082840312156115ec57600080fd5b813580151581146114e657600080fd5b60006020828403121561160e57600080fd5b5035919050565b6000806040838503121561162857600080fd5b8235915061163860208401611463565b90509250929050565b60208082526017908201527f4d6f64756c65206d75737420626520756e6c6f636b6564000000000000000000604082015260600190565b6020808252601f908201527f474f563a2063616c6c6572206973206e6f742074686520476f7665726e6f7200604082015260600190565b600082198211156116c2576116c26116e2565b500190565b60006000198214156116db576116db6116e2565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea2646970667358221220241fd11c3a88c89edaf2f2c83f91e3942380b2647da12eb11b8cc60ec7f8740164736f6c63430008060033de4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c84";
class Nexus__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_governorAddr, overrides) {
        return super.deploy(_governorAddr, overrides || {});
    }
    getDeployTransaction(_governorAddr, overrides) {
        return super.getDeployTransaction(_governorAddr, overrides || {});
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
exports.Nexus__factory = Nexus__factory;
Nexus__factory.bytecode = _bytecode;
Nexus__factory.abi = _abi;
//# sourceMappingURL=Nexus__factory.js.map