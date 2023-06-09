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

interface IUnwrapperInterface extends ethers.utils.Interface {
  functions: {
    "getIsBassetOut(address,bool,address)": FunctionFragment;
    "getUnwrapOutput(bool,address,address,bool,address,uint256)": FunctionFragment;
    "unwrapAndSend(bool,address,address,address,uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getIsBassetOut",
    values: [string, boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnwrapOutput",
    values: [boolean, string, string, boolean, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapAndSend",
    values: [
      boolean,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getIsBassetOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnwrapOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapAndSend",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUnwrapper extends BaseContract {
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

  interface: IUnwrapperInterface;

  functions: {
    getIsBassetOut(
      _masset: string,
      _inputIsCredit: boolean,
      _output: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isBassetOut: boolean }>;

    getUnwrapOutput(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _inputIsCredit: boolean,
      _output: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { output: BigNumber }>;

    unwrapAndSend(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _output: string,
      _amount: BigNumberish,
      _minAmountOut: BigNumberish,
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getIsBassetOut(
    _masset: string,
    _inputIsCredit: boolean,
    _output: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getUnwrapOutput(
    _isBassetOut: boolean,
    _router: string,
    _input: string,
    _inputIsCredit: boolean,
    _output: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unwrapAndSend(
    _isBassetOut: boolean,
    _router: string,
    _input: string,
    _output: string,
    _amount: BigNumberish,
    _minAmountOut: BigNumberish,
    _beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getIsBassetOut(
      _masset: string,
      _inputIsCredit: boolean,
      _output: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getUnwrapOutput(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _inputIsCredit: boolean,
      _output: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unwrapAndSend(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _output: string,
      _amount: BigNumberish,
      _minAmountOut: BigNumberish,
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getIsBassetOut(
      _masset: string,
      _inputIsCredit: boolean,
      _output: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnwrapOutput(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _inputIsCredit: boolean,
      _output: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unwrapAndSend(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _output: string,
      _amount: BigNumberish,
      _minAmountOut: BigNumberish,
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getIsBassetOut(
      _masset: string,
      _inputIsCredit: boolean,
      _output: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnwrapOutput(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _inputIsCredit: boolean,
      _output: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unwrapAndSend(
      _isBassetOut: boolean,
      _router: string,
      _input: string,
      _output: string,
      _amount: BigNumberish,
      _minAmountOut: BigNumberish,
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
