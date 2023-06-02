import { HardhatRuntimeEnvironment } from "hardhat/types";
export declare const sleep: (ms: number) => Promise<void>;
interface VerifyEtherscan {
    address: string;
    contract?: string;
    constructorArguments?: any[];
    libraries?: {
        [libraryName: string]: string;
    };
}
export declare const verifyEtherscan: (hre: HardhatRuntimeEnvironment, contract: VerifyEtherscan) => Promise<void>;
export {};
