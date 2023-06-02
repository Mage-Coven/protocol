import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InitializableModule2, InitializableModule2Interface } from "../InitializableModule2";
export declare class InitializableModule2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<InitializableModule2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): InitializableModule2;
    connect(signer: Signer): InitializableModule2__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50609c8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a3f5c1d214602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b73afce80b19a8ce13dec0739a1aab7a028d6845eb38156fea265627a7a723158202fd66cfa01943f2146788b1293577936f9d51c71fb38ad0a11632580041fe7bc64736f6c63430005100032";
    static readonly abi: {
        constant: boolean;
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): InitializableModule2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): InitializableModule2;
}
