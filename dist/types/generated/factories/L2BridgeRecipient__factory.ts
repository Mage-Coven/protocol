/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  L2BridgeRecipient,
  L2BridgeRecipientInterface,
} from "../L2BridgeRecipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2EmissionsController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "L2_EMISSIONS_CONTROLLER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARDS_TOKEN",
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
  "0x60c06040523480156200001157600080fd5b5060405162000b6d38038062000b6d833981016040819052620000349162000516565b6001600160a01b038216620000905760405162461bcd60e51b815260206004820152601560248201527f496e76616c6964205265776172647320746f6b656e000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000e85760405162461bcd60e51b815260206004820152601c60248201527f496e76616c696420456d697373696f6e7320436f6e74726f6c6c657200000000604482015260640162000087565b606082811b6001600160601b03199081166080529082901b1660a052620001286001600160a01b0383168260001962000130602090811b620000a517901c565b505062000612565b801580620001be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200018157600080fd5b505afa15801562000196573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bc919062000572565b155b620002325760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000087565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200028a9185916200028f16565b505050565b6000620002eb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200036d60201b620001f5179092919060201c565b8051909150156200028a57808060200190518101906200030c91906200054e565b6200028a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000087565b60606200037e848460008562000388565b90505b9392505050565b606082471015620003eb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000087565b843b6200043b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000087565b600080866001600160a01b031685876040516200045991906200058c565b60006040518083038185875af1925050503d806000811462000498576040519150601f19603f3d011682016040523d82523d6000602084013e6200049d565b606091505b509092509050620004b0828286620004bb565b979650505050505050565b60608315620004cc57508162000381565b825115620004dd5782518084602001fd5b8160405162461bcd60e51b8152600401620000879190620005aa565b80516001600160a01b03811681146200051157600080fd5b919050565b600080604083850312156200052a57600080fd5b6200053583620004f9565b91506200054560208401620004f9565b90509250929050565b6000602082840312156200056157600080fd5b815180151581146200038157600080fd5b6000602082840312156200058557600080fd5b5051919050565b60008251620005a0818460208701620005df565b9190910192915050565b6020815260008251806020840152620005cb816040850160208701620005df565b601f01601f19169190910160400192915050565b60005b83811015620005fc578181015183820152602001620005e2565b838111156200060c576000848401525b50505050565b60805160601c60a05160601c6105316200063c6000396000608301526000604001526105316000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c56010721461003b578063e0024db51461007e575b600080fd5b6100627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100627f000000000000000000000000000000000000000000000000000000000000000081565b80158061012e5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156100f457600080fd5b505afa158015610108573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012c9190610463565b155b61019e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526101f090849061020e565b505050565b606061020484846000856102e0565b90505b9392505050565b6000610263826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166101f59092919063ffffffff16565b8051909150156101f057808060200190518101906102819190610441565b6101f05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610195565b6060824710156103415760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610195565b843b61038f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610195565b600080866001600160a01b031685876040516103ab919061047c565b60006040518083038185875af1925050503d80600081146103e8576040519150601f19603f3d011682016040523d82523d6000602084013e6103ed565b606091505b50915091506103fd828286610408565b979650505050505050565b60608315610417575081610207565b8251156104275782518084602001fd5b8160405162461bcd60e51b81526004016101959190610498565b60006020828403121561045357600080fd5b8151801515811461020757600080fd5b60006020828403121561047557600080fd5b5051919050565b6000825161048e8184602087016104cb565b9190910192915050565b60208152600082518060208401526104b78160408501602087016104cb565b601f01601f19169190910160400192915050565b60005b838110156104e65781810151838201526020016104ce565b838111156104f5576000848401525b5050505056fea2646970667358221220a040aef5fab906be3c2d35f7cf79f1552a39890d0f1aab0b10b1e72a2c8c900e64736f6c63430008060033";

export class L2BridgeRecipient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardsToken: string,
    _l2EmissionsController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2BridgeRecipient> {
    return super.deploy(
      _rewardsToken,
      _l2EmissionsController,
      overrides || {}
    ) as Promise<L2BridgeRecipient>;
  }
  getDeployTransaction(
    _rewardsToken: string,
    _l2EmissionsController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsToken,
      _l2EmissionsController,
      overrides || {}
    );
  }
  attach(address: string): L2BridgeRecipient {
    return super.attach(address) as L2BridgeRecipient;
  }
  connect(signer: Signer): L2BridgeRecipient__factory {
    return super.connect(signer) as L2BridgeRecipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L2BridgeRecipientInterface {
    return new utils.Interface(_abi) as L2BridgeRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2BridgeRecipient {
    return new Contract(address, _abi, signerOrProvider) as L2BridgeRecipient;
  }
}