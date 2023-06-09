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

interface RevenueBuyBackInterface extends ethers.utils.Interface {
  functions: {
    "CONFIG_SCALE()": FunctionFragment;
    "EMISSIONS_CONTROLLER()": FunctionFragment;
    "REWARDS_TOKEN()": FunctionFragment;
    "UNISWAP_ROUTER()": FunctionFragment;
    "addStakingContract(uint16)": FunctionFragment;
    "buyBackRewards(address[])": FunctionFragment;
    "depositToPool(address[],uint256[])": FunctionFragment;
    "donateRewards()": FunctionFragment;
    "initialize(uint16[])": FunctionFragment;
    "massetConfig(address)": FunctionFragment;
    "nexus()": FunctionFragment;
    "notifyRedistributionAmount(address,uint256)": FunctionFragment;
    "setMassetConfig(address,address,uint128,uint128,bytes)": FunctionFragment;
    "stakingDialIds(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CONFIG_SCALE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSIONS_CONTROLLER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARDS_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNISWAP_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addStakingContract",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyBackRewards",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToPool",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "donateRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "massetConfig",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRedistributionAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMassetConfig",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingDialIds",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONFIG_SCALE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSIONS_CONTROLLER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARDS_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNISWAP_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addStakingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyBackRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "donateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massetConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRedistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMassetConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingDialIds",
    data: BytesLike
  ): Result;

  events: {
    "AddedMassetConfig(address,address,uint128,uint128,bytes)": EventFragment;
    "AddedStakingContract(uint16)": EventFragment;
    "BuyBackRewards(address,uint256,uint256,uint256)": EventFragment;
    "DonatedRewards(uint256)": EventFragment;
    "RevenueReceived(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedMassetConfig"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedStakingContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyBackRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonatedRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevenueReceived"): EventFragment;
}

export class RevenueBuyBack extends BaseContract {
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

  interface: RevenueBuyBackInterface;

  functions: {
    CONFIG_SCALE(overrides?: CallOverrides): Promise<[BigNumber]>;

    EMISSIONS_CONTROLLER(overrides?: CallOverrides): Promise<[string]>;

    REWARDS_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<[string]>;

    addStakingContract(
      _stakingDialId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyBackRewards(
      _mAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    donateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _stakingDialIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    massetConfig(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string] & {
        minMasset2BassetPrice: BigNumber;
        minBasset2RewardsPrice: BigNumber;
        bAsset: string;
        uniswapPath: string;
      }
    >;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMassetConfig(
      _mAsset: string,
      _bAsset: string,
      _minMasset2BassetPrice: BigNumberish,
      _minBasset2RewardsPrice: BigNumberish,
      _uniswapPath: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingDialIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  CONFIG_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSIONS_CONTROLLER(overrides?: CallOverrides): Promise<string>;

  REWARDS_TOKEN(overrides?: CallOverrides): Promise<string>;

  UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;

  addStakingContract(
    _stakingDialId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyBackRewards(
    _mAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToPool(
    arg0: string[],
    arg1: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  donateRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _stakingDialIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  massetConfig(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string] & {
      minMasset2BassetPrice: BigNumber;
      minBasset2RewardsPrice: BigNumber;
      bAsset: string;
      uniswapPath: string;
    }
  >;

  nexus(overrides?: CallOverrides): Promise<string>;

  notifyRedistributionAmount(
    _mAsset: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMassetConfig(
    _mAsset: string,
    _bAsset: string,
    _minMasset2BassetPrice: BigNumberish,
    _minBasset2RewardsPrice: BigNumberish,
    _uniswapPath: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingDialIds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    CONFIG_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSIONS_CONTROLLER(overrides?: CallOverrides): Promise<string>;

    REWARDS_TOKEN(overrides?: CallOverrides): Promise<string>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;

    addStakingContract(
      _stakingDialId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyBackRewards(
      _mAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    donateRewards(overrides?: CallOverrides): Promise<void>;

    initialize(
      _stakingDialIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    massetConfig(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string] & {
        minMasset2BassetPrice: BigNumber;
        minBasset2RewardsPrice: BigNumber;
        bAsset: string;
        uniswapPath: string;
      }
    >;

    nexus(overrides?: CallOverrides): Promise<string>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMassetConfig(
      _mAsset: string,
      _bAsset: string,
      _minMasset2BassetPrice: BigNumberish,
      _minBasset2RewardsPrice: BigNumberish,
      _uniswapPath: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingDialIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    AddedMassetConfig(
      mAsset?: string | null,
      bAsset?: string | null,
      minMasset2BassetPrice?: null,
      minBasset2RewardsPrice?: null,
      uniswapPath?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string],
      {
        mAsset: string;
        bAsset: string;
        minMasset2BassetPrice: BigNumber;
        minBasset2RewardsPrice: BigNumber;
        uniswapPath: string;
      }
    >;

    AddedStakingContract(
      stakingDialId?: null
    ): TypedEventFilter<[number], { stakingDialId: number }>;

    BuyBackRewards(
      mAsset?: string | null,
      mAssetAmount?: null,
      bAssetAmount?: null,
      rewardsAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        mAsset: string;
        mAssetAmount: BigNumber;
        bAssetAmount: BigNumber;
        rewardsAmount: BigNumber;
      }
    >;

    DonatedRewards(
      totalRewards?: null
    ): TypedEventFilter<[BigNumber], { totalRewards: BigNumber }>;

    RevenueReceived(
      mAsset?: string | null,
      amountIn?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { mAsset: string; amountIn: BigNumber }
    >;
  };

  estimateGas: {
    CONFIG_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSIONS_CONTROLLER(overrides?: CallOverrides): Promise<BigNumber>;

    REWARDS_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    addStakingContract(
      _stakingDialId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyBackRewards(
      _mAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    donateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _stakingDialIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    massetConfig(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMassetConfig(
      _mAsset: string,
      _bAsset: string,
      _minMasset2BassetPrice: BigNumberish,
      _minBasset2RewardsPrice: BigNumberish,
      _uniswapPath: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingDialIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONFIG_SCALE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMISSIONS_CONTROLLER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARDS_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addStakingContract(
      _stakingDialId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyBackRewards(
      _mAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToPool(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    donateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _stakingDialIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    massetConfig(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRedistributionAmount(
      _mAsset: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMassetConfig(
      _mAsset: string,
      _bAsset: string,
      _minMasset2BassetPrice: BigNumberish,
      _minBasset2RewardsPrice: BigNumberish,
      _uniswapPath: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingDialIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
