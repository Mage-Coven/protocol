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

interface RevenueForwarderInterface extends ethers.utils.Interface {
  functions: {
    "depositToPool(address[],uint256[])": FunctionFragment;
    "forward()": FunctionFragment;
    "forwarder()": FunctionFragment;
    "mAsset()": FunctionFragment;
    "nexus()": FunctionFragment;
    "notifyRedistributionAmount(address,uint256)": FunctionFragment;
    "setConfig(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositToPool",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "forward", values?: undefined): string;
  encodeFunctionData(functionFragment: "forwarder", values?: undefined): string;
  encodeFunctionData(functionFragment: "mAsset", values?: undefined): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRedistributionAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setConfig", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "depositToPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forwarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRedistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;

  events: {
    "RevenueReceived(address,uint256)": EventFragment;
    "SetForwarder(address)": EventFragment;
    "Withdrawn(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RevenueReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetForwarder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class RevenueForwarder extends BaseContract {
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

  interface: RevenueForwarderInterface;

  functions: {
    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forwarder(overrides?: CallOverrides): Promise<[string]>;

    mAsset(overrides?: CallOverrides): Promise<[string]>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositToPool(
    arg0: string[],
    arg1: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forwarder(overrides?: CallOverrides): Promise<string>;

  mAsset(overrides?: CallOverrides): Promise<string>;

  nexus(overrides?: CallOverrides): Promise<string>;

  notifyRedistributionAmount(
    _mAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _forwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    forward(overrides?: CallOverrides): Promise<void>;

    forwarder(overrides?: CallOverrides): Promise<string>;

    mAsset(overrides?: CallOverrides): Promise<string>;

    nexus(overrides?: CallOverrides): Promise<string>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(_forwarder: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    RevenueReceived(
      mAsset?: string | null,
      amountIn?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { mAsset: string; amountIn: BigNumber }
    >;

    SetForwarder(
      newForwarder?: string | null
    ): TypedEventFilter<[string], { newForwarder: string }>;

    Withdrawn(
      amountOut?: null
    ): TypedEventFilter<[BigNumber], { amountOut: BigNumber }>;
  };

  estimateGas: {
    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forwarder(overrides?: CallOverrides): Promise<BigNumber>;

    mAsset(overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      _forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
