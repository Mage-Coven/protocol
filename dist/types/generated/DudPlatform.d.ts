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

interface DudPlatformInterface extends ethers.utils.Interface {
  functions: {
    "bAsset()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "integration()": FunctionFragment;
    "nexus()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bAsset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "integration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "integration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "PlatformDeposited(address,uint256)": EventFragment;
    "PlatformWithdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PlatformDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformWithdrawn"): EventFragment;
}

export class DudPlatform extends BaseContract {
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

  interface: DudPlatformInterface;

  functions: {
    bAsset(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    integration(overrides?: CallOverrides): Promise<[string]>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bAsset(overrides?: CallOverrides): Promise<string>;

  deposit(
    _bAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _integration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  integration(overrides?: CallOverrides): Promise<string>;

  nexus(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _bAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bAsset(overrides?: CallOverrides): Promise<string>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(_integration: string, overrides?: CallOverrides): Promise<void>;

    integration(overrides?: CallOverrides): Promise<string>;

    nexus(overrides?: CallOverrides): Promise<string>;

    withdraw(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PlatformDeposited(
      _integration?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _integration: string; _value: BigNumber }
    >;

    PlatformWithdrawn(
      _integration?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _integration: string; _value: BigNumber }
    >;
  };

  estimateGas: {
    bAsset(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    integration(overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    integration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}