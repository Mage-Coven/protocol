import { Signer } from "ethers";
import { Account } from "types";
export declare const impersonate: (addr: string, fund?: boolean) => Promise<Signer>;
export declare const impersonateAccount: (address: string, fund?: boolean) => Promise<Account>;
