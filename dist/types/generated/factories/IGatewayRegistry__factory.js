"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_tokenSymbol",
                type: "string",
            },
        ],
        name: "getGatewayBySymbol",
        outputs: [
            {
                internalType: "contract IGateway",
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
                internalType: "string",
                name: "_tokenSymbol",
                type: "string",
            },
        ],
        name: "getTokenBySymbol",
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
class IGatewayRegistry__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IGatewayRegistry__factory = IGatewayRegistry__factory;
IGatewayRegistry__factory.abi = _abi;
//# sourceMappingURL=IGatewayRegistry__factory.js.map