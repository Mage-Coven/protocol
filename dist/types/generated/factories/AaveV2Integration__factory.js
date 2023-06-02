"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AaveV2Integration__factory = void 0;
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
const _bytecode = "0x6101006040523480156200001257600080fd5b5060405162001b9f38038062001b9f83398101604081905262000035916200019d565b8383816001600160a01b038116620000945760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052600180556001600160a01b038116620000f55760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964204c50206164647265737360701b60448201526064016200008b565b60601b6001600160601b03191660a052506001600160a01b0382166200015e5760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420706c6174666f726d2061646472657373000000000000000060448201526064016200008b565b6001600160601b0319606092831b811660c052911b1660e05250620001fa9050565b80516001600160a01b03811681146200019857600080fd5b919050565b60008060008060808587031215620001b457600080fd5b620001bf8562000180565b9350620001cf6020860162000180565b9250620001df6040860162000180565b9150620001ef6060860162000180565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c6119206200027f60003960008181610231015281816109e40152610a170152600081816102020152610d2501526000818161018e015281816102760152818161064f015281816106d6015261083e0152600081816101b5015281816108fb01526110cb01526119206000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639b4dc8cc1161008c578063c89fc72f11610066578063c89fc72f146101ea578063dbe55e56146101fd578063e729645414610224578063f7c618c11461022c57600080fd5b80639b4dc8cc14610189578063a3f5c1d2146101b0578063a4e28595146101d757600080fd5b80630ed57b3a146100d45780633edd1128146100e95780635f5152261461010f57806371c465851461012257806373cf25f814610163578063934785b714610176575b600080fd5b6100e76100e2366004611569565b610253565b005b6100fc6100f7366004611695565b610269565b6040519081526020015b60405180910390f35b6100fc61011d36600461152f565b6104b9565b61014b61013036600461152f565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610106565b6100e76101713660046116d7565b6104d7565b6100e76101843660046115e3565b610644565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b6100e76101e53660046115a2565b6106cb565b6100e76101f8366004611636565b610833565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b6100e76108bb565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b61025b610a6f565b6102658282610ad9565b5050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102bc5760405162461bcd60e51b81526004016102b3906117c8565b60405180910390fd5b600260015414156102df5760405162461bcd60e51b81526004016102b3906117ff565b60026001558261032a5760405162461bcd60e51b81526020600482015260166024820152754d757374206465706f73697420736f6d657468696e6760501b60448201526064016102b3565b600061033585610c3e565b905083915082156103ee57600061034b82610ca6565b9050610355610d20565b60405163e8eda9df60e01b81526001600160a01b03888116600483015260248281018990523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b1580156103ad57600080fd5b505af11580156103c1573d6000803e3d6000fd5b5050505060006103d083610ca6565b90506103e5846103e08484611836565b610e11565b93505050610467565b6103f6610d20565b60405163e8eda9df60e01b81526001600160a01b03878116600483015260248281018890523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b15801561044e57600080fd5b505af1158015610462573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528716917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a250600180559392505050565b6000806104c583610c3e565b90506104d081610ca6565b9392505050565b600054610100900460ff16806104f0575060005460ff16155b6105535760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102b3565b600054610100900460ff16158015610575576000805461ffff19166101011790555b838281146105b65760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420696e7075747360901b60448201526064016102b3565b60005b81811015610629576106178787838181106105d6576105d66118ae565b90506020020160208101906105eb919061152f565b8686848181106105fd576105fd6118ae565b9050602002016020810190610612919061152f565b610ad9565b806106218161187d565b9150506105b9565b5050801561063d576000805461ff00191690555b5050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461068c5760405162461bcd60e51b81526004016102b3906117c8565b600260015414156106af5760405162461bcd60e51b81526004016102b3906117ff565b60026001556106c18484848085610e26565b5050600180555050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107135760405162461bcd60e51b81526004016102b3906117c8565b600260015414156107365760405162461bcd60e51b81526004016102b3906117ff565b6002600155806107825760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b60448201526064016102b3565b6001600160a01b0383166107d15760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081cdc1958da599e481c9958da5c1a595b9d60521b60448201526064016102b3565b6107e56001600160a01b0383168483611034565b6040805160008152602081018390526001600160a01b038416917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398910160405180910390a250506001805550565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461087b5760405162461bcd60e51b81526004016102b3906117c8565b6002600154141561089e5760405162461bcd60e51b81526004016102b3906117ff565b60026001556108b08585858585610e26565b505060018055505050565b6108c3610a6f565b6040516385acd64160e01b81527f1e9cb14d7560734a61fa5ff9273953e971ff3cd9283c03d8346e3264617933d460048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b15801561094557600080fd5b505afa158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d919061154c565b90506001600160a01b0381166109df5760405162461bcd60e51b815260206004820152602160248201527f4c697175696461746f7220616464726573732063616e6e6f74206265207a65726044820152606f60f81b60648201526084016102b3565b610a097f00000000000000000000000000000000000000000000000000000000000000008261109c565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081168252831660208201527f71b4effce66e58c9e4ad29e468e7100f7e8b5d106381fd905a25eee3ea1b6a93910160405180910390a150565b610a776110c7565b6001600160a01b0316336001600160a01b031614610ad75760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e20657865637574650000000000000060448201526064016102b3565b565b6001600160a01b038281166000908152600260205260409020541615610b365760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b60448201526064016102b3565b6001600160a01b03821615801590610b5657506001600160a01b03811615155b610b965760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b60448201526064016102b3565b6001600160a01b03828116600081815260026020908152604080832080549587166001600160a01b031996871681179091556003805460018101825594527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90930180549095168417909455925190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a2610265828261115f565b6001600160a01b0380821660009081526002602052604081205490911680610ca05760405162461bcd60e51b815260206004820152601560248201527418551bdad95b88191bd95cc81b9bdd08195e1a5cdd605a1b60448201526064016102b3565b92915050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610ce857600080fd5b505afa158015610cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca09190611760565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d7c57600080fd5b505afa158015610d90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db4919061154c565b90506001600160a01b038116610e0c5760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f74206578697374000000000060448201526064016102b3565b919050565b6000818311610e2057826104d0565b50919050565b60008211610e705760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b60448201526064016102b3565b6000610e7b85610c3e565b90508115610f5657828414610edd5760405162461bcd60e51b815260206004820152602260248201527f436163686520696e61637469766520666f722061737365747320776974682066604482015261656560f01b60648201526084016102b3565b610ee5610d20565b604051631a4ca37b60e21b81526001600160a01b03878116600483015260248201879052888116604483015291909116906369328dec90606401600060405180830381600087803b158015610f3957600080fd5b505af1158015610f4d573d6000803e3d6000fd5b50505050610fdd565b610f5e610d20565b604051631a4ca37b60e21b81526001600160a01b0387811660048301526024820186905230604483015291909116906369328dec90606401600060405180830381600087803b158015610fb057600080fd5b505af1158015610fc4573d6000803e3d6000fd5b50610fdd925050506001600160a01b0386168786611034565b604080516001600160a01b03838116825260208201869052918101869052908616907fb925ac01b9c34cc156a17a1e3da718f364df34eec9d0c9dc4e59c2bb1e7ba54b9060600160405180910390a2505050505050565b6040516001600160a01b03831660248201526044810182905261109790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611175565b505050565b6110b16001600160a01b038316826000611247565b6102656001600160a01b03831682600019611247565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561112257600080fd5b505afa158015611136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115a919061154c565b905090565b6000611169610d20565b9050611097838261109c565b60006111ca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661136b9092919063ffffffff16565b80519091501561109757808060200190518101906111e89190611743565b6110975760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102b3565b8015806112d05750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561129657600080fd5b505afa1580156112aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ce9190611760565b155b61133b5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016102b3565b6040516001600160a01b03831660248201526044810182905261109790849063095ea7b360e01b90606401611060565b606061137a8484600085611382565b949350505050565b6060824710156113e35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102b3565b843b6114315760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102b3565b600080866001600160a01b0316858760405161144d9190611779565b60006040518083038185875af1925050503d806000811461148a576040519150601f19603f3d011682016040523d82523d6000602084013e61148f565b606091505b509150915061149f8282866114aa565b979650505050505050565b606083156114b95750816104d0565b8251156114c95782518084602001fd5b8160405162461bcd60e51b81526004016102b39190611795565b60008083601f8401126114f557600080fd5b50813567ffffffffffffffff81111561150d57600080fd5b6020830191508360208260051b850101111561152857600080fd5b9250929050565b60006020828403121561154157600080fd5b81356104d0816118c4565b60006020828403121561155e57600080fd5b81516104d0816118c4565b6000806040838503121561157c57600080fd5b8235611587816118c4565b91506020830135611597816118c4565b809150509250929050565b6000806000606084860312156115b757600080fd5b83356115c2816118c4565b925060208401356115d2816118c4565b929592945050506040919091013590565b600080600080608085870312156115f957600080fd5b8435611604816118c4565b93506020850135611614816118c4565b925060408501359150606085013561162b816118dc565b939692955090935050565b600080600080600060a0868803121561164e57600080fd5b8535611659816118c4565b94506020860135611669816118c4565b935060408601359250606086013591506080860135611687816118dc565b809150509295509295909350565b6000806000606084860312156116aa57600080fd5b83356116b5816118c4565b92506020840135915060408401356116cc816118dc565b809150509250925092565b600080600080604085870312156116ed57600080fd5b843567ffffffffffffffff8082111561170557600080fd5b611711888389016114e3565b9096509450602087013591508082111561172a57600080fd5b50611737878288016114e3565b95989497509550505050565b60006020828403121561175557600080fd5b81516104d0816118dc565b60006020828403121561177257600080fd5b5051919050565b6000825161178b81846020870161184d565b9190910192915050565b60208152600082518060208401526117b481604085016020870161184d565b601f01601f19169190910160400192915050565b60208082526017908201527f4f6e6c7920746865204c502063616e2065786563757465000000000000000000604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60008282101561184857611848611898565b500390565b60005b83811015611868578181015183820152602001611850565b83811115611877576000848401525b50505050565b600060001982141561189157611891611898565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146118d957600080fd5b50565b80151581146118d957600080fdfea264697066735822122022e4a50b9dcae187ba5b44fb5d0f142cd9dd63beeb07959f4260242355cadd0364736f6c63430008060033";
class AaveV2Integration__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nexus, _lp, _platformAddress, _rewardToken, overrides) {
        return super.deploy(_nexus, _lp, _platformAddress, _rewardToken, overrides || {});
    }
    getDeployTransaction(_nexus, _lp, _platformAddress, _rewardToken, overrides) {
        return super.getDeployTransaction(_nexus, _lp, _platformAddress, _rewardToken, overrides || {});
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
exports.AaveV2Integration__factory = AaveV2Integration__factory;
AaveV2Integration__factory.bytecode = _bytecode;
AaveV2Integration__factory.abi = _abi;
//# sourceMappingURL=AaveV2Integration__factory.js.map