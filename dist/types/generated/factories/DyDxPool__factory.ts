/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DyDxPool, DyDxPoolInterface } from "../DyDxPool";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.Info",
        name: "account",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
    ],
    name: "getAccountWei",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "sign",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.Wei",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.Info[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum Structs.ActionType",
            name: "actionType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "accountId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "sign",
                type: "bool",
              },
              {
                internalType: "enum Structs.AssetDenomination",
                name: "denomination",
                type: "uint8",
              },
              {
                internalType: "enum Structs.AssetReference",
                name: "ref",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Structs.AssetAmount",
            name: "amount",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "primaryMarketId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "secondaryMarketId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "otherAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "otherAccountId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Structs.ActionArgs[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "operate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class DyDxPool__factory {
  static readonly abi = _abi;
  static createInterface(): DyDxPoolInterface {
    return new utils.Interface(_abi) as DyDxPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DyDxPool {
    return new Contract(address, _abi, signerOrProvider) as DyDxPool;
  }
}
