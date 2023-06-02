/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Unwrapper, UnwrapperInterface } from "../Unwrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_spenders",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_input",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_inputIsCredit",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_output",
        type: "address",
      },
    ],
    name: "getIsBassetOut",
    outputs: [
      {
        internalType: "bool",
        name: "isBassetOut",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isBassetOut",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_input",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_inputIsCredit",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_output",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getUnwrapOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "outputQuantity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nexus",
    outputs: [
      {
        internalType: "contract INexus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isBassetOut",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_input",
        type: "address",
      },
      {
        internalType: "address",
        name: "_output",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "unwrapAndSend",
    outputs: [
      {
        internalType: "uint256",
        name: "outputQuantity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161140d38038061140d83398101604081905261002f916100a0565b806001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b60601b6001600160601b031916608052506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b60805160601c6113196100f460003960008181609c0152610a1f01526113196000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806365dff1e11461005c5780637366626a14610071578063a3f5c1d214610097578063c280cbc1146100d6578063ce7c718a146100e9575b600080fd5b61006f61006a366004610e88565b61010c565b005b61008461007f3660046110b6565b6102c2565b6040519081526020015b60405180910390f35b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161008e565b6100846100e4366004611032565b6104f0565b6100fc6100f7366004610e3d565b6106fb565b604051901515815260200161008e565b610114610866565b8281146101595760405162461bcd60e51b815260206004820152600e60248201526d082e4e4c2f240dad2e6dac2e8c6d60931b60448201526064015b60405180910390fd5b60005b818110156102bb57600083838381811061017857610178611291565b905060200201602081019061018d9190610e03565b6001600160a01b031614156101d45760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b2103a37b5b2b760991b6044820152606401610150565b60008585838181106101e8576101e8611291565b90506020020160208101906101fd9190610e03565b6001600160a01b031614156102455760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b2103937baba32b960911b6044820152606401610150565b6102a985858381811061025a5761025a611291565b905060200201602081019061026f9190610e03565b60001985858581811061028457610284611291565b90506020020160208101906102999190610e03565b6001600160a01b031691906108d0565b806102b381611268565b91505061015c565b5050505050565b600080846102d05782610348565b604051633bc0d82d60e11b8152600481018490526001600160a01b03871690637781b05a9060240160206040518083038186803b15801561031057600080fd5b505afa158015610324573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610348919061112f565b905087156103d757604051633c554c3f60e11b81526001600160a01b038581166004830152602482018390528816906378aa987e9060440160206040518083038186803b15801561039857600080fd5b505afa1580156103ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d0919061112f565b91506104e5565b6000856103e45786610455565b866001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561041d57600080fd5b505afa158015610431573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104559190610e20565b604051633975483b60e11b81526001600160a01b038083166004830152878116602483015260448201859052919250908916906372ea90769060640160206040518083038186803b1580156104a957600080fd5b505afa1580156104bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e1919061112f565b9250505b509695505050505050565b6040516323b872dd60e01b8152336004820152306024820152604481018490526000906001600160a01b038716906323b872dd90606401602060405180830381600087803b15801561054157600080fd5b505af1158015610555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105799190611015565b6105b65760405162461bcd60e51b815260206004820152600e60248201526d151c985b9cd9995c881a5b9c1d5d60921b6044820152606401610150565b8715610654576040516321de7d5b60e11b81526001600160a01b038681166004830152602482018690526044820185905283811660648301528816906343bcfab690608401602060405180830381600087803b15801561061557600080fd5b505af1158015610629573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064d919061112f565b90506106f0565b60405163d5bcb9b560e01b81526001600160a01b03878116600483015286811660248301526044820186905260648201859052838116608483015288169063d5bcb9b59060a401602060405180830381600087803b1580156106b557600080fd5b505af11580156106c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ed919061112f565b90505b979650505050505050565b60008083610709578461077a565b846001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561074257600080fd5b505afa158015610756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a9190610e20565b90506000816001600160a01b0316631d3ce3986040518163ffffffff1660e01b815260040160006040518083038186803b1580156107b757600080fd5b505afa1580156107cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107f39190810190610ef4565b50905060005b815181101561085757846001600160a01b031682828151811061081e5761081e611291565b6020026020010151600001516001600160a01b03161415610845576001935050505061085f565b8061084f81611268565b9150506107f9565b506000925050505b9392505050565b61086e610a1b565b6001600160a01b0316336001600160a01b0316146108ce5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610150565b565b8015806109595750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561091f57600080fd5b505afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610957919061112f565b155b6109c45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610150565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610a16908490610ab3565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7657600080fd5b505afa158015610a8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aae9190610e20565b905090565b6000610b08826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610b859092919063ffffffff16565b805190915015610a165780806020019051810190610b269190611015565b610a165760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610150565b6060610b948484600085610b9c565b949350505050565b606082471015610bfd5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610150565b843b610c4b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610150565b600080866001600160a01b03168587604051610c679190611148565b60006040518083038185875af1925050503d8060008114610ca4576040519150601f19603f3d011682016040523d82523d6000602084013e610ca9565b606091505b50915091506106f082828660608315610cc357508161085f565b825115610cd35782518084602001fd5b8160405162461bcd60e51b81526004016101509190611164565b60008083601f840112610cff57600080fd5b50813567ffffffffffffffff811115610d1757600080fd5b6020830191508360208260051b8501011115610d3257600080fd5b9250929050565b600082601f830112610d4a57600080fd5b81516020610d5f610d5a83611214565b6111e3565b80838252828201915082860187848660061b8901011115610d7f57600080fd5b6000805b86811015610dd057604080848c031215610d9b578283fd5b610da3611197565b610dac85610dde565b8152610db9888601610dde565b818901528652948601949290920191600101610d83565b509198975050505050505050565b80516fffffffffffffffffffffffffffffffff81168114610dfe57600080fd5b919050565b600060208284031215610e1557600080fd5b813561085f816112bd565b600060208284031215610e3257600080fd5b815161085f816112bd565b600080600060608486031215610e5257600080fd5b8335610e5d816112bd565b92506020840135610e6d816112d5565b91506040840135610e7d816112bd565b809150509250925092565b60008060008060408587031215610e9e57600080fd5b843567ffffffffffffffff80821115610eb657600080fd5b610ec288838901610ced565b90965094506020870135915080821115610edb57600080fd5b50610ee887828801610ced565b95989497509550505050565b6000806040808486031215610f0857600080fd5b835167ffffffffffffffff80821115610f2057600080fd5b818601915086601f830112610f3457600080fd5b81516020610f44610d5a83611214565b8083825282820191508286018b848660071b8901011115610f6457600080fd5b600096505b84871015610fe357608080828e031215610f8257600080fd5b610f8a6111c0565b8251610f95816112bd565b815282860151610fa4816112bd565b81870152828a0151610fb5816112d5565b818b015260608381015160088110610fcc57600080fd5b908201528452600197909701969284019201610f69565b5091890151919750909450505080831115610ffd57600080fd5b505061100b85828601610d39565b9150509250929050565b60006020828403121561102757600080fd5b815161085f816112d5565b600080600080600080600060e0888a03121561104d57600080fd5b8735611058816112d5565b96506020880135611068816112bd565b95506040880135611078816112bd565b94506060880135611088816112bd565b93506080880135925060a0880135915060c08801356110a6816112bd565b8091505092959891949750929550565b60008060008060008060c087890312156110cf57600080fd5b86356110da816112d5565b955060208701356110ea816112bd565b945060408701356110fa816112bd565b9350606087013561110a816112d5565b9250608087013561111a816112bd565b8092505060a087013590509295509295509295565b60006020828403121561114157600080fd5b5051919050565b6000825161115a818460208701611238565b9190910192915050565b6020815260008251806020840152611183816040850160208701611238565b601f01601f19169190910160400192915050565b6040805190810167ffffffffffffffff811182821017156111ba576111ba6112a7565b60405290565b6040516080810167ffffffffffffffff811182821017156111ba576111ba6112a7565b604051601f8201601f1916810167ffffffffffffffff8111828210171561120c5761120c6112a7565b604052919050565b600067ffffffffffffffff82111561122e5761122e6112a7565b5060051b60200190565b60005b8381101561125357818101518382015260200161123b565b83811115611262576000848401525b50505050565b600060001982141561128a57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146112d257600080fd5b50565b80151581146112d257600080fdfea26469706673582212202aa3beb4aa1a83410e9109e4477bc4e5e3c050b5f75d336048dfa95370cb20b064736f6c63430008060033";

export class Unwrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Unwrapper> {
    return super.deploy(_nexus, overrides || {}) as Promise<Unwrapper>;
  }
  getDeployTransaction(
    _nexus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nexus, overrides || {});
  }
  attach(address: string): Unwrapper {
    return super.attach(address) as Unwrapper;
  }
  connect(signer: Signer): Unwrapper__factory {
    return super.connect(signer) as Unwrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnwrapperInterface {
    return new utils.Interface(_abi) as UnwrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Unwrapper {
    return new Contract(address, _abi, signerOrProvider) as Unwrapper;
  }
}
