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

interface GovernableInterface extends ethers.utils.Interface {
  functions: {
    "changeGovernor(address)": FunctionFragment;
    "governor()": FunctionFragment;
    "isGovernor()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeGovernor",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isGovernor",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "changeGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;

  events: {
    "GovernorChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernorChanged"): EventFragment;
}

export class Governable extends BaseContract {
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

  interface: GovernableInterface;

  functions: {
    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isGovernor(overrides?: CallOverrides): Promise<[boolean]>;
  };

  changeGovernor(
    _newGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  isGovernor(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    changeGovernor(
      _newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    isGovernor(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    GovernorChanged(
      previousGovernor?: string | null,
      newGovernor?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousGovernor: string; newGovernor: string }
    >;
  };

  estimateGas: {
    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
