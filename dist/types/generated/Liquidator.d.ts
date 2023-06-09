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

interface LiquidatorInterface extends ethers.utils.Interface {
  functions: {
    "aaveIntegrations(uint256)": FunctionFragment;
    "aaveToken()": FunctionFragment;
    "alchemixToken()": FunctionFragment;
    "claimStakedAave()": FunctionFragment;
    "compToken()": FunctionFragment;
    "createLiquidation(address,address,address,bytes,bytes,uint256,uint256,address,bool)": FunctionFragment;
    "deleteLiquidation(address)": FunctionFragment;
    "deprecated_curve()": FunctionFragment;
    "deprecated_liquidations(address)": FunctionFragment;
    "deprecated_zUSD()": FunctionFragment;
    "deprecated_minReturn(address)": FunctionFragment;
    "deprecated_uniswap()": FunctionFragment;
    "initialize()": FunctionFragment;
    "liquidations(address)": FunctionFragment;
    "nexus()": FunctionFragment;
    "reApproveLiquidation(address)": FunctionFragment;
    "stkAave()": FunctionFragment;
    "totalAaveBalance()": FunctionFragment;
    "triggerLiquidation(address)": FunctionFragment;
    "triggerLiquidationAave()": FunctionFragment;
    "uniswapQuoter()": FunctionFragment;
    "uniswapRouter()": FunctionFragment;
    "updateBasset(address,address,bytes,bytes,uint256,uint256)": FunctionFragment;
    "upgrade()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "aaveIntegrations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "aaveToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "alchemixToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimStakedAave",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "compToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createLiquidation",
    values: [
      string,
      string,
      string,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      string,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteLiquidation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated_curve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated_liquidations",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated_zUSD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated_minReturn",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated_uniswap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidations",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reApproveLiquidation",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stkAave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAaveBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "triggerLiquidation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerLiquidationAave",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapQuoter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateBasset",
    values: [string, string, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "aaveIntegrations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "aaveToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "alchemixToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimStakedAave",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deprecated_curve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deprecated_liquidations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deprecated_zUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deprecated_minReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deprecated_uniswap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reApproveLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stkAave", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAaveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerLiquidationAave",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapQuoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBasset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "ClaimedStakedAave(uint256)": EventFragment;
    "Liquidated(address,address,uint256,address)": EventFragment;
    "LiquidationEnded(address)": EventFragment;
    "LiquidationModified(address)": EventFragment;
    "RedeemedAave(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimedStakedAave"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidationEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidationModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemedAave"): EventFragment;
}

export class Liquidator extends BaseContract {
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

  interface: LiquidatorInterface;

  functions: {
    aaveIntegrations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    aaveToken(overrides?: CallOverrides): Promise<[string]>;

    alchemixToken(overrides?: CallOverrides): Promise<[string]>;

    claimStakedAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compToken(overrides?: CallOverrides): Promise<[string]>;

    createLiquidation(
      _integration: string,
      _sellToken: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      _mAsset: string,
      _useAave: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deprecated_curve(overrides?: CallOverrides): Promise<[string]>;

    deprecated_liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        sellToken: string;
        bAsset: string;
        curvePosition: BigNumber;
        lastTriggered: BigNumber;
        trancheAmount: BigNumber;
      }
    >;

    deprecated_zUSD(overrides?: CallOverrides): Promise<[string]>;

    deprecated_minReturn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deprecated_uniswap(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
      ] & {
        sellToken: string;
        bAsset: string;
        uniswapPath: string;
        uniswapPathReversed: string;
        lastTriggered: BigNumber;
        trancheAmount: BigNumber;
        minReturn: BigNumber;
        mAsset: string;
        aaveBalance: BigNumber;
      }
    >;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    reApproveLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stkAave(overrides?: CallOverrides): Promise<[string]>;

    totalAaveBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    triggerLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    triggerLiquidationAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapQuoter(overrides?: CallOverrides): Promise<[string]>;

    uniswapRouter(overrides?: CallOverrides): Promise<[string]>;

    updateBasset(
      _integration: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  aaveIntegrations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  aaveToken(overrides?: CallOverrides): Promise<string>;

  alchemixToken(overrides?: CallOverrides): Promise<string>;

  claimStakedAave(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compToken(overrides?: CallOverrides): Promise<string>;

  createLiquidation(
    _integration: string,
    _sellToken: string,
    _bAsset: string,
    _uniswapPath: BytesLike,
    _uniswapPathReversed: BytesLike,
    _trancheAmount: BigNumberish,
    _minReturn: BigNumberish,
    _mAsset: string,
    _useAave: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteLiquidation(
    _integration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deprecated_curve(overrides?: CallOverrides): Promise<string>;

  deprecated_liquidations(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      sellToken: string;
      bAsset: string;
      curvePosition: BigNumber;
      lastTriggered: BigNumber;
      trancheAmount: BigNumber;
    }
  >;

  deprecated_zUSD(overrides?: CallOverrides): Promise<string>;

  deprecated_minReturn(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deprecated_uniswap(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidations(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber
    ] & {
      sellToken: string;
      bAsset: string;
      uniswapPath: string;
      uniswapPathReversed: string;
      lastTriggered: BigNumber;
      trancheAmount: BigNumber;
      minReturn: BigNumber;
      mAsset: string;
      aaveBalance: BigNumber;
    }
  >;

  nexus(overrides?: CallOverrides): Promise<string>;

  reApproveLiquidation(
    _integration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stkAave(overrides?: CallOverrides): Promise<string>;

  totalAaveBalance(overrides?: CallOverrides): Promise<BigNumber>;

  triggerLiquidation(
    _integration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  triggerLiquidationAave(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapQuoter(overrides?: CallOverrides): Promise<string>;

  uniswapRouter(overrides?: CallOverrides): Promise<string>;

  updateBasset(
    _integration: string,
    _bAsset: string,
    _uniswapPath: BytesLike,
    _uniswapPathReversed: BytesLike,
    _trancheAmount: BigNumberish,
    _minReturn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aaveIntegrations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    aaveToken(overrides?: CallOverrides): Promise<string>;

    alchemixToken(overrides?: CallOverrides): Promise<string>;

    claimStakedAave(overrides?: CallOverrides): Promise<void>;

    compToken(overrides?: CallOverrides): Promise<string>;

    createLiquidation(
      _integration: string,
      _sellToken: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      _mAsset: string,
      _useAave: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteLiquidation(
      _integration: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deprecated_curve(overrides?: CallOverrides): Promise<string>;

    deprecated_liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        sellToken: string;
        bAsset: string;
        curvePosition: BigNumber;
        lastTriggered: BigNumber;
        trancheAmount: BigNumber;
      }
    >;

    deprecated_zUSD(overrides?: CallOverrides): Promise<string>;

    deprecated_minReturn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deprecated_uniswap(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
      ] & {
        sellToken: string;
        bAsset: string;
        uniswapPath: string;
        uniswapPathReversed: string;
        lastTriggered: BigNumber;
        trancheAmount: BigNumber;
        minReturn: BigNumber;
        mAsset: string;
        aaveBalance: BigNumber;
      }
    >;

    nexus(overrides?: CallOverrides): Promise<string>;

    reApproveLiquidation(
      _integration: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stkAave(overrides?: CallOverrides): Promise<string>;

    totalAaveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    triggerLiquidation(
      _integration: string,
      overrides?: CallOverrides
    ): Promise<void>;

    triggerLiquidationAave(overrides?: CallOverrides): Promise<void>;

    uniswapQuoter(overrides?: CallOverrides): Promise<string>;

    uniswapRouter(overrides?: CallOverrides): Promise<string>;

    updateBasset(
      _integration: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ClaimedStakedAave(
      rewardsAmount?: null
    ): TypedEventFilter<[BigNumber], { rewardsAmount: BigNumber }>;

    Liquidated(
      sellToken?: string | null,
      zUSD?: null,
      zUSDAmount?: null,
      buyToken?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        sellToken: string;
        zUSD: string;
        zUSDAmount: BigNumber;
        buyToken: string;
      }
    >;

    LiquidationEnded(
      integration?: string | null
    ): TypedEventFilter<[string], { integration: string }>;

    LiquidationModified(
      integration?: string | null
    ): TypedEventFilter<[string], { integration: string }>;

    RedeemedAave(
      redeemedAmount?: null
    ): TypedEventFilter<[BigNumber], { redeemedAmount: BigNumber }>;
  };

  estimateGas: {
    aaveIntegrations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    aaveToken(overrides?: CallOverrides): Promise<BigNumber>;

    alchemixToken(overrides?: CallOverrides): Promise<BigNumber>;

    claimStakedAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compToken(overrides?: CallOverrides): Promise<BigNumber>;

    createLiquidation(
      _integration: string,
      _sellToken: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      _mAsset: string,
      _useAave: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deprecated_curve(overrides?: CallOverrides): Promise<BigNumber>;

    deprecated_liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deprecated_zUSD(overrides?: CallOverrides): Promise<BigNumber>;

    deprecated_minReturn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deprecated_uniswap(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    reApproveLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stkAave(overrides?: CallOverrides): Promise<BigNumber>;

    totalAaveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    triggerLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    triggerLiquidationAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapQuoter(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    updateBasset(
      _integration: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aaveIntegrations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    aaveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    alchemixToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimStakedAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createLiquidation(
      _integration: string,
      _sellToken: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      _mAsset: string,
      _useAave: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deprecated_curve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deprecated_liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deprecated_zUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deprecated_minReturn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deprecated_uniswap(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reApproveLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stkAave(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAaveBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    triggerLiquidation(
      _integration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    triggerLiquidationAave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapQuoter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateBasset(
      _integration: string,
      _bAsset: string,
      _uniswapPath: BytesLike,
      _uniswapPathReversed: BytesLike,
      _trancheAmount: BigNumberish,
      _minReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
