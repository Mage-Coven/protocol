import { PopulatedTransaction, Signer } from "ethers";
import { BN } from "@utils/math";
import { TransactionResponse } from "@ethersproject/providers";
export declare const sendPrivateTransaction: (tx: PopulatedTransaction, signer: Signer) => Promise<TransactionResponse>;
export declare const sendBundledRawTransactions: (txsEncodedSigned: string[], fromBlock: BN) => Promise<string>;
export declare const sendBundledTransactions: (txs: PopulatedTransaction[], signer: Signer) => Promise<string>;
