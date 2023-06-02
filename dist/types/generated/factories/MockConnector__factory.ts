/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockConnector, MockConnectorInterface } from "../MockConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_save",
        type: "address",
      },
      {
        internalType: "address",
        name: "_zUSD",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "checkBalance",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104a73803806104a783398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b6103e9806100be6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e1a7d4d14610051578063853828b614610066578063b6b55f251461006e578063c71daccb14610081575b600080fd5b61006461005f36600461031e565b610096565b005b61006461016c565b61006461007c36600461031e565b61022a565b60025460405190815260200160405180910390f35b6000546001600160a01b031633146100c95760405162461bcd60e51b81526004016100c090610337565b60405180910390fd5b60015460005460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb90604401602060405180830381600087803b15801561011957600080fd5b505af115801561012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015191906102f5565b5080600260008282546101649190610386565b909155505050565b6000546001600160a01b031633146101965760405162461bcd60e51b81526004016100c090610337565b60015460005460025460405163a9059cbb60e01b81526001600160a01b039283166004820152602481019190915291169063a9059cbb90604401602060405180830381600087803b1580156101ea57600080fd5b505af11580156101fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022291906102f5565b506000600255565b6000546001600160a01b031633146102545760405162461bcd60e51b81526004016100c090610337565b6001546000546040516323b872dd60e01b81526001600160a01b039182166004820152306024820152604481018490529116906323b872dd90606401602060405180830381600087803b1580156102aa57600080fd5b505af11580156102be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e291906102f5565b508060026000828254610164919061036e565b60006020828403121561030757600080fd5b8151801515811461031757600080fd5b9392505050565b60006020828403121561033057600080fd5b5035919050565b60208082526017908201527f4f6e6c7920534156452063616e2063616c6c2074686973000000000000000000604082015260600190565b600082198211156103815761038161039d565b500190565b6000828210156103985761039861039d565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212201fd0bb9a7a5c3190c98aef946f2694abeff2e7f1565ee5d389501d3c94d2226b64736f6c63430008060033";

export class MockConnector__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _save: string,
    _zUSD: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockConnector> {
    return super.deploy(
      _save,
      _zUSD,
      overrides || {}
    ) as Promise<MockConnector>;
  }
  getDeployTransaction(
    _save: string,
    _zUSD: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_save, _zUSD, overrides || {});
  }
  attach(address: string): MockConnector {
    return super.attach(address) as MockConnector;
  }
  connect(signer: Signer): MockConnector__factory {
    return super.connect(signer) as MockConnector__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockConnectorInterface {
    return new utils.Interface(_abi) as MockConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockConnector {
    return new Contract(address, _abi, signerOrProvider) as MockConnector;
  }
}