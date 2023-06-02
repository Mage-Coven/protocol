import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrigger, MockTriggerInterface } from "../MockTrigger";
export declare class MockTrigger__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrigger>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrigger;
    connect(signer: Signer): MockTrigger__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061011c806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b92814d814602d575b600080fd5b603c6038366004609b565b603e565b005b60405163b350df5d60e01b81526001600160a01b03828116600483015283169063b350df5d90602401600060405180830381600087803b158015608057600080fd5b505af11580156093573d6000803e3d6000fd5b505050505050565b6000806040838503121560ad57600080fd5b823560b68160cf565b9150602083013560c48160cf565b809150509250929050565b6001600160a01b038116811460e357600080fd5b5056fea26469706673582212204b6fcf7f35b4612fb3de89ead28db4db0a61362b987a93a8232fa5bc02bd600e64736f6c63430008060033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockTriggerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrigger;
}
