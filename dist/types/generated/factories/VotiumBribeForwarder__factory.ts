/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VotiumBribeForwarder,
  VotiumBribeForwarderInterface,
} from "../VotiumBribeForwarder";

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
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_votiumBribe",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "REWARDS_TOKEN",
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
    inputs: [],
    name: "VOTIUM_BRIBE",
    outputs: [
      {
        internalType: "contract IVotiumBribe",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "choiceIndex",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "proposal",
        type: "bytes32",
      },
    ],
    name: "depositBribe",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "_choiceIndex",
        type: "uint256",
      },
    ],
    name: "updateChoiceIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610c40380380610c4083398101604081905261002f91610182565b826001600160a01b03811661008b5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b0319166080526001600160a01b0382166100f15760405162461bcd60e51b815260206004820152601560248201527f496e76616c6964205265776172647320746f6b656e00000000000000000000006044820152606401610082565b6001600160a01b0381166101475760405162461bcd60e51b815260206004820152601c60248201527f496e76616c696420566f7469756d427269626520636f6e7472616374000000006044820152606401610082565b6001600160601b0319606092831b811660a052911b1660c052506101c5565b80516001600160a01b038116811461017d57600080fd5b919050565b60008060006060848603121561019757600080fd5b6101a084610166565b92506101ae60208501610166565b91506101bc60408501610166565b90509250925092565b60805160601c60a05160601c60c05160601c610a1461022c60003960008181609d015281816102a2015261031f015260008181610116015281816101a80152818161028001526102e101526000818160ef01528181610592015261061d0152610a146000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806322db5ecf146100675780633ff74eab1461007c57806389b654b3146100985780639d462c33146100d7578063a3f5c1d2146100ea578063c560107214610111575b600080fd5b61007a61007536600461090b565b610138565b005b61008560005481565b6040519081526020015b60405180910390f35b6100bf7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161008f565b61007a6100e536600461093d565b610145565b6100bf7f000000000000000000000000000000000000000000000000000000000000000081565b6100bf7f000000000000000000000000000000000000000000000000000000000000000081565b610140610382565b600055565b61014d610382565b816101905760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b60448201526064015b60405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b1580156101f257600080fd5b505afa158015610206573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022a9190610924565b9050828110156102735760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e74207265776172647360601b6044820152606401610187565b6102c76001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008561040f565b6000546040516307bdaea560e51b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018690526044820185905260648201929092527f00000000000000000000000000000000000000000000000000000000000000009091169063f7b5d4a090608401600060405180830381600087803b15801561036557600080fd5b505af1158015610379573d6000803e3d6000fd5b50505050505050565b61038a61055a565b6001600160a01b0316336001600160a01b031614806103c157506103ac610619565b6001600160a01b0316336001600160a01b0316145b61040d5760405162461bcd60e51b815260206004820152601760248201527f4f6e6c79206b6565706572206f7220676f7665726e6f720000000000000000006044820152606401610187565b565b8015806104985750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561045e57600080fd5b505afa158015610472573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104969190610924565b155b6105035760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610187565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610555908490610674565b505050565b6040516385acd64160e01b81527f4f78afe9dfc9a0cb0441c27b9405070cd2a48b490636a7bdd09f355e33a5d7de60048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b1580156105dc57600080fd5b505afa1580156105f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061491906108c0565b905090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156105dc57600080fd5b60006106c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107469092919063ffffffff16565b80519091501561055557808060200190518101906106e791906108e9565b6105555760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610187565b6060610755848460008561075f565b90505b9392505050565b6060824710156107c05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610187565b843b61080e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610187565b600080866001600160a01b0316858760405161082a919061095f565b60006040518083038185875af1925050503d8060008114610867576040519150601f19603f3d011682016040523d82523d6000602084013e61086c565b606091505b509150915061087c828286610887565b979650505050505050565b60608315610896575081610758565b8251156108a65782518084602001fd5b8160405162461bcd60e51b8152600401610187919061097b565b6000602082840312156108d257600080fd5b81516001600160a01b038116811461075857600080fd5b6000602082840312156108fb57600080fd5b8151801515811461075857600080fd5b60006020828403121561091d57600080fd5b5035919050565b60006020828403121561093657600080fd5b5051919050565b6000806040838503121561095057600080fd5b50508035926020909101359150565b600082516109718184602087016109ae565b9190910192915050565b602081526000825180602084015261099a8160408501602087016109ae565b601f01601f19169190910160400192915050565b60005b838110156109c95781810151838201526020016109b1565b838111156109d8576000848401525b5050505056fea264697066735822122047ebc32017bd93fb1892666976bf4e83280076291a0eee018dec8542f43b2c7764736f6c63430008060033";

export class VotiumBribeForwarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _rewardsToken: string,
    _votiumBribe: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotiumBribeForwarder> {
    return super.deploy(
      _nexus,
      _rewardsToken,
      _votiumBribe,
      overrides || {}
    ) as Promise<VotiumBribeForwarder>;
  }
  getDeployTransaction(
    _nexus: string,
    _rewardsToken: string,
    _votiumBribe: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _rewardsToken,
      _votiumBribe,
      overrides || {}
    );
  }
  attach(address: string): VotiumBribeForwarder {
    return super.attach(address) as VotiumBribeForwarder;
  }
  connect(signer: Signer): VotiumBribeForwarder__factory {
    return super.connect(signer) as VotiumBribeForwarder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotiumBribeForwarderInterface {
    return new utils.Interface(_abi) as VotiumBribeForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotiumBribeForwarder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VotiumBribeForwarder;
  }
}
