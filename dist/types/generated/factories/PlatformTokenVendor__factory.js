"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformTokenVendor__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_platformToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "parentStakingContract",
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
        name: "platformToken",
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
    {
        inputs: [],
        name: "reApproveOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162000b7138038062000b718339810160408190526200003491620004af565b33606081811b60a05282901b6001600160601b031916608052620000669082906200006d602090811b6200010617901c565b506200057a565b62000093816000846001600160a01b0316620000be60201b62000135179092919060201c565b620000ba81600019846001600160a01b0316620000be60201b62000135179092919060201c565b5050565b8015806200014c5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200010f57600080fd5b505afa15801562000124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014a9190620004da565b155b620001c45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021c9185916200022116565b505050565b60006200027d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620002ff60201b62000285179092919060201c565b8051909150156200021c57808060200190518101906200029e91906200048b565b6200021c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620001bb565b60606200031084846000856200031a565b90505b9392505050565b6060824710156200037d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620001bb565b843b620003cd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001bb565b600080866001600160a01b03168587604051620003eb9190620004f4565b60006040518083038185875af1925050503d80600081146200042a576040519150601f19603f3d011682016040523d82523d6000602084013e6200042f565b606091505b509092509050620004428282866200044d565b979650505050505050565b606083156200045e57508162000313565b8251156200046f5782518084602001fd5b8160405162461bcd60e51b8152600401620001bb919062000512565b6000602082840312156200049e57600080fd5b815180151581146200031357600080fd5b600060208284031215620004c257600080fd5b81516001600160a01b03811681146200031357600080fd5b600060208284031215620004ed57600080fd5b5051919050565b600082516200050881846020870162000547565b9190910192915050565b60208152600082518060208401526200053381604085016020870162000547565b601f01601f19169190910160400192915050565b60005b83811015620005645781810151838201526020016200054a565b8381111562000574576000848401525b50505050565b60805160601c60a05160601c6105c1620005b060003960008181604b015260e0015260008181608e015260bf01526105c16000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063488a49e314610046578063d1b812cd14610089578063d8245bb9146100b0575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6100b86100ba565b005b6101047f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610106565b565b61011b6001600160a01b038316826000610135565b6101316001600160a01b03831682600019610135565b5050565b8015806101be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc91906104f3565b155b61022e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261028090849061029e565b505050565b60606102948484600085610370565b90505b9392505050565b60006102f3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102859092919063ffffffff16565b805190915015610280578080602001905181019061031191906104d1565b6102805760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610225565b6060824710156103d15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610225565b843b61041f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610225565b600080866001600160a01b0316858760405161043b919061050c565b60006040518083038185875af1925050503d8060008114610478576040519150601f19603f3d011682016040523d82523d6000602084013e61047d565b606091505b509150915061048d828286610498565b979650505050505050565b606083156104a7575081610297565b8251156104b75782518084602001fd5b8160405162461bcd60e51b81526004016102259190610528565b6000602082840312156104e357600080fd5b8151801515811461029757600080fd5b60006020828403121561050557600080fd5b5051919050565b6000825161051e81846020870161055b565b9190910192915050565b602081526000825180602084015261054781604085016020870161055b565b601f01601f19169190910160400192915050565b60005b8381101561057657818101518382015260200161055e565b83811115610585576000848401525b5050505056fea2646970667358221220c9d86f13adf5bf81a5ce95c24520a33da218e6862a5b4ae8f22e4d9da6b9856664736f6c63430008060033";
class PlatformTokenVendor__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_platformToken, overrides) {
        return super.deploy(_platformToken, overrides || {});
    }
    getDeployTransaction(_platformToken, overrides) {
        return super.getDeployTransaction(_platformToken, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PlatformTokenVendor__factory = PlatformTokenVendor__factory;
PlatformTokenVendor__factory.bytecode = _bytecode;
PlatformTokenVendor__factory.abi = _abi;
//# sourceMappingURL=PlatformTokenVendor__factory.js.map