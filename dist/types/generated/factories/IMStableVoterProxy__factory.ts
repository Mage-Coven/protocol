/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IXZenoVoterProxy,
  IXZenoVoterProxyInterface,
} from "../IXZenoVoterProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLock",
        type: "address",
      },
    ],
    name: "changeLockAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "createLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exitLock",
    outputs: [
      {
        internalType: "uint256",
        name: "zenoBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    name: "extendLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestZeno",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IXZenoVoterProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IXZenoVoterProxyInterface {
    return new utils.Interface(_abi) as IXZenoVoterProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IXZenoVoterProxy {
    return new Contract(address, _abi, signerOrProvider) as IXZenoVoterProxy;
  }
}
