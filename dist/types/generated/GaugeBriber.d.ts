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

interface GaugeBriberInterface extends ethers.utils.Interface {
  functions: {
    "available(uint256)": FunctionFragment;
    "briber()": FunctionFragment;
    "childRecipient()": FunctionFragment;
    "depositToPool(address[],uint256[])": FunctionFragment;
    "feeSplit()": FunctionFragment;
    "forward()": FunctionFragment;
    "keeper()": FunctionFragment;
    "zusd()": FunctionFragment;
    "nexus()": FunctionFragment;
    "notifyRedistributionAmount(address,uint256)": FunctionFragment;
    "setConfig(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "available",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "briber", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "childRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositToPool",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "feeSplit", values?: undefined): string;
  encodeFunctionData(functionFragment: "forward", values?: undefined): string;
  encodeFunctionData(functionFragment: "keeper", values?: undefined): string;
  encodeFunctionData(functionFragment: "zusd", values?: undefined): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRedistributionAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "briber", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "childRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeSplit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zusd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRedistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;

  events: {
    "RevenueReceived(address,uint256)": EventFragment;
    "Withdrawn(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RevenueReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class GaugeBriber extends BaseContract {
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

  interface: GaugeBriberInterface;

  functions: {
    available(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    briber(overrides?: CallOverrides): Promise<[string]>;

    childRecipient(overrides?: CallOverrides): Promise<[string]>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeSplit(overrides?: CallOverrides): Promise<[BigNumber]>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    zusd(overrides?: CallOverrides): Promise<[string]>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _briber: string,
      _newRecipient: string,
      _feeSplit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  available(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  briber(overrides?: CallOverrides): Promise<string>;

  childRecipient(overrides?: CallOverrides): Promise<string>;

  depositToPool(
    arg0: string[],
    arg1: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeSplit(overrides?: CallOverrides): Promise<BigNumber>;

  forward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  keeper(overrides?: CallOverrides): Promise<string>;

  zusd(overrides?: CallOverrides): Promise<string>;

  nexus(overrides?: CallOverrides): Promise<string>;

  notifyRedistributionAmount(
    _mAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _briber: string,
    _newRecipient: string,
    _feeSplit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    available(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    briber(overrides?: CallOverrides): Promise<string>;

    childRecipient(overrides?: CallOverrides): Promise<string>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    feeSplit(overrides?: CallOverrides): Promise<BigNumber>;

    forward(overrides?: CallOverrides): Promise<void>;

    keeper(overrides?: CallOverrides): Promise<string>;

    zusd(overrides?: CallOverrides): Promise<string>;

    nexus(overrides?: CallOverrides): Promise<string>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      _briber: string,
      _newRecipient: string,
      _feeSplit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    RevenueReceived(
      mAsset?: string | null,
      amountIn?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { mAsset: string; amountIn: BigNumber }
    >;

    Withdrawn(
      amountOut?: null,
      amountToChild?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { amountOut: BigNumber; amountToChild: BigNumber }
    >;
  };

  estimateGas: {
    available(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    briber(overrides?: CallOverrides): Promise<BigNumber>;

    childRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeSplit(overrides?: CallOverrides): Promise<BigNumber>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    zusd(overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      _briber: string,
      _newRecipient: string,
      _feeSplit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    available(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    briber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    childRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeSplit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zusd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _briber: string,
      _newRecipient: string,
      _feeSplit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}