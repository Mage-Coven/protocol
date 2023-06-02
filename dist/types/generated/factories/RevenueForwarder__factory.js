"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueForwarder__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_nexus",
                type: "address",
            },
            {
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_forwarder",
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
                name: "mAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "RevenueReceived",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newForwarder",
                type: "address",
            },
        ],
        name: "SetForwarder",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "Withdrawn",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        name: "depositToPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "forward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "forwarder",
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
        name: "mAsset",
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
                internalType: "address",
                name: "_mAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "notifyRedistributionAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_forwarder",
                type: "address",
            },
        ],
        name: "setConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b50604051610d07380380610d0783398101604081905261002f91610180565b826001600160a01b03811661008b5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b0319166080526001600160a01b0382166100e25760405162461bcd60e51b815260206004820152600e60248201526d6d4173736574206973207a65726f60901b6044820152606401610082565b6001600160a01b03811661012c5760405162461bcd60e51b8152602060048201526011602482015270466f72776172646572206973207a65726f60781b6044820152606401610082565b60609190911b6001600160601b03191660a052600080546001600160a01b0319166001600160a01b03909216919091179055506101c3565b80516001600160a01b038116811461017b57600080fd5b919050565b60008060006060848603121561019557600080fd5b61019e84610164565b92506101ac60208501610164565b91506101ba60408501610164565b90509250925092565b60805160601c60a05160601c610af7610210600039600081816087015281816101e4015281816102df015261037c0152600081816101060152818161057301526107110152610af76000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637bf305391161005b5780637bf30539146100ed578063a3f5c1d214610101578063d264e05e14610128578063f645d4f91461013057600080fd5b8063178d341f1461008257806320e3dbd4146100c5578063706d0186146100da575b600080fd5b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100d86100d3366004610921565b610143565b005b6100d86100e836600461095b565b6101e2565b6100d86100fb366004610987565b50505050565b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6100d86102bf565b6000546100a9906001600160a01b031681565b61014b6103dc565b6001600160a01b03811661019a5760405162461bcd60e51b815260206004820152601160248201527024b73b30b634b2103337b93bb0b93232b960791b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917ffb0221b96db51b2e96e4e932300bfb257eb484b8b2e75a4f6961b0bab51a024d91a250565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146102635760405162461bcd60e51b815260206004820152601760248201527f526563697069656e74206973206e6f74206d41737365740000000000000000006044820152606401610191565b6102786001600160a01b038316333084610444565b816001600160a01b03167f10221063d064b7f08df50a7b688426682343e6067582ebc0802467b91b9ac741826040516102b391815260200190565b60405180910390a25050565b6102c76104af565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561032957600080fd5b505afa15801561033d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103619190610a15565b90508061036b5750565b6000546103a5906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168361053a565b6040518181527f430648de173157e069201c943adb2d4e340e7cf5b27b1b09c9cb852f03d63b569060200160405180910390a1505b565b6103e461056f565b6001600160a01b0316336001600160a01b0316146103da5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610191565b6040516001600160a01b03808516602483015283166044820152606481018290526100fb9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610607565b6104b76106d9565b6001600160a01b0316336001600160a01b031614806104ee57506104d961056f565b6001600160a01b0316336001600160a01b0316145b6103da5760405162461bcd60e51b815260206004820152601760248201527f4f6e6c79206b6565706572206f7220676f7665726e6f720000000000000000006044820152606401610191565b6040516001600160a01b03831660248201526044810182905261056a90849063a9059cbb60e01b90606401610478565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ca57600080fd5b505afa1580156105de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610602919061093e565b905090565b600061065c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661075b9092919063ffffffff16565b80519091501561056a578080602001905181019061067a91906109f3565b61056a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610191565b6040516385acd64160e01b81527f4f78afe9dfc9a0cb0441c27b9405070cd2a48b490636a7bdd09f355e33a5d7de60048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b1580156105ca57600080fd5b606061076a8484600085610774565b90505b9392505050565b6060824710156107d55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610191565b843b6108235760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610191565b600080866001600160a01b0316858760405161083f9190610a2e565b60006040518083038185875af1925050503d806000811461087c576040519150601f19603f3d011682016040523d82523d6000602084013e610881565b606091505b509150915061089182828661089c565b979650505050505050565b606083156108ab57508161076d565b8251156108bb5782518084602001fd5b8160405162461bcd60e51b81526004016101919190610a4a565b60008083601f8401126108e757600080fd5b50813567ffffffffffffffff8111156108ff57600080fd5b6020830191508360208260051b850101111561091a57600080fd5b9250929050565b60006020828403121561093357600080fd5b813561076d81610aa9565b60006020828403121561095057600080fd5b815161076d81610aa9565b6000806040838503121561096e57600080fd5b823561097981610aa9565b946020939093013593505050565b6000806000806040858703121561099d57600080fd5b843567ffffffffffffffff808211156109b557600080fd5b6109c1888389016108d5565b909650945060208701359150808211156109da57600080fd5b506109e7878288016108d5565b95989497509550505050565b600060208284031215610a0557600080fd5b8151801515811461076d57600080fd5b600060208284031215610a2757600080fd5b5051919050565b60008251610a40818460208701610a7d565b9190910192915050565b6020815260008251806020840152610a69816040850160208701610a7d565b601f01601f19169190910160400192915050565b60005b83811015610a98578181015183820152602001610a80565b838111156100fb5750506000910152565b6001600160a01b0381168114610abe57600080fd5b5056fea264697066735822122037aa91ba58a56a3b2fda8add659b74ece03273fd9980b78633d177fcded7a54664736f6c63430008060033";
class RevenueForwarder__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nexus, _mAsset, _forwarder, overrides) {
        return super.deploy(_nexus, _mAsset, _forwarder, overrides || {});
    }
    getDeployTransaction(_nexus, _mAsset, _forwarder, overrides) {
        return super.getDeployTransaction(_nexus, _mAsset, _forwarder, overrides || {});
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
exports.RevenueForwarder__factory = RevenueForwarder__factory;
RevenueForwarder__factory.bytecode = _bytecode;
RevenueForwarder__factory.abi = _abi;
//# sourceMappingURL=RevenueForwarder__factory.js.map