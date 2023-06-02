import { BytesLike } from "@ethersproject/bytes";
import { Contract, ContractFactory, Signer } from "ethers";
import { DelayedProxyAdmin } from "types/generated";
export declare const upgradeContract: <T extends Contract>(contractFactory: ContractFactory, implementation: Contract, proxyAddress: string, signer: Signer, delayedProxyAdmin: DelayedProxyAdmin, upgradeData?: BytesLike) => Promise<T>;
