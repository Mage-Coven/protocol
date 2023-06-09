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

interface BoostDirectorV2Interface extends ethers.utils.Interface {
  functions: {
    "_directedBitmap(address)": FunctionFragment;
    "_vaults(address)": FunctionFragment;
    "addStakedToken(address)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "initialize(address[])": FunctionFragment;
    "nexus()": FunctionFragment;
    "removeStakedToken(address)": FunctionFragment;
    "setBalanceDivisor(uint256)": FunctionFragment;
    "setDirection(address,address,bool)": FunctionFragment;
    "stakedTokenContracts(uint256)": FunctionFragment;
    "whitelistVaults(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_directedBitmap",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "_vaults", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addStakedToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeStakedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBalanceDivisor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDirection",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedTokenContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistVaults",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "_directedBitmap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_vaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addStakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeStakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBalanceDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDirection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedTokenContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistVaults",
    data: BytesLike
  ): Result;

  events: {
    "BalanceDivisorChanged(uint256)": EventFragment;
    "Directed(address,address)": EventFragment;
    "RedirectedBoost(address,address,address)": EventFragment;
    "StakedTokenAdded(address)": EventFragment;
    "StakedTokenRemoved(address)": EventFragment;
    "Whitelisted(address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BalanceDivisorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Directed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedirectedBoost"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakedTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakedTokenRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Whitelisted"): EventFragment;
}

export class BoostDirectorV2 extends BaseContract {
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

  interface: BoostDirectorV2Interface;

  functions: {
    _directedBitmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _vaults(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    addStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBalance(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    removeStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBalanceDivisor(
      _newDivisor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDirection(
      _old: string,
      _new: string,
      _pokeNew: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedTokenContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    whitelistVaults(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _directedBitmap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _vaults(arg0: string, overrides?: CallOverrides): Promise<number>;

  addStakedToken(
    _stakedToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBalance(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _newVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nexus(overrides?: CallOverrides): Promise<string>;

  removeStakedToken(
    _stakedToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBalanceDivisor(
    _newDivisor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDirection(
    _old: string,
    _new: string,
    _pokeNew: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedTokenContracts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  whitelistVaults(
    _newVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _directedBitmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _vaults(arg0: string, overrides?: CallOverrides): Promise<number>;

    addStakedToken(
      _stakedToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getBalance(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_newVaults: string[], overrides?: CallOverrides): Promise<void>;

    nexus(overrides?: CallOverrides): Promise<string>;

    removeStakedToken(
      _stakedToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBalanceDivisor(
      _newDivisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDirection(
      _old: string,
      _new: string,
      _pokeNew: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedTokenContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    whitelistVaults(
      _newVaults: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BalanceDivisorChanged(
      newDivisor?: null
    ): TypedEventFilter<[BigNumber], { newDivisor: BigNumber }>;

    Directed(
      user?: null,
      boosted?: null
    ): TypedEventFilter<[string, string], { user: string; boosted: string }>;

    RedirectedBoost(
      user?: null,
      boosted?: null,
      replaced?: null
    ): TypedEventFilter<
      [string, string, string],
      { user: string; boosted: string; replaced: string }
    >;

    StakedTokenAdded(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    StakedTokenRemoved(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    Whitelisted(
      vaultAddress?: null,
      vaultId?: null
    ): TypedEventFilter<
      [string, number],
      { vaultAddress: string; vaultId: number }
    >;
  };

  estimateGas: {
    _directedBitmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _vaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    addStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBalance(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    removeStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBalanceDivisor(
      _newDivisor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDirection(
      _old: string,
      _new: string,
      _pokeNew: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedTokenContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistVaults(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _directedBitmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _vaults(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeStakedToken(
      _stakedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBalanceDivisor(
      _newDivisor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDirection(
      _old: string,
      _new: string,
      _pokeNew: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedTokenContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistVaults(
      _newVaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
