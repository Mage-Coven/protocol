/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRedemptionPriceSnap,
  IRedemptionPriceSnapInterface,
} from "../IRedemptionPriceSnap";

const _abi = [
  {
    inputs: [],
    name: "TEN_THOUSAND",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addAuthorization",
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
    name: "authorizedAccounts",
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
        internalType: "bytes32",
        name: "parameter",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "data",
        type: "address",
      },
    ],
    name: "modifyParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleRelayer",
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
        name: "account",
        type: "address",
      },
    ],
    name: "removeAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snappedRedemptionPrice",
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
    inputs: [],
    name: "updateAndGetSnappedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateSnappedPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRedemptionPriceSnap__factory {
  static readonly abi = _abi;
  static createInterface(): IRedemptionPriceSnapInterface {
    return new utils.Interface(_abi) as IRedemptionPriceSnapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRedemptionPriceSnap {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRedemptionPriceSnap;
  }
}
