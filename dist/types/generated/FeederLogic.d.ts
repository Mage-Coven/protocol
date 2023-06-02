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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface FeederLogicInterface extends ethers.utils.Interface {
  functions: {
    "computeMint(tuple[],uint8,uint256,tuple)": FunctionFragment;
    "computeMintMulti(tuple[],uint8[],uint256[],tuple)": FunctionFragment;
    "computePrice(tuple[],tuple)": FunctionFragment;
    "computeRedeem(tuple[],uint8,uint256,tuple)": FunctionFragment;
    "computeRedeemExact(tuple[],uint8[],uint256[],tuple)": FunctionFragment;
    "computeSwap(tuple[],uint8,uint8,uint256,uint256,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "computeMint",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      BigNumberish,
      BigNumberish,
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeMintMulti",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      BigNumberish[],
      BigNumberish[],
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computePrice",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeRedeem",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      BigNumberish,
      BigNumberish,
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeRedeemExact",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      BigNumberish[],
      BigNumberish[],
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeSwap",
    values: [
      { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeMintMulti",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeRedeemExact",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeSwap",
    data: BytesLike
  ): Result;

  events: {};
}

export class FeederLogic extends BaseContract {
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

  interface: FeederLogicInterface;

  functions: {
    computeMint(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _rawInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mintAmount: BigNumber }>;

    computeMintMulti(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawInputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mintAmount: BigNumber }>;

    computePrice(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; k: BigNumber }>;

    computeRedeem(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _o: BigNumberish,
      _netRedeemInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rawOutputUnits: BigNumber }>;

    computeRedeemExact(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawOutputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { redeemInput: BigNumber }>;

    computeSwap(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _o: BigNumberish,
      _rawInput: BigNumberish,
      _feeRate: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        bAssetOutputQuantity: BigNumber;
        scaledSwapFee: BigNumber;
      }
    >;
  };

  computeMint(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _i: BigNumberish,
    _rawInput: BigNumberish,
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  computeMintMulti(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _indices: BigNumberish[],
    _rawInputs: BigNumberish[],
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  computePrice(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { price: BigNumber; k: BigNumber }>;

  computeRedeem(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _o: BigNumberish,
    _netRedeemInput: BigNumberish,
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  computeRedeemExact(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _indices: BigNumberish[],
    _rawOutputs: BigNumberish[],
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  computeSwap(
    _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
    _i: BigNumberish,
    _o: BigNumberish,
    _rawInput: BigNumberish,
    _feeRate: BigNumberish,
    _config: {
      supply: BigNumberish;
      a: BigNumberish;
      limits: { min: BigNumberish; max: BigNumberish };
    },
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      bAssetOutputQuantity: BigNumber;
      scaledSwapFee: BigNumber;
    }
  >;

  callStatic: {
    computeMint(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _rawInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeMintMulti(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawInputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computePrice(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; k: BigNumber }>;

    computeRedeem(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _o: BigNumberish,
      _netRedeemInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeRedeemExact(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawOutputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeSwap(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _o: BigNumberish,
      _rawInput: BigNumberish,
      _feeRate: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        bAssetOutputQuantity: BigNumber;
        scaledSwapFee: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    computeMint(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _rawInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeMintMulti(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawInputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computePrice(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeRedeem(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _o: BigNumberish,
      _netRedeemInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeRedeemExact(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawOutputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeSwap(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _o: BigNumberish,
      _rawInput: BigNumberish,
      _feeRate: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeMint(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _rawInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeMintMulti(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawInputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computePrice(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeRedeem(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _o: BigNumberish,
      _netRedeemInput: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeRedeemExact(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _indices: BigNumberish[],
      _rawOutputs: BigNumberish[],
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeSwap(
      _bAssets: { ratio: BigNumberish; vaultBalance: BigNumberish }[],
      _i: BigNumberish,
      _o: BigNumberish,
      _rawInput: BigNumberish,
      _feeRate: BigNumberish,
      _config: {
        supply: BigNumberish;
        a: BigNumberish;
        limits: { min: BigNumberish; max: BigNumberish };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
