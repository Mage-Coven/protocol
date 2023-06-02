import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimableGovernor, ClaimableGovernorInterface } from "../ClaimableGovernor";
export declare class ClaimableGovernor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_governorAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClaimableGovernor>;
    getDeployTransaction(_governorAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClaimableGovernor;
    connect(signer: Signer): ClaimableGovernor__factory;
    static readonly bytecode = "0x6080604052600180546001600160a01b031916905534801561002057600080fd5b5060405161073d38038061073d83398101604081905261003f9161011e565b600080546001600160a01b03191633908117825560405190919060008051602061071d833981519152908290a36100758161007b565b5061014e565b6001600160a01b0381166100d55760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f72206973206164647265737328302900604482015260640160405180910390fd5b600080546040516001600160a01b038085169392169160008051602061071d83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561013057600080fd5b81516001600160a01b038116811461014757600080fd5b9392505050565b6105c08061015d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638c33c19c1161005b5780638c33c19c146100d4578063ad339d7a146100dc578063c7af3352146100e4578063e4c0aaf41461010257600080fd5b8063099c47bc146100825780630c340a24146100975780638a11a370146100c1575b600080fd5b610095610090366004610523565b610115565b005b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6001546100a4906001600160a01b031681565b610095610260565b610095610347565b6000546001600160a01b0316331460405190151581526020016100b8565b610095610110366004610523565b610400565b6000546001600160a01b031633146101485760405162461bcd60e51b815260040161013f90610553565b60405180910390fd5b6001600160a01b03811661019e5760405162461bcd60e51b815260206004820152601f60248201527f50726f706f73656420676f7665726e6f72206973206164647265737328302900604482015260640161013f565b6001546001600160a01b0316156101f75760405162461bcd60e51b815260206004820152601d60248201527f50726f706f73656420676f7665726e6f7220616c726561647920736574000000604482015260640161013f565b600180546001600160a01b0383166001600160a01b031990911681179091556102286000546001600160a01b031690565b6001600160a01b03167fa48c163cc46eb28aba8bdb525da18f15a83020cc18f439c933d79ea3ad9b50bb60405160405180910390a350565b6000546001600160a01b0316331461028a5760405162461bcd60e51b815260040161013f90610553565b6001546001600160a01b03166102e25760405162461bcd60e51b815260206004820152601960248201527f50726f706f73656420476f7665726e6f72206e6f742073657400000000000000604482015260640161013f565b6001546001600160a01b03166103006000546001600160a01b031690565b6001600160a01b03167f2f7bb10f75b8694ea78291d7ca4c9f2a75bc45f0f97046164ad3ee984bdf4bba60405160405180910390a3600180546001600160a01b0319169055565b6001546001600160a01b031633146103a15760405162461bcd60e51b815260206004820152601f60248201527f53656e646572206973206e6f742070726f706f73656420676f7665726e6f7200604482015260640161013f565b6001546103b6906001600160a01b0316610472565b6001546040516001600160a01b03909116907f0ad714cb5607f3b529b5d3292190925ae992a77b291e39ec09c390d4787896ba90600090a2600180546001600160a01b0319169055565b6000546001600160a01b0316331461042a5760405162461bcd60e51b815260040161013f90610553565b60405162461bcd60e51b815260206004820152601960248201527f446972656374206368616e6765206e6f7420616c6c6f77656400000000000000604482015260640161013f565b6001600160a01b0381166104c85760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f72206973206164647265737328302900604482015260640161013f565b600080546040516001600160a01b03808516939216917fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c8491a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561053557600080fd5b81356001600160a01b038116811461054c57600080fd5b9392505050565b6020808252601f908201527f474f563a2063616c6c6572206973206e6f742074686520476f7665726e6f720060408201526060019056fea2646970667358221220cea9755e0affefc77b4a2d02c6d3422a8dbf289e8fdd14d491062f60df56f67964736f6c63430008060033de4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c84";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ClaimableGovernorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ClaimableGovernor;
}