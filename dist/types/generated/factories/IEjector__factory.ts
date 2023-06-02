/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEjector, IEjectorInterface } from "../IEjector";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
    ],
    name: "ejectMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingLockup",
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
];

export class IEjector__factory {
  static readonly abi = _abi;
  static createInterface(): IEjectorInterface {
    return new utils.Interface(_abi) as IEjectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEjector {
    return new Contract(address, _abi, signerOrProvider) as IEjector;
  }
}