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

interface VotiumBribeForwarderInterface extends ethers.utils.Interface {
  functions: {
    "REWARDS_TOKEN()": FunctionFragment;
    "VOTIUM_BRIBE()": FunctionFragment;
    "choiceIndex()": FunctionFragment;
    "depositBribe(uint256,bytes32)": FunctionFragment;
    "nexus()": FunctionFragment;
    "updateChoiceIndex(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "REWARDS_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTIUM_BRIBE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "choiceIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositBribe",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateChoiceIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "REWARDS_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTIUM_BRIBE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "choiceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateChoiceIndex",
    data: BytesLike
  ): Result;

  events: {};
}

export class VotiumBribeForwarder extends BaseContract {
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

  interface: VotiumBribeForwarderInterface;

  functions: {
    REWARDS_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    VOTIUM_BRIBE(overrides?: CallOverrides): Promise<[string]>;

    choiceIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    depositBribe(
      amount: BigNumberish,
      proposal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    updateChoiceIndex(
      _choiceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  REWARDS_TOKEN(overrides?: CallOverrides): Promise<string>;

  VOTIUM_BRIBE(overrides?: CallOverrides): Promise<string>;

  choiceIndex(overrides?: CallOverrides): Promise<BigNumber>;

  depositBribe(
    amount: BigNumberish,
    proposal: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nexus(overrides?: CallOverrides): Promise<string>;

  updateChoiceIndex(
    _choiceIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    REWARDS_TOKEN(overrides?: CallOverrides): Promise<string>;

    VOTIUM_BRIBE(overrides?: CallOverrides): Promise<string>;

    choiceIndex(overrides?: CallOverrides): Promise<BigNumber>;

    depositBribe(
      amount: BigNumberish,
      proposal: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nexus(overrides?: CallOverrides): Promise<string>;

    updateChoiceIndex(
      _choiceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    REWARDS_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    VOTIUM_BRIBE(overrides?: CallOverrides): Promise<BigNumber>;

    choiceIndex(overrides?: CallOverrides): Promise<BigNumber>;

    depositBribe(
      amount: BigNumberish,
      proposal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    updateChoiceIndex(
      _choiceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REWARDS_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VOTIUM_BRIBE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    choiceIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositBribe(
      amount: BigNumberish,
      proposal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateChoiceIndex(
      _choiceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
