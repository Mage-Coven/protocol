/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExposedFeederLogic,
  ExposedFeederLogicInterface,
} from "../ExposedFeederLogic";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "ratio",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vaultBalance",
            type: "uint128",
          },
        ],
        internalType: "struct BassetData[]",
        name: "_bAssets",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_rawInput",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "min",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "max",
                type: "uint128",
              },
            ],
            internalType: "struct WeightLimits",
            name: "limits",
            type: "tuple",
          },
        ],
        internalType: "struct FeederConfig",
        name: "_config",
        type: "tuple",
      },
    ],
    name: "computeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "ratio",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vaultBalance",
            type: "uint128",
          },
        ],
        internalType: "struct BassetData[]",
        name: "_bAssets",
        type: "tuple[]",
      },
      {
        internalType: "uint8[]",
        name: "_indices",
        type: "uint8[]",
      },
      {
        internalType: "uint256[]",
        name: "_rawInputs",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "min",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "max",
                type: "uint128",
              },
            ],
            internalType: "struct WeightLimits",
            name: "limits",
            type: "tuple",
          },
        ],
        internalType: "struct FeederConfig",
        name: "_config",
        type: "tuple",
      },
    ],
    name: "computeMintMulti",
    outputs: [
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "ratio",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vaultBalance",
            type: "uint128",
          },
        ],
        internalType: "struct BassetData[]",
        name: "_bAssets",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "_o",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_netMassetQuantity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "min",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "max",
                type: "uint128",
              },
            ],
            internalType: "struct WeightLimits",
            name: "limits",
            type: "tuple",
          },
        ],
        internalType: "struct FeederConfig",
        name: "_config",
        type: "tuple",
      },
    ],
    name: "computeRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "rawOutputUnits",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "ratio",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vaultBalance",
            type: "uint128",
          },
        ],
        internalType: "struct BassetData[]",
        name: "_bAssets",
        type: "tuple[]",
      },
      {
        internalType: "uint8[]",
        name: "_indices",
        type: "uint8[]",
      },
      {
        internalType: "uint256[]",
        name: "_rawOutputs",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "min",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "max",
                type: "uint128",
              },
            ],
            internalType: "struct WeightLimits",
            name: "limits",
            type: "tuple",
          },
        ],
        internalType: "struct FeederConfig",
        name: "_config",
        type: "tuple",
      },
    ],
    name: "computeRedeemExact",
    outputs: [
      {
        internalType: "uint256",
        name: "totalmAssets",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "ratio",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vaultBalance",
            type: "uint128",
          },
        ],
        internalType: "struct BassetData[]",
        name: "_bAssets",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_o",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_rawInput",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeRate",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "min",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "max",
                type: "uint128",
              },
            ],
            internalType: "struct WeightLimits",
            name: "limits",
            type: "tuple",
          },
        ],
        internalType: "struct FeederConfig",
        name: "_config",
        type: "tuple",
      },
    ],
    name: "computeSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "bAssetOutputQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledSwapFee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610912806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80637a7dbb181461005c578063a55891ac14610082578063d9880dc1146100aa578063e80f8a72146100bd578063ee2b6f03146100d0575b600080fd5b61006f61006a3660046104aa565b6100e3565b6040519081526020015b60405180910390f35b610095610090366004610604565b61017c565b60408051928352602083019190915201610079565b61006f6100b83660046104aa565b61021e565b61006f6100cb3660046105a6565b61025e565b61006f6100de3660046105a6565b61029e565b604051630e22dd0360e31b815260009073__$7791d1d5b7ea16da359ce352a2ac3a881c$__90637116e8189061012390889088908890889060040161075a565b60206040518083038186803b15801561013b57600080fd5b505af415801561014f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101739190610687565b95945050505050565b60008073__$7791d1d5b7ea16da359ce352a2ac3a881c$__63dce9bf6a8989898989896040518763ffffffff1660e01b81526004016101c096959493929190610824565b604080518083038186803b1580156101d757600080fd5b505af41580156101eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020f91906106a0565b91509150965096945050505050565b6040516301f3723960e61b815260009073__$7791d1d5b7ea16da359ce352a2ac3a881c$__90637cdc8e409061012390889088908890889060040161075a565b604051639e60b1c560e01b815260009073__$7791d1d5b7ea16da359ce352a2ac3a881c$__90639e60b1c5906101239088908890889088906004016107f3565b604051631a37caa560e31b815260009073__$7791d1d5b7ea16da359ce352a2ac3a881c$__9063d1be5528906101239088908890889088906004016107f3565b600082601f8301126102ef57600080fd5b813560206103046102ff836108a2565b610871565b80838252828201915082860187848660061b890101111561032457600080fd5b60005b8581101561034e5761033989836103bb565b84529284019260409190910190600101610327565b5090979650505050505050565b600082601f83011261036c57600080fd5b8135602061037c6102ff836108a2565b80838252828201915082860187848660051b890101111561039c57600080fd5b60005b8581101561034e5781358452928401929084019060010161039f565b6000604082840312156103cd57600080fd5b6040516040810181811067ffffffffffffffff821117156103f0576103f06108c6565b6040529050806103ff8361047d565b815261040d6020840161047d565b60208201525092915050565b60006080828403121561042b57600080fd5b6040516060810181811067ffffffffffffffff8211171561044e5761044e6108c6565b8060405250809150823581526020830135602082015261047184604085016103bb565b60408201525092915050565b80356001600160801b038116811461049457600080fd5b919050565b803560ff8116811461049457600080fd5b60008060008060e085870312156104c057600080fd5b843567ffffffffffffffff808211156104d857600080fd5b6104e4888389016102de565b95506020915081870135818111156104fb57600080fd5b8701601f8101891361050c57600080fd5b803561051a6102ff826108a2565b8082825285820191508584018c878560051b870101111561053a57600080fd5b600094505b838510156105645761055081610499565b83526001949094019391860191860161053f565b509750505050604087013591508082111561057e57600080fd5b5061058b8782880161035b565b92505061059b8660608701610419565b905092959194509250565b60008060008060e085870312156105bc57600080fd5b843567ffffffffffffffff8111156105d357600080fd5b6105df878288016102de565b9450506105ee60208601610499565b92506040850135915061059b8660608701610419565b600080600080600080610120878903121561061e57600080fd5b863567ffffffffffffffff81111561063557600080fd5b61064189828a016102de565b96505061065060208801610499565b945061065e60408801610499565b9350606087013592506080870135915061067b8860a08901610419565b90509295509295509295565b60006020828403121561069957600080fd5b5051919050565b600080604083850312156106b357600080fd5b505080516020909101519092909150565b600081518084526020808501945080840160005b838110156107145761070187835180516001600160801b03908116835260209182015116910152565b60409690960195908201906001016106d8565b509495945050505050565b80518252602081015160208301526040810151610755604084018280516001600160801b03908116835260209182015116910152565b505050565b60e08152600061076d60e08301876106c4565b82810360208481019190915286518083528782019282019060005b818110156107a757845160ff1683529383019391830191600101610788565b50508481036040860152865180825290820192508187019060005b818110156107de578251855293830193918301916001016107c2565b5050505080915050610173606083018461071f565b60e08152600061080660e08301876106c4565b905060ff85166020830152836040830152610173606083018461071f565b60006101208083526108388184018a6106c4565b91505060ff8716602083015260ff8616604083015284606083015283608083015261086660a083018461071f565b979650505050505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561089a5761089a6108c6565b604052919050565b600067ffffffffffffffff8211156108bc576108bc6108c6565b5060051b60200190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220358cedd75e52afb0b95374317cb3eaf5f3a7b75da9b74240bef60e3c2659c89664736f6c63430008060033";

export class ExposedFeederLogic__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ExposedFeederLogicLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      ExposedFeederLogic__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: ExposedFeederLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$7791d1d5b7ea16da359ce352a2ac3a881c\\$__", "g"),
      linkLibraryAddresses["contracts/feeders/FeederLogic.sol:FeederLogic"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExposedFeederLogic> {
    return super.deploy(overrides || {}) as Promise<ExposedFeederLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExposedFeederLogic {
    return super.attach(address) as ExposedFeederLogic;
  }
  connect(signer: Signer): ExposedFeederLogic__factory {
    return super.connect(signer) as ExposedFeederLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExposedFeederLogicInterface {
    return new utils.Interface(_abi) as ExposedFeederLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExposedFeederLogic {
    return new Contract(address, _abi, signerOrProvider) as ExposedFeederLogic;
  }
}

export interface ExposedFeederLogicLibraryAddresses {
  ["contracts/feeders/FeederLogic.sol:FeederLogic"]: string;
}
