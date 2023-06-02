/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZusdV2SusdBalancer,
  ZusdV2SusdBalancerInterface,
} from "../ZusdV2SusdBalancer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "bAssets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "funderAccount",
        type: "address",
      },
    ],
    name: "balanceSusd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610bbc8061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806304a43a0f14610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b61006461005f3660046108fa565b6100a0565b005b61006461031a565b600054604080516001600160a01b039092168252519081900360200190f35b61006461009b3660046108df565b610350565b6000546001600160a01b031633146100d35760405162461bcd60e51b81526004016100ca90610a5b565b60405180910390fd5b8251825181146101255760405162461bcd60e51b815260206004820152601b60248201527f6241737365747320616e6420616d6f756e7473206c656e67746873000000000060448201526064016100ca565b6000805b8281101561016a5784818151811061014357610143610b5a565b6020026020010151826101569190610ae5565b91508061016281610b29565b915050610129565b5061018b7357ab1ec28d129707052df4df418d58a2d46d5f518430846103eb565b6101be7357ab1ec28d129707052df4df418d58a2d46d5f5173e2f2a5c287993345a840db3b0845fbc70f5935a58361045c565b6000805b838110156103115773e2f2a5c287993345a840db3b0845fbc70f5935a56001600160a01b0316636e81221c7357ab1ec28d129707052df4df418d58a2d46d5f5189848151811061021457610214610b5a565b602002602001015189858151811061022e5761022e610b5a565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152306064820152608401602060405180830381600087803b15801561028e57600080fd5b505af11580156102a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c691906109f3565b91506102ff85838984815181106102df576102df610b5a565b60200260200101516001600160a01b03166105859092919063ffffffff16565b8061030981610b29565b9150506101c2565b50505050505050565b6000546001600160a01b031633146103445760405162461bcd60e51b81526004016100ca90610a5b565b61034e60006105b5565b565b6000546001600160a01b0316331461037a5760405162461bcd60e51b81526004016100ca90610a5b565b6001600160a01b0381166103df5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ca565b6103e8816105b5565b50565b6040516001600160a01b03808516602483015283166044820152606481018290526104569085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610605565b50505050565b8015806104e55750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156104ab57600080fd5b505afa1580156104bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e391906109f3565b155b6105505760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016100ca565b6040516001600160a01b03831660248201526044810182905261058090849063095ea7b360e01b9060640161041f565b505050565b6040516001600160a01b03831660248201526044810182905261058090849063a9059cbb60e01b9060640161041f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061065a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166106d79092919063ffffffff16565b805190915015610580578080602001905181019061067891906109d1565b6105805760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016100ca565b60606106e684846000856106f0565b90505b9392505050565b6060824710156107515760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016100ca565b843b61079f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100ca565b600080866001600160a01b031685876040516107bb9190610a0c565b60006040518083038185875af1925050503d80600081146107f8576040519150601f19603f3d011682016040523d82523d6000602084013e6107fd565b606091505b509150915061080d828286610818565b979650505050505050565b606083156108275750816106e9565b8251156108375782518084602001fd5b8160405162461bcd60e51b81526004016100ca9190610a28565b80356001600160a01b038116811461086857600080fd5b919050565b600082601f83011261087e57600080fd5b8135602061089361088e83610ac1565b610a90565b80838252828201915082860187848660051b89010111156108b357600080fd5b60005b858110156108d2578135845292840192908401906001016108b6565b5090979650505050505050565b6000602082840312156108f157600080fd5b6106e982610851565b60008060006060848603121561090f57600080fd5b833567ffffffffffffffff8082111561092757600080fd5b818601915086601f83011261093b57600080fd5b8135602061094b61088e83610ac1565b8083825282820191508286018b848660051b890101111561096b57600080fd5b600096505b848710156109955761098181610851565b835260019690960195918301918301610970565b50975050870135925050808211156109ac57600080fd5b506109b98682870161086d565b9250506109c860408501610851565b90509250925092565b6000602082840312156109e357600080fd5b815180151581146106e957600080fd5b600060208284031215610a0557600080fd5b5051919050565b60008251610a1e818460208701610afd565b9190910192915050565b6020815260008251806020840152610a47816040850160208701610afd565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ab957610ab9610b70565b604052919050565b600067ffffffffffffffff821115610adb57610adb610b70565b5060051b60200190565b60008219821115610af857610af8610b44565b500190565b60005b83811015610b18578181015183820152602001610b00565b838111156104565750506000910152565b6000600019821415610b3d57610b3d610b44565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122069e63ac99253f4454284f7b8bc716159500ab01edfcfdcfb1db6067ab039c07464736f6c63430008060033";

export class ZusdV2SusdBalancer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZusdV2SusdBalancer> {
    return super.deploy(overrides || {}) as Promise<ZusdV2SusdBalancer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZusdV2SusdBalancer {
    return super.attach(address) as ZusdV2SusdBalancer;
  }
  connect(signer: Signer): ZusdV2SusdBalancer__factory {
    return super.connect(signer) as ZusdV2SusdBalancer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZusdV2SusdBalancerInterface {
    return new utils.Interface(_abi) as ZusdV2SusdBalancerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZusdV2SusdBalancer {
    return new Contract(address, _abi, signerOrProvider) as ZusdV2SusdBalancer;
  }
}