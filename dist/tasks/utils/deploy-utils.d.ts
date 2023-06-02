import { Contract, ContractFactory, ContractReceipt, ContractTransaction, Overrides } from "ethers";
export declare const deployContract: <T extends Contract>(contractFactory: ContractFactory, contractName?: string, constructorArgs?: Array<unknown>, overrides?: Overrides) => Promise<T>;
export declare const logger: (...args: string[]) => any;
export declare const logTxDetails: (tx: ContractTransaction, method: string) => Promise<ContractReceipt>;
