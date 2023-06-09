/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InitializableModule2,
  InitializableModule2Interface,
} from "../InitializableModule2";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "nexus",
    outputs: [
      {
        internalType: "contract INexus",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609c8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a3f5c1d214602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b73afce80b19a8ce13dec0739a1aab7a028d6845eb38156fea265627a7a723158202fd66cfa01943f2146788b1293577936f9d51c71fb38ad0a11632580041fe7bc64736f6c63430005100032";

export class InitializableModule2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InitializableModule2> {
    return super.deploy(overrides || {}) as Promise<InitializableModule2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InitializableModule2 {
    return super.attach(address) as InitializableModule2;
  }
  connect(signer: Signer): InitializableModule2__factory {
    return super.connect(signer) as InitializableModule2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitializableModule2Interface {
    return new utils.Interface(_abi) as InitializableModule2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitializableModule2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InitializableModule2;
  }
}
