"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAaveIncentivesController__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_rewardsToken",
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
                name: "",
                type: "address[]",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "claimRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
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
        ],
        name: "getRewardsBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "getUserUnclaimedRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsToken",
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
];
const _bytecode = "0x60a060405234801561001057600080fd5b506040516103db3803806103db83398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c6103436100986000396000818160b7015261011801526103436000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063198fa81e146100515780633111e7b3146100805780638b599f2614610093578063d1af0c7d146100b2575b600080fd5b61006d61005f366004610218565b5068056bc75e2d6310000090565b6040519081526020015b60405180910390f35b61006d61008e36600461028e565b6100f1565b61006d6100a136600461023a565b68056bc75e2d631000009392505050565b6100d97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610077565b60405163a9059cbb60e01b815233600482015268056bc75e2d6310000060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b15801561016457600080fd5b505af1158015610178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019c91906102eb565b5068056bc75e2d6310000095945050505050565b80356001600160a01b03811681146101c757600080fd5b919050565b60008083601f8401126101de57600080fd5b50813567ffffffffffffffff8111156101f657600080fd5b6020830191508360208260051b850101111561021157600080fd5b9250929050565b60006020828403121561022a57600080fd5b610233826101b0565b9392505050565b60008060006040848603121561024f57600080fd5b833567ffffffffffffffff81111561026657600080fd5b610272868287016101cc565b90945092506102859050602085016101b0565b90509250925092565b600080600080606085870312156102a457600080fd5b843567ffffffffffffffff8111156102bb57600080fd5b6102c7878288016101cc565b909550935050602085013591506102e0604086016101b0565b905092959194509250565b6000602082840312156102fd57600080fd5b8151801515811461023357600080fdfea26469706673582212203dffeebffd3dd21caeec34eb51c6820f4a17451fb0c4308710c199a8504a158c64736f6c63430008060033";
class MockAaveIncentivesController__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_rewardsToken, overrides) {
        return super.deploy(_rewardsToken, overrides || {});
    }
    getDeployTransaction(_rewardsToken, overrides) {
        return super.getDeployTransaction(_rewardsToken, overrides || {});
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
exports.MockAaveIncentivesController__factory = MockAaveIncentivesController__factory;
MockAaveIncentivesController__factory.bytecode = _bytecode;
MockAaveIncentivesController__factory.abi = _abi;
//# sourceMappingURL=MockAaveIncentivesController__factory.js.map