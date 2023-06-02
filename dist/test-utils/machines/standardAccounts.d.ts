import { Signer } from "ethers";
import { Account } from "types";
/**
 * @dev Standard accounts
 */
export declare class StandardAccounts {
    /**
     * @dev Default accounts as per system Migrations
     */
    all: Account[];
    default: Account;
    governor: Account;
    other: Account;
    dummy1: Account;
    dummy2: Account;
    dummy3: Account;
    dummy4: Account;
    dummy5: Account;
    dummy6: Account;
    dummy7: Account;
    fundManager: Account;
    fundManager2: Account;
    questMaster: Account;
    questSigner: Account;
    mockSavingsManager: Account;
    mockInterestValidator: Account;
    mockRecollateraliser: Account;
    mockMasset: Account;
    mockRewardsDistributor: Account;
    keeper: Account;
    initAccounts(signers: Signer[]): Promise<StandardAccounts>;
}
export default StandardAccounts;
