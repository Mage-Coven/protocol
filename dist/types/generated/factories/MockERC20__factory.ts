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
import type { MockERC20, MockERC20Interface } from "../MockERC20";

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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e3238038062000e328339810160408190526200003491620002ee565b8451859085906200004d90600390602085019062000191565b5080516200006390600490602084019062000191565b50506005805460ff191660ff86169081179091556200009e915083906200008c90600a62000402565b620000989084620004cd565b620000a9565b505050505062000558565b6001600160a01b038216620001045760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200011891906200039e565b90915550506001600160a01b03821660009081526020819052604081208054839290620001479084906200039e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200019f90620004ef565b90600052602060002090601f016020900481019282620001c357600085556200020e565b82601f10620001de57805160ff19168380011785556200020e565b828001600101855582156200020e579182015b828111156200020e578251825591602001919060010190620001f1565b506200021c92915062000220565b5090565b5b808211156200021c576000815560010162000221565b600082601f8301126200024957600080fd5b81516001600160401b038082111562000266576200026662000542565b604051601f8301601f19908116603f0116810190828211818310171562000291576200029162000542565b81604052838152602092508683858801011115620002ae57600080fd5b600091505b83821015620002d25785820183015181830184015290820190620002b3565b83821115620002e45760008385830101525b9695505050505050565b600080600080600060a086880312156200030757600080fd5b85516001600160401b03808211156200031f57600080fd5b6200032d89838a0162000237565b965060208801519150808211156200034457600080fd5b50620003538882890162000237565b945050604086015160ff811681146200036b57600080fd5b60608701519093506001600160a01b03811681146200038957600080fd5b80925050608086015190509295509295909350565b60008219821115620003b457620003b46200052c565b500190565b600181815b80851115620003fa578160001904821115620003de57620003de6200052c565b80851615620003ec57918102915b93841c9390800290620003be565b509250929050565b600062000410838362000417565b9392505050565b6000826200042857506001620004c7565b816200043757506000620004c7565b81600181146200045057600281146200045b576200047b565b6001915050620004c7565b60ff8411156200046f576200046f6200052c565b50506001821b620004c7565b5060208310610133831016604e8410600b8410161715620004a0575081810a620004c7565b620004ac8383620003b9565b8060001904821115620004c357620004c36200052c565b0290505b92915050565b6000816000190483118215151615620004ea57620004ea6200052c565b500290565b600181811c908216806200050457607f821691505b602082108114156200052657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6108ca80620005686000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101cc565b6040516100c391906107de565b60405180910390f35b6100df6100da3660046107b4565b61025e565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610778565b610274565b60055460405160ff90911681526020016100c3565b6100df6101373660046107b4565b610323565b6100f361014a366004610723565b6001600160a01b031660009081526020819052604090205490565b6100b661035f565b6100df61017b3660046107b4565b61036e565b6100df61018e3660046107b4565b610407565b6100f36101a1366004610745565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101db90610859565b80601f016020809104026020016040519081016040528092919081815260200182805461020790610859565b80156102545780601f1061022957610100808354040283529160200191610254565b820191906000526020600020905b81548152906001019060200180831161023757829003601f168201915b5050505050905090565b600061026b338484610414565b50600192915050565b6000610281848484610538565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561030b5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103188533858403610414565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161026b91859061035a908690610833565b610414565b6060600480546101db90610859565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103f05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610302565b6103fd3385858403610414565b5060019392505050565b600061026b338484610538565b6001600160a01b0383166104765760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610302565b6001600160a01b0382166104d75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610302565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661059c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610302565b6001600160a01b0382166105fe5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610302565b6001600160a01b038316600090815260208190526040902054818110156106765760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610302565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106ad908490610833565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106f991815260200190565b60405180910390a350505050565b80356001600160a01b038116811461071e57600080fd5b919050565b60006020828403121561073557600080fd5b61073e82610707565b9392505050565b6000806040838503121561075857600080fd5b61076183610707565b915061076f60208401610707565b90509250929050565b60008060006060848603121561078d57600080fd5b61079684610707565b92506107a460208501610707565b9150604084013590509250925092565b600080604083850312156107c757600080fd5b6107d083610707565b946020939093013593505050565b600060208083528351808285015260005b8181101561080b578581018301518582016040015282016107ef565b8181111561081d576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561085457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061086d57607f821691505b6020821081141561088e57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212206d4b5bddaec26c76e96a30ec5007dc9e19b5aef9d3fd84901ac57a29950eac5864736f6c63430008060033";

export class MockERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      overrides || {}
    );
  }
  attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
