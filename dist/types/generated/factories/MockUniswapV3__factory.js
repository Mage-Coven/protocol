"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockUniswapV3__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "path",
                        type: "bytes",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOutMinimum",
                        type: "uint256",
                    },
                ],
                internalType: "struct IUniswapV3SwapRouter.ExactInputParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "exactInput",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "tokenIn",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOutMinimum",
                        type: "uint256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                ],
                internalType: "struct IUniswapV3SwapRouter.ExactInputSingleParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "exactInputSingle",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "path",
                        type: "bytes",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountInMaximum",
                        type: "uint256",
                    },
                ],
                internalType: "struct IUniswapV3SwapRouter.ExactOutputParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "exactOutput",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "tokenIn",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountInMaximum",
                        type: "uint256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                ],
                internalType: "struct IUniswapV3SwapRouter.ExactOutputSingleParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "exactOutputSingle",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "path",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "quoteExactInput",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
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
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint160",
                name: "",
                type: "uint160",
            },
        ],
        name: "quoteExactInputSingle",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "path",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "quoteExactOutput",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
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
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
            {
                internalType: "uint160",
                name: "",
                type: "uint160",
            },
        ],
        name: "quoteExactOutputSingle",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "rates",
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
                name: "_tokenIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "_tokenOut",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_rate",
                type: "uint256",
            },
        ],
        name: "setRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052620f424060005534801561001757600080fd5b5061132a806100276000396000f3fe6080604052600436106100915760003560e01c8063c04b8d5911610059578063c04b8d591461017c578063cdca17531461018f578063db3e2198146101af578063f28c0498146101c2578063f7729d43146101d557600080fd5b80632f80bb1d1461009657806330d07f21146100c8578063414bf389146100e85780635911fb9a146100fb5780637b0cf44d14610144575b600080fd5b3480156100a257600080fd5b506100b66100b13660046110a4565b6101f5565b60405190815260200160405180910390f35b3480156100d457600080fd5b506100b66100e3366004610fdb565b610299565b6100b66100f6366004611196565b6102f2565b34801561010757600080fd5b50610142610116366004611041565b6001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b005b34801561015057600080fd5b506100b661015f366004610fa2565b600160209081526000928352604080842090915290825290205481565b6100b661018a366004611159565b610536565b34801561019b57600080fd5b506100b66101aa3660046110a4565b6107aa565b6100b66101bd366004611196565b61082b565b6100b66101d0366004611159565b610a14565b3480156101e157600080fd5b506100b66101f0366004610fdb565b610bbb565b600080600061020385610c12565b9250509150600061021b61021687610c4e565b610c12565b506001600160a01b0380821660009081526001602090815260408083209389168352929052908120549054919350915061025b9062ffffff851690611299565b610265908261127a565b60005461027a670de0b6b3a76400008961127a565b610284919061127a565b61028e9190611258565b979650505050505050565b6001600160a01b03808616600090815260016020908152604080832093881683529290529081205481546102d39062ffffff871690611299565b6102dd908261127a565b60005461027a670de0b6b3a76400008761127a565b60006103016020830183610f7e565b6001600160a01b03166323b872dd33308560a001356040518463ffffffff1660e01b8152600401610334939291906111ce565b602060405180830381600087803b15801561034e57600080fd5b505af1158015610362573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103869190611082565b5060006001816103996020860186610f7e565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008460200160208101906103ce9190610f7e565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050670de0b6b3a7640000600054610407919061127a565b61041760608501604086016111b3565b62ffffff166000546104299190611299565b6104378360a087013561127a565b610441919061127a565b61044b9190611258565b91508260c0013582101561049c5760405162461bcd60e51b8152602060048201526013602482015272151bdbc81b1a5d1d1b19481c9958d95a5d9959606a1b60448201526064015b60405180910390fd5b6104ac6040840160208501610f7e565b60405163a9059cbb60e01b8152336004820152602481018490526001600160a01b03919091169063a9059cbb906044015b602060405180830381600087803b1580156104f757600080fd5b505af115801561050b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052f9190611082565b5050919050565b6000808061058161054785806111f2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c1292505050565b919350909150600090506105d561021661059b87806111f2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c4e92505050565b506040516323b872dd60e01b81529092506001600160a01b03851691506323b872dd9061060e903390309060608b0135906004016111ce565b602060405180830381600087803b15801561062857600080fd5b505af115801561063c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106609190611082565b506001600160a01b038084166000908152600160209081526040808320938516835292905290812054905461069e90670de0b6b3a76400009061127a565b8362ffffff166000546106b19190611299565b6106bf8360608a013561127a565b6106c9919061127a565b6106d39190611258565b9450856080013585101561071f5760405162461bcd60e51b8152602060048201526013602482015272151bdbc81b1a5d1d1b19481c9958d95a5d9959606a1b6044820152606401610493565b60405163a9059cbb60e01b8152336004820152602481018690526001600160a01b0383169063a9059cbb906044015b602060405180830381600087803b15801561076857600080fd5b505af115801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190611082565b5050505050919050565b60008060006107b885610c12565b925050915060006107cb61021687610c4e565b506001600160a01b0380861660009081526001602090815260408083209385168352929052908120549054919350915061080e90670de0b6b3a76400009061127a565b8362ffffff166000546108219190611299565b61027a838961127a565b60008060018161083e6020860186610f7e565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008460200160208101906108739190610f7e565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508260400160208101906108a991906111b3565b62ffffff166000546108bb9190611299565b6108c5908261127a565b6000546108de670de0b6b3a764000060a087013561127a565b6108e8919061127a565b6108f29190611258565b91506109016020840184610f7e565b6001600160a01b03166323b872dd3330856040518463ffffffff1660e01b8152600401610930939291906111ce565b602060405180830381600087803b15801561094a57600080fd5b505af115801561095e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109829190611082565b508260c001358211156109cc5760405162461bcd60e51b8152602060048201526012602482015271151bdbc81b5d58da081c995c5d595cdd195960721b6044820152606401610493565b6109dc6040840160208501610f7e565b60405163a9059cbb60e01b815233600482015260a085013560248201526001600160a01b03919091169063a9059cbb906044016104dd565b60008080610a2561054785806111f2565b91935090915060009050610a3f61021661059b87806111f2565b506001600160a01b03808616600090815260016020908152604080832093851683529290529081205490549193509150610a7f9062ffffff851690611299565b610a89908261127a565b600054610aa2670de0b6b3a764000060608a013561127a565b610aac919061127a565b610ab69190611258565b6040516323b872dd60e01b81529095506001600160a01b038516906323b872dd90610ae990339030908a906004016111ce565b602060405180830381600087803b158015610b0357600080fd5b505af1158015610b17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3b9190611082565b508560800135851115610b855760405162461bcd60e51b8152602060048201526012602482015271151bdbc81b5d58da081c995c5d595cdd195960721b6044820152606401610493565b60405163a9059cbb60e01b8152336004820152606087013560248201526001600160a01b0383169063a9059cbb9060440161074e565b6001600160a01b0380861660009081526001602090815260408083209388168352929052908120548154610bf462ffffff871682611299565b610bfe9190611258565b610c08828661127a565b61028e919061127a565b60008080610c208482610c85565b9250610c2d846014610d39565b9050610c45610c3e60036014611240565b8590610c85565b91509193909250565b6060610c7f610c5f60036014611240565b610c6b60036014611240565b8451610c779190611299565b849190610de4565b92915050565b600081610c93816014611240565b1015610cd65760405162461bcd60e51b8152602060048201526012602482015271746f416464726573735f6f766572666c6f7760701b6044820152606401610493565b610ce1826014611240565b83511015610d295760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610493565b500160200151600160601b900490565b600081610d47816003611240565b1015610d895760405162461bcd60e51b8152602060048201526011602482015270746f55696e7432345f6f766572666c6f7760781b6044820152606401610493565b610d94826003611240565b83511015610ddb5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7432345f6f75744f66426f756e647360601b6044820152606401610493565b50016003015190565b606081610df281601f611240565b1015610e315760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610493565b82610e3c8382611240565b1015610e7b5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610493565b610e858284611240565b84511015610ec95760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610493565b606082158015610ee85760405191506000825260208201604052610f32565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610f21578051835260209283019201610f09565b5050858452601f01601f1916604052505b50949350505050565b600060a08284031215610f4d57600080fd5b50919050565b60006101008284031215610f4d57600080fd5b803562ffffff81168114610f7957600080fd5b919050565b600060208284031215610f9057600080fd5b8135610f9b816112dc565b9392505050565b60008060408385031215610fb557600080fd5b8235610fc0816112dc565b91506020830135610fd0816112dc565b809150509250929050565b600080600080600060a08688031215610ff357600080fd5b8535610ffe816112dc565b9450602086013561100e816112dc565b935061101c60408701610f66565b9250606086013591506080860135611033816112dc565b809150509295509295909350565b60008060006060848603121561105657600080fd5b8335611061816112dc565b92506020840135611071816112dc565b929592945050506040919091013590565b60006020828403121561109457600080fd5b81518015158114610f9b57600080fd5b600080604083850312156110b757600080fd5b823567ffffffffffffffff808211156110cf57600080fd5b818501915085601f8301126110e357600080fd5b8135818111156110f5576110f56112c6565b604051601f8201601f19908116603f0116810190838211818310171561111d5761111d6112c6565b8160405282815288602084870101111561113657600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b60006020828403121561116b57600080fd5b813567ffffffffffffffff81111561118257600080fd5b61118e84828501610f3b565b949350505050565b600061010082840312156111a957600080fd5b610f9b8383610f53565b6000602082840312156111c557600080fd5b610f9b82610f66565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000808335601e1984360301811261120957600080fd5b83018035915067ffffffffffffffff82111561122457600080fd5b60200191503681900382131561123957600080fd5b9250929050565b60008219821115611253576112536112b0565b500190565b60008261127557634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611294576112946112b0565b500290565b6000828210156112ab576112ab6112b0565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146112f157600080fd5b5056fea26469706673582212202f4d14c1cce3b889eae96b8b3c156bf3a5ab7bd04106d677272adb0db1f018b164736f6c63430008060033";
class MockUniswapV3__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.MockUniswapV3__factory = MockUniswapV3__factory;
MockUniswapV3__factory.bytecode = _bytecode;
MockUniswapV3__factory.abi = _abi;
//# sourceMappingURL=MockUniswapV3__factory.js.map