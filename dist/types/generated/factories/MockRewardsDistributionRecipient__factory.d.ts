import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRewardsDistributionRecipient, MockRewardsDistributionRecipientInterface } from "../MockRewardsDistributionRecipient";
export declare class MockRewardsDistributionRecipient__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_rewardToken: string, _platformToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRewardsDistributionRecipient>;
    getDeployTransaction(_rewardToken: string, _platformToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRewardsDistributionRecipient;
    connect(signer: Signer): MockRewardsDistributionRecipient__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516101ce3803806101ce83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610110806100be6000396000f3fe6080604052348015600f57600080fd5b506004361060505760003560e01c80633c6b16ab14605557806369940d791460655780639ed374f714608e578063d1b812cd14609e578063f7c618c11460b0575b600080fd5b6063606036600460c2565b50565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6001546001600160a01b03166072565b6001546072906001600160a01b031681565b6000546072906001600160a01b031681565b60006020828403121560d357600080fd5b503591905056fea26469706673582212205a407fe9b7a09b93be91400ee3fb2743ea9373d1f5943ee6d110580ef41968c164736f6c63430008060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): MockRewardsDistributionRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRewardsDistributionRecipient;
}
