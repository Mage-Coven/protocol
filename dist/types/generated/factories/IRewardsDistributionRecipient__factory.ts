/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRewardsDistributionRecipient,
  IRewardsDistributionRecipientInterface,
} from "../IRewardsDistributionRecipient";

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
];

export class IRewardsDistributionRecipient__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardsDistributionRecipientInterface {
    return new utils.Interface(_abi) as IRewardsDistributionRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewardsDistributionRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRewardsDistributionRecipient;
  }
}
