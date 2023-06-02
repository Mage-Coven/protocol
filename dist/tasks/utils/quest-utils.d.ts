import { BigNumberish, Signer } from "ethers";
export declare const signUserQuests: (user: string, questIds: BigNumberish[], questSigner: Signer) => Promise<string>;
export declare const signQuestUsers: (questId: BigNumberish, users: string[], questSigner: Signer) => Promise<string>;
export declare const getQueuedUsersForQuest: (questId: number) => Promise<string[]>;
export declare const hasUserCompletedQuest: (user: string, questName: string) => Promise<boolean>;
