/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  RewardsDistributionRecipient,
  RewardsDistributionRecipientInterface,
} from "../RewardsDistributionRecipient";

const _abi = [
  {
    inputs: [],
    name: "getRewardToken",
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
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDistributor",
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
        name: "_rewardsDistributor",
        type: "address",
      },
    ],
    name: "setRewardsDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class RewardsDistributionRecipient__factory {
  static readonly abi = _abi;
  static createInterface(): RewardsDistributionRecipientInterface {
    return new utils.Interface(_abi) as RewardsDistributionRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardsDistributionRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RewardsDistributionRecipient;
  }
}
