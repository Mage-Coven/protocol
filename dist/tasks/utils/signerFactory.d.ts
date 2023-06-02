import { Speed } from "defender-relay-client";
import { Signer } from "ethers";
import { Account } from "types";
import { HardhatRuntime } from "./networkAddressFactory";
export declare const getDefenderSigner: (speed?: Speed) => Promise<Signer>;
export declare const getSigner: (hre?: HardhatRuntime, speed?: Speed, useCache?: boolean, key?: string) => Promise<Signer>;
export declare const getSignerAccount: (hre?: HardhatRuntime, speed?: Speed) => Promise<Account>;
