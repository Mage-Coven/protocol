import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RedemptionPriceSnapMock, RedemptionPriceSnapMockInterface } from "../RedemptionPriceSnapMock";
export declare class RedemptionPriceSnapMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RedemptionPriceSnapMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RedemptionPriceSnapMock;
    connect(signer: Signer): RedemptionPriceSnapMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506b033b2e3c9fd0803ce800000060005560ac8061002f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80636998c48d146037578063a9531a0b14604c575b600080fd5b60005460405190815260200160405180910390f35b605c6057366004605e565b600055565b005b600060208284031215606f57600080fd5b503591905056fea2646970667358221220e26c67b48400297e187d5d48108d9a03dd250a7d9f5c8272182c6ceae130647864736f6c63430008060033";
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        name?: undefined;
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
    })[];
    static createInterface(): RedemptionPriceSnapMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RedemptionPriceSnapMock;
}
