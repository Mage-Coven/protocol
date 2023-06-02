import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRevenueRecipient, MockRevenueRecipientInterface } from "../MockRevenueRecipient";
export declare class MockRevenueRecipient__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRevenueRecipient>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRevenueRecipient;
    connect(signer: Signer): MockRevenueRecipient__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061023e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063706d01861461003b5780637bf3053914610050575b600080fd5b61004e61004936600461013b565b610064565b005b61004e61005e366004610173565b50505050565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd90606401602060405180830381600087803b1580156100b257600080fd5b505af11580156100c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ea91906101df565b505050565b60008083601f84011261010157600080fd5b50813567ffffffffffffffff81111561011957600080fd5b6020830191508360208260051b850101111561013457600080fd5b9250929050565b6000806040838503121561014e57600080fd5b82356001600160a01b038116811461016557600080fd5b946020939093013593505050565b6000806000806040858703121561018957600080fd5b843567ffffffffffffffff808211156101a157600080fd5b6101ad888389016100ef565b909650945060208701359150808211156101c657600080fd5b506101d3878288016100ef565b95989497509550505050565b6000602082840312156101f157600080fd5b8151801515811461020157600080fd5b939250505056fea264697066735822122088903fe9b52300ca4d7812dc02c0d8ea60caa135e06d809a4a3aebfcc37b51da64736f6c63430008060033";
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
    static createInterface(): MockRevenueRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRevenueRecipient;
}
