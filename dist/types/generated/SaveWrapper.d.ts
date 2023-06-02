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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SaveWrapperInterface extends ethers.utils.Interface {
  functions: {
    "approve(address[],address)": FunctionFragment;
    "estimate_saveViaUniswapETH(address,address,uint256,address[])": FunctionFragment;
    "nexus()": FunctionFragment;
    "saveAndStake(address,address,address,uint256)": FunctionFragment;
    "saveViaMint(address,address,address,address,uint256,uint256,bool)": FunctionFragment;
    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)": FunctionFragment;
    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "estimate_saveViaUniswapETH",
    values: [string, string, BigNumberish, string[]]
  ): string;
  encodeFunctionData(functionFragment: "nexus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "saveAndStake",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "saveViaMint",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "saveViaSwap",
    values: [
      string,
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "saveViaUniswapETH",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      string[],
      BigNumberish,
      boolean,
      string
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimate_saveViaUniswapETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nexus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "saveAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveViaMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveViaSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveViaUniswapETH",
    data: BytesLike
  ): Result;

  events: {};
}

export class SaveWrapper extends BaseContract {
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

  interface: SaveWrapperInterface;

  functions: {
    "approve(address[],address)"(
      _tokens: string[],
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(address,address)"(
      _token: string,
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(address,address[],address[],address[],address,address)"(
      _mAsset: string,
      _bAssets: string[],
      _fPools: string[],
      _fAssets: string[],
      _save: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    estimate_saveViaUniswapETH(
      _mAsset: string,
      _uniswap: string,
      _ethAmount: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { out: BigNumber }>;

    nexus(overrides?: CallOverrides): Promise<[string]>;

    "saveAndStake(address,address,address,uint256)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveAndStake(address,address,address,uint256,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "approve(address[],address)"(
    _tokens: string[],
    _spender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(address,address)"(
    _token: string,
    _spender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(address,address[],address[],address[],address,address)"(
    _mAsset: string,
    _bAssets: string[],
    _fPools: string[],
    _fAssets: string[],
    _save: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  estimate_saveViaUniswapETH(
    _mAsset: string,
    _uniswap: string,
    _ethAmount: BigNumberish,
    _path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nexus(overrides?: CallOverrides): Promise<string>;

  "saveAndStake(address,address,address,uint256)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveAndStake(address,address,address,uint256,address)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _amount: BigNumberish,
    _referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaMint(address,address,address,address,uint256,uint256,bool)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _bAsset: string,
    _amount: BigNumberish,
    _minOut: BigNumberish,
    _stake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaMint(address,address,address,address,uint256,uint256,bool,address)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _bAsset: string,
    _amount: BigNumberish,
    _minOut: BigNumberish,
    _stake: boolean,
    _referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _feeder: string,
    _fAsset: string,
    _fAssetQuantity: BigNumberish,
    _minOutputQuantity: BigNumberish,
    _stake: boolean,
    _referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaSwap(address,address,address,address,address,uint256,uint256,bool)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _feeder: string,
    _fAsset: string,
    _fAssetQuantity: BigNumberish,
    _minOutputQuantity: BigNumberish,
    _stake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _uniswap: string,
    _amountOutMin: BigNumberish,
    _path: string[],
    _minOutXZeno: BigNumberish,
    _stake: boolean,
    _referrer: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool)"(
    _mAsset: string,
    _save: string,
    _vault: string,
    _uniswap: string,
    _amountOutMin: BigNumberish,
    _path: string[],
    _minOutXZeno: BigNumberish,
    _stake: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "approve(address[],address)"(
      _tokens: string[],
      _spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "approve(address,address)"(
      _token: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "approve(address,address[],address[],address[],address,address)"(
      _mAsset: string,
      _bAssets: string[],
      _fPools: string[],
      _fAssets: string[],
      _save: string,
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    estimate_saveViaUniswapETH(
      _mAsset: string,
      _uniswap: string,
      _ethAmount: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<string>;

    "saveAndStake(address,address,address,uint256)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveAndStake(address,address,address,uint256,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    "approve(address[],address)"(
      _tokens: string[],
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(address,address)"(
      _token: string,
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(address,address[],address[],address[],address,address)"(
      _mAsset: string,
      _bAssets: string[],
      _fPools: string[],
      _fAssets: string[],
      _save: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    estimate_saveViaUniswapETH(
      _mAsset: string,
      _uniswap: string,
      _ethAmount: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nexus(overrides?: CallOverrides): Promise<BigNumber>;

    "saveAndStake(address,address,address,uint256)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveAndStake(address,address,address,uint256,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "approve(address[],address)"(
      _tokens: string[],
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,address)"(
      _token: string,
      _spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,address[],address[],address[],address,address)"(
      _mAsset: string,
      _bAssets: string[],
      _fPools: string[],
      _fAssets: string[],
      _save: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    estimate_saveViaUniswapETH(
      _mAsset: string,
      _uniswap: string,
      _ethAmount: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "saveAndStake(address,address,address,uint256)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveAndStake(address,address,address,uint256,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaMint(address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _bAsset: string,
      _amount: BigNumberish,
      _minOut: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaSwap(address,address,address,address,address,uint256,uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _feeder: string,
      _fAsset: string,
      _fAssetQuantity: BigNumberish,
      _minOutputQuantity: BigNumberish,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool,address)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      _referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "saveViaUniswapETH(address,address,address,address,uint256,address[],uint256,bool)"(
      _mAsset: string,
      _save: string,
      _vault: string,
      _uniswap: string,
      _amountOutMin: BigNumberish,
      _path: string[],
      _minOutXZeno: BigNumberish,
      _stake: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}