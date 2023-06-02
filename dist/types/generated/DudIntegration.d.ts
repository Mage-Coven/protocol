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

interface DudIntegrationInterface extends ethers.utils.Interface {
  functions: {
    "bAsset()": FunctionFragment;
    "bAssetToPToken(address)": FunctionFragment;
    "checkBalance(address)": FunctionFragment;
    "clear()": FunctionFragment;
    "cleared()": FunctionFragment;
    "deposit(address,uint256,bool)": FunctionFragment;
    "initialize(address[],address[])": FunctionFragment;
    "lpAddress()": FunctionFragment;
    "nexus()": FunctionFragment;
    "platform()": FunctionFragment;
    "reapproveContracts()": FunctionFragment;
    "setPTokenAddress(address,address)": FunctionFragment;
    "withdraw(address,address,uint256,bool)": FunctionFragment;
    "withdrawRaw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bAsset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bAssetToPToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkBalance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "clear", values?: undefined): string;
  encodeFunctionData(functionFragment: "cleared", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "lpAddress", values?: undefined): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(functionFragment: "platform", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reapproveContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPTokenAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRaw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bAssetToPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cleared", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "platform", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reapproveContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRaw",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,address,uint256)": EventFragment;
    "PTokenAdded(address,address)": EventFragment;
    "PlatformCleared(address,uint256)": EventFragment;
    "PlatformWithdrawal(address,address,uint256,uint256)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformCleared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export class DudIntegration extends BaseContract {
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

  interface: DudIntegrationInterface;

  functions: {
    bAsset(overrides?: CallOverrides): Promise<[string]>;

    bAssetToPToken(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    checkBalance(
      _bAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    clear(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cleared(overrides?: CallOverrides): Promise<[boolean]>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      _isTokenFeeCharged: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address[],address[])"(
      _bAssets: string[],
      _pTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lpAddress(overrides?: CallOverrides): Promise<[string]>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    platform(overrides?: CallOverrides): Promise<[string]>;

    reapproveContracts(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPTokenAddress(
      _bAsset: string,
      _pToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _totalAmount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawRaw(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bAsset(overrides?: CallOverrides): Promise<string>;

  bAssetToPToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  checkBalance(_bAsset: string, overrides?: CallOverrides): Promise<BigNumber>;

  clear(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cleared(overrides?: CallOverrides): Promise<boolean>;

  deposit(
    _bAsset: string,
    _amount: BigNumberish,
    _isTokenFeeCharged: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address[],address[])"(
    _bAssets: string[],
    _pTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lpAddress(overrides?: CallOverrides): Promise<string>;

  nexus(overrides?: CallOverrides): Promise<string>;

  platform(overrides?: CallOverrides): Promise<string>;

  reapproveContracts(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPTokenAddress(
    _bAsset: string,
    _pToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256,bool)"(
    _receiver: string,
    _bAsset: string,
    _amount: BigNumberish,
    _hasTxFee: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256,uint256,bool)"(
    _receiver: string,
    _bAsset: string,
    _amount: BigNumberish,
    _totalAmount: BigNumberish,
    _hasTxFee: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawRaw(
    _receiver: string,
    _bAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bAsset(overrides?: CallOverrides): Promise<string>;

    bAssetToPToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    checkBalance(
      _bAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clear(overrides?: CallOverrides): Promise<void>;

    cleared(overrides?: CallOverrides): Promise<boolean>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      _isTokenFeeCharged: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialize(address[],address[])"(
      _bAssets: string[],
      _pTokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    lpAddress(overrides?: CallOverrides): Promise<string>;

    nexus(overrides?: CallOverrides): Promise<string>;

    platform(overrides?: CallOverrides): Promise<string>;

    reapproveContracts(overrides?: CallOverrides): Promise<void>;

    setPTokenAddress(
      _bAsset: string,
      _pToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _totalAmount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRaw(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deposit(
      _bAsset?: string | null,
      _pToken?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _bAsset: string; _pToken: string; _amount: BigNumber }
    >;

    PTokenAdded(
      _bAsset?: string | null,
      _pToken?: null
    ): TypedEventFilter<[string, string], { _bAsset: string; _pToken: string }>;

    PlatformCleared(
      _integration?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _integration: string; _value: BigNumber }
    >;

    PlatformWithdrawal(
      bAsset?: string | null,
      pToken?: null,
      totalAmount?: null,
      userAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        bAsset: string;
        pToken: string;
        totalAmount: BigNumber;
        userAmount: BigNumber;
      }
    >;

    Withdrawal(
      _bAsset?: string | null,
      _pToken?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _bAsset: string; _pToken: string; _amount: BigNumber }
    >;
  };

  estimateGas: {
    bAsset(overrides?: CallOverrides): Promise<BigNumber>;

    bAssetToPToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    checkBalance(
      _bAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clear(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cleared(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      _isTokenFeeCharged: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address[],address[])"(
      _bAssets: string[],
      _pTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lpAddress(overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    platform(overrides?: CallOverrides): Promise<BigNumber>;

    reapproveContracts(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPTokenAddress(
      _bAsset: string,
      _pToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _totalAmount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawRaw(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bAssetToPToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkBalance(
      _bAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clear(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cleared(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _bAsset: string,
      _amount: BigNumberish,
      _isTokenFeeCharged: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address[],address[])"(
      _bAssets: string[],
      _pTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lpAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platform(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reapproveContracts(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPTokenAddress(
      _bAsset: string,
      _pToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256,uint256,bool)"(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      _totalAmount: BigNumberish,
      _hasTxFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawRaw(
      _receiver: string,
      _bAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
