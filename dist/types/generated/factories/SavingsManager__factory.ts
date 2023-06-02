/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SavingsManager,
  SavingsManagerInterface,
} from "../SavingsManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_mAssets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_savingsContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_revenueRecipients",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_savingsRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
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
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "apy",
        type: "uint256",
      },
    ],
    name: "InterestCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSent",
        type: "uint256",
      },
    ],
    name: "InterestDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LiquidatorDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "RevenueRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RevenueRedistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "savingsContract",
        type: "address",
      },
    ],
    name: "SavingsContractAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "savingsContract",
        type: "address",
      },
    ],
    name: "SavingsContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSavingsRate",
        type: "uint256",
      },
    ],
    name: "SavingsRateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "StreamsFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_savingsContract",
        type: "address",
      },
    ],
    name: "addSavingsContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
    ],
    name: "collectAndDistributeInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
    ],
    name: "collectAndStreamInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidated",
        type: "uint256",
      },
    ],
    name: "depositLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
    ],
    name: "distributeUnallocatedInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeStreams",
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
    name: "lastBatchCollected",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastCollection",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastPeriodStart",
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
        name: "",
        type: "address",
      },
    ],
    name: "liqStream",
    outputs: [
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "",
        type: "address",
      },
    ],
    name: "periodYield",
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
        name: "",
        type: "address",
      },
    ],
    name: "revenueRecipients",
    outputs: [
      {
        internalType: "contract IRevenueRecipient",
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
        name: "",
        type: "address",
      },
    ],
    name: "savingsContracts",
    outputs: [
      {
        internalType: "contract ISavingsContractV2",
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
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRevenueRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_savingsRate",
        type: "uint256",
      },
    ],
    name: "setSavingsRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_savingsContract",
        type: "address",
      },
    ],
    name: "updateSavingsContract",
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
    name: "yieldStream",
    outputs: [
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526000805460ff199081169091556007805490911690553480156200002757600080fd5b50604051620029f6380380620029f68339810160408190526200004a91620008a5565b85806001600160a01b038116620000a85760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052506000805460ff191690558451845181148015620000d65750808451145b620001155760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420696e7075747360901b60448201526064016200009f565b60005b8181101562000314576200016b8782815181106200013a576200013a62000a4a565b602002602001015187838151811062000157576200015762000a4a565b60200260200101516200032a60201b60201c565b86818151811062000180576200018062000a4a565b60200260200101516001600160a01b03167f508defc317fd15db2b6ef034d39cf1d5db588a037dbd3515824e4baec4228b6c878381518110620001c757620001c762000a4a565b6020026020010151604051620001ec91906001600160a01b0391909116815260200190565b60405180910390a284818151811062000209576200020962000a4a565b6020026020010151600260008984815181106200022a576200022a62000a4a565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508681815181106200028b576200028b62000a4a565b60200260200101516001600160a01b03167f8fca8811c9f2b99f3c43f36b80aedd3efebd97855e8fbb620f427806b0d257b1868381518110620002d257620002d262000a4a565b6020026020010151604051620002f791906001600160a01b0391909116815260200190565b60405180910390a2806200030b8162000a20565b91505062000118565b505060069190915560a0525062000a7692505050565b6001600160a01b038216158015906200034b57506001600160a01b03811615155b620003995760405162461bcd60e51b815260206004820152601560248201527f4d7573742062652076616c69642061646472657373000000000000000000000060448201526064016200009f565b6001600160a01b038281166000818152600160209081526040822080546001600160a01b03191694861694909417909355620003e1928491906200040c811b62000d6917901c565b6200040881600019846001600160a01b03166200040c60201b62000d69179092919060201c565b5050565b8015806200049a5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200045d57600080fd5b505afa15801562000472573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000498919062000980565b155b6200050e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016200009f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620005669185916200056b16565b505050565b6000620005c7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200064960201b62000ec5179092919060201c565b805190915015620005665780806020019051810190620005e891906200095c565b620005665760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016200009f565b60606200065a848460008562000664565b90505b9392505050565b606082471015620006c75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016200009f565b843b620007175760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200009f565b600080866001600160a01b031685876040516200073591906200099a565b60006040518083038185875af1925050503d806000811462000774576040519150601f19603f3d011682016040523d82523d6000602084013e62000779565b606091505b5090925090506200078c82828662000797565b979650505050505050565b60608315620007a85750816200065d565b825115620007b95782518084602001fd5b8160405162461bcd60e51b81526004016200009f9190620009b8565b80516001600160a01b0381168114620007ed57600080fd5b919050565b600082601f8301126200080457600080fd5b815160206001600160401b038083111562000823576200082362000a60565b8260051b604051601f19603f830116810181811084821117156200084b576200084b62000a60565b604052848152838101925086840182880185018910156200086b57600080fd5b600092505b8583101562000899576200088481620007d5565b84529284019260019290920191840162000870565b50979650505050505050565b60008060008060008060c08789031215620008bf57600080fd5b620008ca87620007d5565b60208801519096506001600160401b0380821115620008e857600080fd5b620008f68a838b01620007f2565b965060408901519150808211156200090d57600080fd5b6200091b8a838b01620007f2565b955060608901519150808211156200093257600080fd5b506200094189828a01620007f2565b9350506080870151915060a087015190509295509295509295565b6000602082840312156200096f57600080fd5b815180151581146200065d57600080fd5b6000602082840312156200099357600080fd5b5051919050565b60008251620009ae818460208701620009ed565b9190910192915050565b6020815260008251806020840152620009d9816040850160208701620009ed565b601f01601f19169190910160400192915050565b60005b8381101562000a0a578181015183820152602001620009f0565b8381111562000a1a576000848401525b50505050565b600060001982141562000a4357634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c60a051611f4962000aad60003960006108ce01526000818161027c015281816110ef01526119100152611f496000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638456cb59116100b8578063c02d7b171161007c578063c02d7b17146102da578063ca2bdfe614610316578063cf299ea914610329578063d176d5f714610350578063d536818814610370578063e81441921461038357600080fd5b80638456cb591461024f578063882111fc14610257578063a3f5c1d214610277578063ac431d7a1461029e578063b75d7607146102b157600080fd5b806340ed7333116100ff57806340ed7333146101b25780634fa369c4146101f35780635c975abb14610206578063691ef6631461021c578063717f2bc11461023c57600080fd5b806321aec84a1461013c5780633022dfeb1461015157806333bda1f7146101645780633be22149146101975780633f4ba83a146101aa575b600080fd5b61014f61014a366004611c4f565b61038b565b005b61014f61015f366004611c89565b6105e3565b610184610172366004611c4f565b600a6020526000908152604090205481565b6040519081526020015b60405180910390f35b61014f6101a5366004611d10565b6106a2565b61014f610748565b6101db6101c0366004611c4f565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200161018e565b61014f610201366004611cc2565b6107d9565b60005460ff16604051901515815260200161018e565b61018461022a366004611c4f565b60036020526000908152604090205481565b61014f61024a366004611c89565b61093a565b61014f6109f0565b610184610265366004611c4f565b60056020526000908152604090205481565b6101db7f000000000000000000000000000000000000000000000000000000000000000081565b61014f6102ac366004611c4f565b610a58565b6101db6102bf366004611c4f565b6001602052600090815260409020546001600160a01b031681565b6103016102e8366004611c4f565b6009602052600090815260409020805460019091015482565b6040805192835260208301919091520161018e565b61014f610324366004611c4f565b610c6f565b610301610337366004611c4f565b6008602052600090815260409020805460019091015482565b61018461035e366004611c4f565b60046020526000908152604090205481565b61014f61037e366004611c89565b610c9e565b61014f610d06565b6001600160a01b0380821660009081526002602052604090205416806103f85760405162461bcd60e51b815260206004820152601960248201527f4d75737420686176652076616c696420726563697069656e740000000000000060448201526064015b60405180910390fd5b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561043c57600080fd5b505afa158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104749190611d29565b90506000610483856000610ede565b90506000610492866001610ede565b90506000816104a18486611e6f565b6104ab9190611e6f565b60405163095ea7b360e01b81526001600160a01b038881166004830152602482018390529192509086169063095ea7b390604401602060405180830381600087803b1580156104f957600080fd5b505af115801561050d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105319190611cee565b5060405163383680c360e11b81526001600160a01b0388811660048301526024820183905287169063706d018690604401600060405180830381600087803b15801561057c57600080fd5b505af1158015610590573d6000803e3d6000fd5b5050604080516001600160a01b038a81168252602082018690528b1693507f25f038afe3b508b51eefbd7cb74df863b1f311ff2e404467a4223bdb353dcce492500160405180910390a250505050505050565b6105eb610f95565b6001600160a01b0382811660009081526001602052604090205416156106535760405162461bcd60e51b815260206004820152601f60248201527f536176696e677320636f6e747261637420616c7265616479206578697374730060448201526064016103ef565b61065d8282610fff565b6040516001600160a01b0382811682528316907f508defc317fd15db2b6ef034d39cf1d5db588a037dbd3515824e4baec4228b6c906020015b60405180910390a25050565b6106aa610f95565b6703782dace9d9000081101580156106ca5750670de0b6b3a76400008111155b61070d5760405162461bcd60e51b81526020600482015260146024820152734d75737420626520612076616c6964207261746560601b60448201526064016103ef565b60068190556040518181527faedfe3437b11d6c786a86e8c27ef98816e4fd031ee0613a4e5132ae857065e479060200160405180910390a150565b610750610f95565b60005460ff166107995760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103ef565b6000805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b60005460ff16156107fc5760405162461bcd60e51b81526004016103ef90611dec565b6108046110b7565b6001600160a01b0316336001600160a01b0316146108645760405162461bcd60e51b815260206004820152601b60248201527f4f6e6c79206c697175696461746f722063616e2065786563757465000000000060448201526064016103ef565b60075460ff16156108875760405162461bcd60e51b81526004016103ef90611db5565b61089082611176565b6108ad61089b6110b7565b6001600160a01b03841690308461159b565b60006108ba836000610ede565b90506108f28360006108cc8486611e16565b7f00000000000000000000000000000000000000000000000000000000000000006115d9565b826001600160a01b03167f2031d123851984662d738ba6c766d26c120f8030f44ee35ab4ba0a784f7c71a78360405161092d91815260200190565b60405180910390a2505050565b610942610f95565b6001600160a01b03828116600090815260016020526040902054166109a95760405162461bcd60e51b815260206004820152601f60248201527f536176696e677320636f6e747261637420646f6573206e6f742065786973740060448201526064016103ef565b6109b38282610fff565b6040516001600160a01b0382811682528316907fa1f7f49e41e6da12e99cafaf80f4fd0a1a5dbd92eca85369d5597a1c140b5eab90602001610696565b6109f8610f95565b60005460ff1615610a1b5760405162461bcd60e51b81526004016103ef90611dec565b6000805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258906020016107cf565b60005460ff1615610a7b5760405162461bcd60e51b81526004016103ef90611dec565b60075460ff1615610a9e5760405162461bcd60e51b81526004016103ef90611db5565b610aa781611176565b6001600160a01b0381166000908152600a60205260408120544291610acc8284611e6f565b90506154608111610b1f5760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74206465706f73697420747769636520696e203620686f7572730060448201526064016103ef565b6001600160a01b0384166000818152600a60205260408082208690558051633f4480f560e11b81528151929384939092637e8901ea926004808201939182900301818787803b158015610b7157600080fd5b505af1158015610b85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba99190611d42565b90925090508115610c2c576000610bc18284866116f4565b90506000610bd0886001610ede565b9050610beb886001610be28488611e16565b620151806115d9565b60408051858152602081018590529081018390526001600160a01b03891690600080516020611ef48339815191529060600160405180910390a25050610c67565b604080518381526020810183905260008183015290516001600160a01b03881691600080516020611ef4833981519152919081900360600190a25b505050505050565b60005460ff1615610c925760405162461bcd60e51b81526004016103ef90611dec565b610c9b81611176565b50565b610ca6610f95565b6001600160a01b0382811660008181526002602090815260409182902080546001600160a01b0319169486169485179055905192835290917f8fca8811c9f2b99f3c43f36b80aedd3efebd97855e8fbb620f427806b0d257b19101610696565b610d0e610f95565b60075460ff1615610d315760405162461bcd60e51b81526004016103ef90611db5565b6007805460ff191660011790556040517fd91af312a230e76188294986220b0a066629d876bbbbc3b060d59499e6f750bf90600090a1565b801580610df25750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610db857600080fd5b505afa158015610dcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df09190611d29565b155b610e5d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016103ef565b6040516001600160a01b038316602482015260448101829052610ec090849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611712565b505050565b6060610ed484846000856117e4565b90505b9392505050565b6001600160a01b0382166000908152600460205260408120548180846001811115610f0b57610f0b611ec8565b14610f2d576001600160a01b0385166000908152600960205260409020610f46565b6001600160a01b03851660009081526008602052604090205b60408051808201909152815480825260019092015460208201529150600090831015610f7c578151610f79908490611e6f565b90505b6020820151610f8b9082611e50565b9695505050505050565b610f9d61190c565b6001600160a01b0316336001600160a01b031614610ffd5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e20657865637574650000000000000060448201526064016103ef565b565b6001600160a01b0382161580159061101f57506001600160a01b03811615155b6110635760405162461bcd60e51b81526020600482015260156024820152744d7573742062652076616c6964206164647265737360581b60448201526064016103ef565b6001600160a01b03828116600081815260016020526040812080546001600160a01b0319169385169390931790925561109d918390610d69565b6110b36001600160a01b03831682600019610d69565b5050565b6040516385acd64160e01b81527f1e9cb14d7560734a61fa5ff9273953e971ff3cd9283c03d8346e3264617933d460048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b15801561113957600080fd5b505afa15801561114d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111719190611c6c565b905090565b6001600160a01b0380821660009081526001602052604090205416806111e95760405162461bcd60e51b815260206004820152602260248201527f4d757374206861766520612076616c696420736176696e677320636f6e74726160448201526118dd60f21b60648201526084016103ef565b6001600160a01b0382166000818152600360209081526040808320546004928390528184208054429091558251631517d59160e11b8152835192969195899590948594632a2fab2293808401939082900301818787803b15801561124c57600080fd5b505af1158015611260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112849190611d42565b9092509050600061129f600161129a8842611e6f565b611967565b905060006112b2600161129a8842611e6f565b9050836107088211156112ea576001600160a01b038a1660009081526003602090815260408083204290556005909152812055611363565b610708831115611321576001600160a01b038a1660009081526003602090815260408083208a905560059091529020859055611363565b6001600160a01b038a16600090815260056020526040902054611345908690611e16565b6001600160a01b038b16600090815260056020526040902081905590505b600061136f8b8961197d565b905060008611806113805750600081115b156115535761138f8187611e16565b6040516370a0823160e01b81523060048201526001600160a01b038d16906370a082319060240160206040518083038186803b1580156113ce57600080fd5b505afa1580156113e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114069190611d29565b10156114485760405162461bcd60e51b8152602060048201526011602482015270135d5cdd081c9958d95a5d99481b5554d1607a1b60448201526064016103ef565b60006114558684866116f4565b60408051898152602081018990529081018290529091506001600160a01b038d1690600080516020611ef48339815191529060600160405180910390a260006114ac600654848a6114a69190611e16565b90611a44565b60405163220c5bbb60e01b8152600481018290529091506001600160a01b038d169063220c5bbb90602401600060405180830381600087803b1580156114f157600080fd5b505af1158015611505573d6000803e3d6000fd5b505050508c6001600160a01b03167fffbd5470d1efa00ab4b8be8ae04ba319ee7926ffe943a91b8af15bea044ceaf38260405161154491815260200190565b60405180910390a2505061158e565b604080516000808252602082018890528183015290516001600160a01b038d1691600080516020611ef4833981519152919081900360600190a25b5050505050505050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526115d39085906323b872dd60e01b90608401610e89565b50505050565b4260006115e68385611e2e565b905060006115f48484611e16565b9050600086600181111561160a5761160a611ec8565b141561164c5760408051808201825282815260208082018581526001600160a01b038b1660009081526008909252929020905181559051600190910155611684565b60408051808201825282815260208082018581526001600160a01b038b16600090815260099092529290209051815590516001909101555b6001600160a01b03871660009081526004602052604090205483146116eb5760405162461bcd60e51b815260206004820152601e60248201527f53747265616d2064617461206d75737420626520757020746f2064617465000060448201526064016103ef565b50505050505050565b6000610ed484848467d02ab486cedc000066038d7ea4c68000611a59565b6000611767826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ec59092919063ffffffff16565b805190915015610ec057808060200190518101906117859190611cee565b610ec05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103ef565b6060824710156118455760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103ef565b843b6118935760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103ef565b600080866001600160a01b031685876040516118af9190611d66565b60006040518083038185875af1925050503d80600081146118ec576040519150601f19603f3d011682016040523d82523d6000602084013e6118f1565b606091505b5091509150611901828286611bc6565b979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561113957600080fd5b60008183116119765781610ed7565b5090919050565b6001600160a01b038216600090815260086020908152604080832081518083019092528054808352600190910154928201929092529082906119c0908590611bff565b905060008260200151826119d49190611e50565b6001600160a01b03871660009081526009602090815260408083208151808301909252805480835260019091015492820192909252929350611a17908890611bff565b90506000826020015182611a2b9190611e50565b9050611a378185611e16565b9998505050505050505050565b6000610ed78383670de0b6b3a7640000611c38565b6000808415611a685784611a6b565b60015b90506000611a798789611e6f565b9050600081611a9089670de0b6b3a7640000611e50565b611a9a9190611e2e565b905060006301e13380611ab585670de0b6b3a7640000611e50565b611abf9190611e2e565b905080611ad483670de0b6b3a7640000611e50565b611ade9190611e2e565b9450610708841115611b5457868510611b4f5760405162461bcd60e51b815260206004820152602d60248201527f496e7465726573742070726f7465637465642066726f6d20696e666c6174696e60448201526c672070617374206d617841505960981b60648201526084016103ef565b611bb9565b858210611bb95760405162461bcd60e51b815260206004820152602d60248201527f496e7465726573742070726f7465637465642066726f6d20696e666c6174696e60448201526c6720706173742031302042707360981b60648201526084016103ef565b5050505095945050505050565b60608315611bd5575081610ed7565b825115611be55782518084602001fd5b8160405162461bcd60e51b81526004016103ef9190611d82565b60004281838211611c1b57611c148583611e6f565b9050611c30565b83851015611c3057611c2d8585611e6f565b90505b949350505050565b600081611c458486611e50565b610ed49190611e2e565b600060208284031215611c6157600080fd5b8135610ed781611ede565b600060208284031215611c7e57600080fd5b8151610ed781611ede565b60008060408385031215611c9c57600080fd5b8235611ca781611ede565b91506020830135611cb781611ede565b809150509250929050565b60008060408385031215611cd557600080fd5b8235611ce081611ede565b946020939093013593505050565b600060208284031215611d0057600080fd5b81518015158114610ed757600080fd5b600060208284031215611d2257600080fd5b5035919050565b600060208284031215611d3b57600080fd5b5051919050565b60008060408385031215611d5557600080fd5b505080516020909101519092909150565b60008251611d78818460208701611e86565b9190910192915050565b6020815260008251806020840152611da1816040850160208701611e86565b601f01601f19169190910160400192915050565b6020808252601d908201527f53747265616d696e672069732063757272656e746c792066726f7a656e000000604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60008219821115611e2957611e29611eb2565b500190565b600082611e4b57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611e6a57611e6a611eb2565b500290565b600082821015611e8157611e81611eb2565b500390565b60005b83811015611ea1578181015183820152602001611e89565b838111156115d35750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0381168114610c9b57600080fdfe0abcfa9ece819bcdcfa052a818ce11f0b9fad8b3e3ccd98f120c40be689b690fa26469706673582212208c5c59f64ea9adea8985ec5d9cea0761db9bad2a12270a104df06e82a128c6a164736f6c63430008060033";

export class SavingsManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _mAssets: string[],
    _savingsContracts: string[],
    _revenueRecipients: string[],
    _savingsRate: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SavingsManager> {
    return super.deploy(
      _nexus,
      _mAssets,
      _savingsContracts,
      _revenueRecipients,
      _savingsRate,
      _duration,
      overrides || {}
    ) as Promise<SavingsManager>;
  }
  getDeployTransaction(
    _nexus: string,
    _mAssets: string[],
    _savingsContracts: string[],
    _revenueRecipients: string[],
    _savingsRate: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _mAssets,
      _savingsContracts,
      _revenueRecipients,
      _savingsRate,
      _duration,
      overrides || {}
    );
  }
  attach(address: string): SavingsManager {
    return super.attach(address) as SavingsManager;
  }
  connect(signer: Signer): SavingsManager__factory {
    return super.connect(signer) as SavingsManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SavingsManagerInterface {
    return new utils.Interface(_abi) as SavingsManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SavingsManager {
    return new Contract(address, _abi, signerOrProvider) as SavingsManager;
  }
}
