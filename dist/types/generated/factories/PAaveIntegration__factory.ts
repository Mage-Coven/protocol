/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PAaveIntegration,
  PAaveIntegrationInterface,
} from "../PAaveIntegration";

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
        name: "_lp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platformAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardController",
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
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RewardTokenApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
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
    inputs: [],
    name: "approveRewardToken",
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
    inputs: [],
    name: "claimRewards",
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
    inputs: [
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpAddress",
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
    name: "rewardController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
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
        name: "_hasTxFee",
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
        name: "_hasTxFee",
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

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001efb38038062001efb83398101604081905262000035916200020e565b848484848383816001600160a01b038116620000985760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052600180556001600160a01b038116620000f95760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964204c50206164647265737360701b60448201526064016200008f565b60601b6001600160601b03191660a052506001600160a01b038216620001625760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420706c6174666f726d2061646472657373000000000000000060448201526064016200008f565b6001600160601b0319606092831b811660c052911b1660e05250506001600160a01b038116620001d55760405162461bcd60e51b815260206004820152601a60248201527f496e76616c696420636f6e74726f6c6c6572206164647265737300000000000060448201526064016200008f565b60601b6001600160601b03191661010052506200027e92505050565b80516001600160a01b03811681146200020957600080fd5b919050565b600080600080600060a086880312156200022757600080fd5b6200023286620001f1565b94506200024260208701620001f1565b93506200025260408701620001f1565b92506200026260608701620001f1565b91506200027260808701620001f1565b90509295509295909350565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c611be362000318600039600081816101a901526103b001526000818161028601528181610bf80152610c2b0152600081816102570152610f390152600081816101e30152818161048a01528181610863015281816108ea0152610a5201526000818161020a01528181610b0f01526112df0152611be36000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063934785b711610097578063c89fc72f11610066578063c89fc72f1461023f578063dbe55e5614610252578063e729645414610279578063f7c618c11461028157600080fd5b8063934785b7146101cb5780639b4dc8cc146101de578063a3f5c1d214610205578063a4e285951461022c57600080fd5b80635f515226116100d35780635f5152261461013d57806371c465851461015057806373cf25f8146101915780638cc5ce99146101a457600080fd5b80630ed57b3a146100fa578063372500ab1461010f5780633edd112814610117575b600080fd5b61010d61010836600461177d565b6102a8565b005b61010d6102be565b61012a6101253660046118a9565b61047d565b6040519081526020015b60405180910390f35b61012a61014b366004611743565b6106cd565b61017961015e366004611743565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610134565b61010d61019f3660046118eb565b6106eb565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b61010d6101d93660046117f7565b610858565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b61010d61023a3660046117b6565b6108df565b61010d61024d36600461184a565b610a47565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b61010d610acf565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b6102b0610c83565b6102ba8282610ced565b5050565b60035460008167ffffffffffffffff8111156102dc576102dc611b71565b604051908082528060200260200182016040528015610305578160200160208202803683370190505b50905060005b8281101561039557600260006003838154811061032a5761032a611b5b565b60009182526020808320909101546001600160a01b039081168452908301939093526040909101902054835191169083908390811061036b5761036b611b5b565b6001600160a01b03909216602092830291909101909101528061038d81611b2a565b91505061030b565b50604051633111e7b360e01b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633111e7b3906103eb908590600019903090600401611a0f565b602060405180830381600087803b15801561040557600080fd5b505af1158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d9190611974565b90507fdfcc08fd436cd72ca789d668ae3ee67528136f98c501b1b51796de133fe3bf7a82826040516104709291906119ed565b60405180910390a1505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104d05760405162461bcd60e51b81526004016104c790611a75565b60405180910390fd5b600260015414156104f35760405162461bcd60e51b81526004016104c790611aac565b60026001558261053e5760405162461bcd60e51b81526020600482015260166024820152754d757374206465706f73697420736f6d657468696e6760501b60448201526064016104c7565b600061054985610e52565b9050839150821561060257600061055f82610eba565b9050610569610f34565b60405163e8eda9df60e01b81526001600160a01b03888116600483015260248281018990523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b5050505060006105e483610eba565b90506105f9846105f48484611ae3565b611025565b9350505061067b565b61060a610f34565b60405163e8eda9df60e01b81526001600160a01b03878116600483015260248281018890523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b15801561066257600080fd5b505af1158015610676573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528716917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a250600180559392505050565b6000806106d983610e52565b90506106e481610eba565b9392505050565b600054610100900460ff1680610704575060005460ff16155b6107675760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104c7565b600054610100900460ff16158015610789576000805461ffff19166101011790555b838281146107ca5760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420696e7075747360901b60448201526064016104c7565b60005b8181101561083d5761082b8787838181106107ea576107ea611b5b565b90506020020160208101906107ff9190611743565b86868481811061081157610811611b5b565b90506020020160208101906108269190611743565b610ced565b8061083581611b2a565b9150506107cd565b50508015610851576000805461ff00191690555b5050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108a05760405162461bcd60e51b81526004016104c790611a75565b600260015414156108c35760405162461bcd60e51b81526004016104c790611aac565b60026001556108d5848484808561103a565b5050600180555050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109275760405162461bcd60e51b81526004016104c790611a75565b6002600154141561094a5760405162461bcd60e51b81526004016104c790611aac565b6002600155806109965760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b60448201526064016104c7565b6001600160a01b0383166109e55760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081cdc1958da599e481c9958da5c1a595b9d60521b60448201526064016104c7565b6109f96001600160a01b0383168483611248565b6040805160008152602081018390526001600160a01b038416917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398910160405180910390a250506001805550565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a8f5760405162461bcd60e51b81526004016104c790611a75565b60026001541415610ab25760405162461bcd60e51b81526004016104c790611aac565b6002600155610ac4858585858561103a565b505060018055505050565b610ad7610c83565b6040516385acd64160e01b81527f1e9cb14d7560734a61fa5ff9273953e971ff3cd9283c03d8346e3264617933d460048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b158015610b5957600080fd5b505afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611760565b90506001600160a01b038116610bf35760405162461bcd60e51b815260206004820152602160248201527f4c697175696461746f7220616464726573732063616e6e6f74206265207a65726044820152606f60f81b60648201526084016104c7565b610c1d7f0000000000000000000000000000000000000000000000000000000000000000826112b0565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081168252831660208201527f71b4effce66e58c9e4ad29e468e7100f7e8b5d106381fd905a25eee3ea1b6a93910160405180910390a150565b610c8b6112db565b6001600160a01b0316336001600160a01b031614610ceb5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e20657865637574650000000000000060448201526064016104c7565b565b6001600160a01b038281166000908152600260205260409020541615610d4a5760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b60448201526064016104c7565b6001600160a01b03821615801590610d6a57506001600160a01b03811615155b610daa5760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b60448201526064016104c7565b6001600160a01b03828116600081815260026020908152604080832080549587166001600160a01b031996871681179091556003805460018101825594527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90930180549095168417909455925190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a26102ba8282611373565b6001600160a01b0380821660009081526002602052604081205490911680610eb45760405162461bcd60e51b815260206004820152601560248201527418551bdad95b88191bd95cc81b9bdd08195e1a5cdd605a1b60448201526064016104c7565b92915050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610efc57600080fd5b505afa158015610f10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb49190611974565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f9057600080fd5b505afa158015610fa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc89190611760565b90506001600160a01b0381166110205760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f74206578697374000000000060448201526064016104c7565b919050565b600081831161103457826106e4565b50919050565b600082116110845760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b60448201526064016104c7565b600061108f85610e52565b9050811561116a578284146110f15760405162461bcd60e51b815260206004820152602260248201527f436163686520696e61637469766520666f722061737365747320776974682066604482015261656560f01b60648201526084016104c7565b6110f9610f34565b604051631a4ca37b60e21b81526001600160a01b03878116600483015260248201879052888116604483015291909116906369328dec90606401600060405180830381600087803b15801561114d57600080fd5b505af1158015611161573d6000803e3d6000fd5b505050506111f1565b611172610f34565b604051631a4ca37b60e21b81526001600160a01b0387811660048301526024820186905230604483015291909116906369328dec90606401600060405180830381600087803b1580156111c457600080fd5b505af11580156111d8573d6000803e3d6000fd5b506111f1925050506001600160a01b0386168786611248565b604080516001600160a01b03838116825260208201869052918101869052908616907fb925ac01b9c34cc156a17a1e3da718f364df34eec9d0c9dc4e59c2bb1e7ba54b9060600160405180910390a2505050505050565b6040516001600160a01b0383166024820152604481018290526112ab90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611389565b505050565b6112c56001600160a01b03831682600061145b565b6102ba6001600160a01b0383168260001961145b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561133657600080fd5b505afa15801561134a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136e9190611760565b905090565b600061137d610f34565b90506112ab83826112b0565b60006113de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661157f9092919063ffffffff16565b8051909150156112ab57808060200190518101906113fc9190611957565b6112ab5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104c7565b8015806114e45750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156114aa57600080fd5b505afa1580156114be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e29190611974565b155b61154f5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016104c7565b6040516001600160a01b0383166024820152604481018290526112ab90849063095ea7b360e01b90606401611274565b606061158e8484600085611596565b949350505050565b6060824710156115f75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104c7565b843b6116455760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c7565b600080866001600160a01b0316858760405161166191906119d1565b60006040518083038185875af1925050503d806000811461169e576040519150601f19603f3d011682016040523d82523d6000602084013e6116a3565b606091505b50915091506116b38282866116be565b979650505050505050565b606083156116cd5750816106e4565b8251156116dd5782518084602001fd5b8160405162461bcd60e51b81526004016104c79190611a42565b60008083601f84011261170957600080fd5b50813567ffffffffffffffff81111561172157600080fd5b6020830191508360208260051b850101111561173c57600080fd5b9250929050565b60006020828403121561175557600080fd5b81356106e481611b87565b60006020828403121561177257600080fd5b81516106e481611b87565b6000806040838503121561179057600080fd5b823561179b81611b87565b915060208301356117ab81611b87565b809150509250929050565b6000806000606084860312156117cb57600080fd5b83356117d681611b87565b925060208401356117e681611b87565b929592945050506040919091013590565b6000806000806080858703121561180d57600080fd5b843561181881611b87565b9350602085013561182881611b87565b925060408501359150606085013561183f81611b9f565b939692955090935050565b600080600080600060a0868803121561186257600080fd5b853561186d81611b87565b9450602086013561187d81611b87565b93506040860135925060608601359150608086013561189b81611b9f565b809150509295509295909350565b6000806000606084860312156118be57600080fd5b83356118c981611b87565b92506020840135915060408401356118e081611b9f565b809150509250925092565b6000806000806040858703121561190157600080fd5b843567ffffffffffffffff8082111561191957600080fd5b611925888389016116f7565b9096509450602087013591508082111561193e57600080fd5b5061194b878288016116f7565b95989497509550505050565b60006020828403121561196957600080fd5b81516106e481611b9f565b60006020828403121561198657600080fd5b5051919050565b600081518084526020808501945080840160005b838110156119c65781516001600160a01b0316875295820195908201906001016119a1565b509495945050505050565b600082516119e3818460208701611afa565b9190910192915050565b604081526000611a00604083018561198d565b90508260208301529392505050565b606081526000611a22606083018661198d565b6020830194909452506001600160a01b0391909116604090910152919050565b6020815260008251806020840152611a61816040850160208701611afa565b601f01601f19169190910160400192915050565b60208082526017908201527f4f6e6c7920746865204c502063616e2065786563757465000000000000000000604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600082821015611af557611af5611b45565b500390565b60005b83811015611b15578181015183820152602001611afd565b83811115611b24576000848401525b50505050565b6000600019821415611b3e57611b3e611b45565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611b9c57600080fd5b50565b8015158114611b9c57600080fdfea2646970667358221220852d819d90e9c4eaf423206e72867265b8ba41bd8bf8eb99f408b844fad8c64e64736f6c63430008060033";

export class PAaveIntegration__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _lp: string,
    _platformAddress: string,
    _rewardToken: string,
    _rewardController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PAaveIntegration> {
    return super.deploy(
      _nexus,
      _lp,
      _platformAddress,
      _rewardToken,
      _rewardController,
      overrides || {}
    ) as Promise<PAaveIntegration>;
  }
  getDeployTransaction(
    _nexus: string,
    _lp: string,
    _platformAddress: string,
    _rewardToken: string,
    _rewardController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _lp,
      _platformAddress,
      _rewardToken,
      _rewardController,
      overrides || {}
    );
  }
  attach(address: string): PAaveIntegration {
    return super.attach(address) as PAaveIntegration;
  }
  connect(signer: Signer): PAaveIntegration__factory {
    return super.connect(signer) as PAaveIntegration__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PAaveIntegrationInterface {
    return new utils.Interface(_abi) as PAaveIntegrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PAaveIntegration {
    return new Contract(address, _abi, signerOrProvider) as PAaveIntegration;
  }
}
