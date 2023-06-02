"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockUniswap__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "getAmountsIn",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        name: "getAmountsOut",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_outRatio",
                type: "uint256",
            },
        ],
        name: "setRatio",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "swapExactETHForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "swapExactTokensForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052606a60005534801561001557600080fd5b50610728806100256000396000f3fe60806040526004361061004a5760003560e01c80631f00ca741461004f57806338ed1739146100855780637ff36ab5146100a5578063b2237ba3146100cb578063d06ca61f146100ed575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046104f2565b61011e565b60405161007c9190610614565b60405180910390f35b34801561009157600080fd5b5061006f6100a03660046105a4565b6101c8565b61006f6100b336600461053e565b50506040805160008152602081019091529392505050565b3480156100d757600080fd5b506100eb6100e63660046104d9565b600055565b005b3480156100f957600080fd5b5061006f6101083660046104f2565b5050604080516000815260208101909152919050565b6060600080548561012f9190610658565b9050828067ffffffffffffffff81111561014b5761014b6106dc565b604051908082528060200260200182016040528015610174578160200160208202803683370190505b509250818360008151811061018b5761018b6106c6565b602090810291909101015285836101a3600184610699565b815181106101b3576101b36106c6565b60200260200101818152505050509392505050565b6060838067ffffffffffffffff8111156101e4576101e46106dc565b60405190808252806020026020018201604052801561020d578160200160208202803683370190505b5091508782600081518110610224576102246106c6565b60200260200101818152505085856000818110610243576102436106c6565b90506020020160208101906102589190610495565b6040516323b872dd60e01b8152336004820152306024820152604481018a90526001600160a01b0391909116906323b872dd90606401602060405180830381600087803b1580156102a857600080fd5b505af11580156102bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e091906104b7565b50600080546102ef908a61067a565b9050878110156103455760405162461bcd60e51b815260206004820152601d60248201527f554e493a204f757470757420616d6f756e74206e6f7420656e6f756768000000604482015260640160405180910390fd5b8083610352600185610699565b81518110610362576103626106c6565b6020908102919091010152868661037a600185610699565b818110610389576103896106c6565b905060200201602081019061039e9190610495565b60405163a9059cbb60e01b8152336004820152602481018390526001600160a01b03919091169063a9059cbb90604401602060405180830381600087803b1580156103e857600080fd5b505af11580156103fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042091906104b7565b5050509695505050505050565b80356001600160a01b038116811461044457600080fd5b919050565b60008083601f84011261045b57600080fd5b50813567ffffffffffffffff81111561047357600080fd5b6020830191508360208260051b850101111561048e57600080fd5b9250929050565b6000602082840312156104a757600080fd5b6104b08261042d565b9392505050565b6000602082840312156104c957600080fd5b815180151581146104b057600080fd5b6000602082840312156104eb57600080fd5b5035919050565b60008060006040848603121561050757600080fd5b83359250602084013567ffffffffffffffff81111561052557600080fd5b61053186828701610449565b9497909650939450505050565b60008060008060006080868803121561055657600080fd5b85359450602086013567ffffffffffffffff81111561057457600080fd5b61058088828901610449565b909550935061059390506040870161042d565b949793965091946060013592915050565b60008060008060008060a087890312156105bd57600080fd5b8635955060208701359450604087013567ffffffffffffffff8111156105e257600080fd5b6105ee89828a01610449565b909550935061060190506060880161042d565b9150608087013590509295509295509295565b6020808252825182820181905260009190848201906040850190845b8181101561064c57835183529284019291840191600101610630565b50909695505050505050565b60008261067557634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610694576106946106b0565b500290565b6000828210156106ab576106ab6106b0565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205e7f43268af417f7dbaba696108340fe43a7fe7f514c4b42a1076433854b853264736f6c63430008060033";
class MockUniswap__factory extends ethers_1.ContractFactory {
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
exports.MockUniswap__factory = MockUniswap__factory;
MockUniswap__factory.bytecode = _bytecode;
MockUniswap__factory.abi = _abi;
//# sourceMappingURL=MockUniswap__factory.js.map