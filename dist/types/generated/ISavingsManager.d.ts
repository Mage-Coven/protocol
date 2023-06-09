/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ISavingsManagerInterface extends ethers.utils.Interface {
  functions: {
    "collectAndDistributeInterest(address)": FunctionFragment;
    "collectAndStreamInterest(address)": FunctionFragment;
    "depositLiquidation(address,uint256)": FunctionFragment;
    "distributeUnallocatedInterest(address)": FunctionFragment;
    "lastBatchCollected(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collectAndDistributeInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collectAndStreamInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositLiquidation",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeUnallocatedInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastBatchCollected",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "collectAndDistributeInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectAndStreamInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeUnallocatedInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastBatchCollected",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISavingsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISavingsManagerInterface;

  functions: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectAndStreamInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositLiquidation(
      _mAsset: string,
      _liquidation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastBatchCollected(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  collectAndDistributeInterest(
    _mAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collectAndStreamInterest(
    _mAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositLiquidation(
    _mAsset: string,
    _liquidation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeUnallocatedInterest(
    _mAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastBatchCollected(
    _mAsset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    collectAndStreamInterest(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositLiquidation(
      _mAsset: string,
      _liquidation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastBatchCollected(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectAndStreamInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositLiquidation(
      _mAsset: string,
      _liquidation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastBatchCollected(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectAndStreamInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositLiquidation(
      _mAsset: string,
      _liquidation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastBatchCollected(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
