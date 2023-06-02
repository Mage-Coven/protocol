/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockSavingsContract,
  MockSavingsContractInterface,
} from "../MockSavingsContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_initialRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialMint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creditsRedeemed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "savingsCredited",
        type: "uint256",
      },
    ],
    name: "CreditsRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isCreditAmt",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_output",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "redeemAndUnwrap",
    outputs: [
      {
        internalType: "uint256",
        name: "creditsBurned",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "massetRedeemed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputQuantity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200153a3803806200153a833981016040819052620000349162000328565b8551869086906200004d906003906020850190620001ae565b50805162000063906004906020840190620001ae565b50506005805460ff191660ff87169081179091556200009e915084906200008c90600a6200043d565b62000098908562000508565b620000c6565b60601b6001600160601b031916608052505067016345785d8a00006006555062000593915050565b6001600160a01b038216620001215760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001359190620003d9565b90915550506001600160a01b0382166000908152602081905260408120805483929062000164908490620003d9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001bc906200052a565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b80516001600160a01b03811681146200026c57600080fd5b919050565b600082601f8301126200028357600080fd5b81516001600160401b0380821115620002a057620002a06200057d565b604051601f8301601f19908116603f01168101908282118183101715620002cb57620002cb6200057d565b81604052838152602092508683858801011115620002e857600080fd5b600091505b838210156200030c5785820183015181830184015290820190620002ed565b838211156200031e5760008385830101525b9695505050505050565b60008060008060008060c087890312156200034257600080fd5b86516001600160401b03808211156200035a57600080fd5b620003688a838b0162000271565b975060208901519150808211156200037f57600080fd5b506200038e89828a0162000271565b955050604087015160ff81168114620003a657600080fd5b9350620003b66060880162000254565b925060808701519150620003cd60a0880162000254565b90509295509295509295565b60008219821115620003ef57620003ef62000567565b500190565b600181815b808511156200043557816000190482111562000419576200041962000567565b808516156200042757918102915b93841c9390800290620003f9565b509250929050565b60006200044b838362000452565b9392505050565b600082620004635750600162000502565b81620004725750600062000502565b81600181146200048b57600281146200049657620004b6565b600191505062000502565b60ff841115620004aa57620004aa62000567565b50506001821b62000502565b5060208310610133831016604e8410600b8410161715620004db575081810a62000502565b620004e78383620003f4565b8060001904821115620004fe57620004fe62000567565b0290505b92915050565b600081600019048311821515161562000525576200052562000567565b500290565b600181811c908216806200053f57607f821691505b602082108114156200056157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c610f81620005b96000396000818161018b01526109d40152610f816000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636f307dc31161008c578063a457c2d711610066578063a457c2d7146101f6578063a9059cbb14610209578063dd62ed3e1461021c578063f25816b51461025557600080fd5b80636f307dc31461018657806370a08231146101c557806395d89b41146101ee57600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a5780633ba0b9a91461017d57600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610283565b6040516101049190610e24565b60405180910390f35b61012061011b366004610d5f565b610315565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610d23565b61032b565b60055460405160ff9091168152602001610104565b610120610178366004610d5f565b6103da565b61013460065481565b6101ad7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610104565b6101346101d3366004610cd5565b6001600160a01b031660009081526020819052604090205490565b6100f7610416565b610120610204366004610d5f565b610425565b610120610217366004610d5f565b6104be565b61013461022a366004610cf0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610268610263366004610da6565b6104cb565b60408051938452602084019290925290820152606001610104565b60606003805461029290610ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90610ee9565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b5050505050905090565b600061032233848461067f565b50600192915050565b60006103388484846107a3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103c25760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103cf853385840361067f565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610322918590610411908690610e79565b61067f565b60606004805461029290610ee9565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104a75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b9565b6104b4338585840361067f565b5060019392505050565b60006103223384846107a3565b6000806000808a1161051f5760405162461bcd60e51b815260206004820152601760248201527f4d75737420776974686472617720736f6d657468696e6700000000000000000060448201526064016103b9565b6001600160a01b03871661056e5760405162461bcd60e51b81526020600482015260166024820152754f75747075742061646472657373206973207a65726f60501b60448201526064016103b9565b6001600160a01b0386166105c45760405162461bcd60e51b815260206004820152601b60248201527f42656e65666963696172792061646472657373206973207a65726f000000000060448201526064016103b9565b6001600160a01b0385166106135760405162461bcd60e51b8152602060048201526016602482015275526f757465722061646472657373206973207a65726f60501b60448201526064016103b9565b61061f8a8a6000610972565b90935091508861063157898214610635565b8983145b6106725760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081bdd5d1c1d5d60921b60448201526064016103b9565b9750975097945050505050565b6001600160a01b0383166106e15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b9565b6001600160a01b0382166107425760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b9565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166108075760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b9565b6001600160a01b0382166108695760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b9565b6001600160a01b038316600090815260208190526040902054818110156108e15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b9565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610918908490610e79565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161096491815260200190565b60405180910390a350505050565b600080600080600086156109965787925061098c88610adf565b90925090506109a8565b8791506109a288610af6565b90935090505b6109b23384610b11565b8515610a975760405163a9059cbb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610a2057600080fd5b505af1158015610a34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a589190610d89565b610a975760405162461bcd60e51b815260206004820152601060248201526f4d7573742073656e6420746f6b656e7360801b60448201526064016103b9565b604080518481526020810184905233917fa4feb388d266c39bec6f79f16c3a7dba32e12d9688ddbb14493d46ce4c1ce657910160405180910390a25090969095509350505050565b600654600090610aef8382610c5f565b9150915091565b600654600090610b068382610c7b565b610aef906001610e79565b6001600160a01b038216610b715760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b9565b6001600160a01b03821660009081526020819052604090205481811015610be55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b9565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c14908490610ed2565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6000610c748383670de0b6b3a7640000610c9a565b9392505050565b600081610c90670de0b6b3a764000085610eb3565b610c749190610e91565b600081610ca78486610eb3565b610cb19190610e91565b949350505050565b80356001600160a01b0381168114610cd057600080fd5b919050565b600060208284031215610ce757600080fd5b610c7482610cb9565b60008060408385031215610d0357600080fd5b610d0c83610cb9565b9150610d1a60208401610cb9565b90509250929050565b600080600060608486031215610d3857600080fd5b610d4184610cb9565b9250610d4f60208501610cb9565b9150604084013590509250925092565b60008060408385031215610d7257600080fd5b610d7b83610cb9565b946020939093013593505050565b600060208284031215610d9b57600080fd5b8151610c7481610f3a565b600080600080600080600060e0888a031215610dc157600080fd5b873596506020880135610dd381610f3a565b955060408801359450610de860608901610cb9565b9350610df660808901610cb9565b9250610e0460a08901610cb9565b915060c0880135610e1481610f3a565b8091505092959891949750929550565b600060208083528351808285015260005b81811015610e5157858101830151858201604001528201610e35565b81811115610e63576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610e8c57610e8c610f24565b500190565b600082610eae57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610ecd57610ecd610f24565b500290565b600082821015610ee457610ee4610f24565b500390565b600181811c90821680610efd57607f821691505b60208210811415610f1e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8015158114610f4857600080fd5b5056fea264697066735822122068fb6657919e7323ea2a57b2f775c3d1f92c091f868c6440636fc4e9c9d7ac5a64736f6c63430008060033";

export class MockSavingsContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    _underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockSavingsContract> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      _underlying,
      overrides || {}
    ) as Promise<MockSavingsContract>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    _underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      _underlying,
      overrides || {}
    );
  }
  attach(address: string): MockSavingsContract {
    return super.attach(address) as MockSavingsContract;
  }
  connect(signer: Signer): MockSavingsContract__factory {
    return super.connect(signer) as MockSavingsContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockSavingsContractInterface {
    return new utils.Interface(_abi) as MockSavingsContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockSavingsContract {
    return new Contract(address, _abi, signerOrProvider) as MockSavingsContract;
  }
}
