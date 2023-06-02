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

interface MockSavingsManagerInterface extends ethers.utils.Interface {
  functions: {
    "collectAndDistributeInterest(address)": FunctionFragment;
    "distributeUnallocatedInterest(address)": FunctionFragment;
    "rate()": FunctionFragment;
    "recipient()": FunctionFragment;
    "save()": FunctionFragment;
    "setRecipient(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collectAndDistributeInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeUnallocatedInterest",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(functionFragment: "save", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "collectAndDistributeInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeUnallocatedInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "save", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockSavingsManager extends BaseContract {
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

  interface: MockSavingsManagerInterface;

  functions: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    save(overrides?: CallOverrides): Promise<[string]>;

    setRecipient(
      _recipient: string,
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  collectAndDistributeInterest(
    _mAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeUnallocatedInterest(
    _mAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  recipient(overrides?: CallOverrides): Promise<string>;

  save(overrides?: CallOverrides): Promise<string>;

  setRecipient(
    _recipient: string,
    _rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<string>;

    save(overrides?: CallOverrides): Promise<string>;

    setRecipient(
      _recipient: string,
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    save(overrides?: CallOverrides): Promise<BigNumber>;

    setRecipient(
      _recipient: string,
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collectAndDistributeInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeUnallocatedInterest(
      _mAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    save(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRecipient(
      _recipient: string,
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
