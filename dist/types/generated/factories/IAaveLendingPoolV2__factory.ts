/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAaveLendingPoolV2,
  IAaveLendingPoolV2Interface,
} from "../IAaveLendingPoolV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
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
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAaveLendingPoolV2__factory {
  static readonly abi = _abi;
  static createInterface(): IAaveLendingPoolV2Interface {
    return new utils.Interface(_abi) as IAaveLendingPoolV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveLendingPoolV2 {
    return new Contract(address, _abi, signerOrProvider) as IAaveLendingPoolV2;
  }
}
