import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBoostedVault, MockBoostedVaultInterface } from "../MockBoostedVault";
export declare class MockBoostedVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_boostDirector: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockBoostedVault>;
    getDeployTransaction(_boostDirector: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockBoostedVault;
    connect(signer: Signer): MockBoostedVault__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516102ed3803806102ed83398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c610256610097600039600081816071015260e201526102566000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632f90ce4614610046578063b43082ec1461006c578063cf7bf6b7146100ab575b600080fd5b6100596100543660046101d7565b6100c0565b6040519081526020015b60405180910390f35b6100937f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610063565b6100be6100b93660046101d7565b6101a0565b005b60405163f8b2cb4f60e01b81526001600160a01b0382811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063f8b2cb4f90602401602060405180830381600087803b15801561012857600080fd5b505af115801561013c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101609190610207565b90507fabd23dd011113861738620acd8e5cbec0577c8c8b3d7566e2a615e0c01ff333f8160405161019391815260200190565b60405180910390a1919050565b6040516001600160a01b038216907fa31b3b303c759fa7ee31d89a1a6fb7eb704d8fe5c87aa4f60f54468ff121bee890600090a250565b6000602082840312156101e957600080fd5b81356001600160a01b038116811461020057600080fd5b9392505050565b60006020828403121561021957600080fd5b505191905056fea26469706673582212203489f56b42b28cdc2b945c6cf96135b4bb3e36b8e2380c67d3aaf4691069aa0764736f6c63430008060033";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockBoostedVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockBoostedVault;
}
