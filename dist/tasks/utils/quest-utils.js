"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasUserCompletedQuest = exports.getQueuedUsersForQuest = exports.signQuestUsers = exports.signUserQuests = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("ethers/lib/utils");
const questBookUrl = "https://europe-west1-xzeno-questbook.cloudfunctions.net/questbook";
const signUserQuests = async (user, questIds, questSigner) => {
    const messageHash = utils_1.solidityKeccak256(["address", "uint256[]"], [user, questIds]);
    const signature = await questSigner.signMessage(utils_1.arrayify(messageHash));
    return signature;
};
exports.signUserQuests = signUserQuests;
const signQuestUsers = async (questId, users, questSigner) => {
    const messageHash = utils_1.solidityKeccak256(["uint256", "address[]"], [questId, users]);
    const signature = await questSigner.signMessage(utils_1.arrayify(messageHash));
    return signature;
};
exports.signQuestUsers = signQuestUsers;
const getQueuedUsersForQuest = async (questId) => {
    var _a;
    // get users who have completed quests from the queue
    const response = await axios_1.default.post(questBookUrl, {
        query: `query { queue { userId ethereumId } }`,
    });
    const { queue } = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data;
    if (!queue) {
        console.log(response === null || response === void 0 ? void 0 : response.data);
        throw Error(`Failed to get quests from queue`);
    }
    // filter users to just the requested quest identifier
    const usersInQueue = queue.filter((quest) => quest.ethereumId === questId);
    const usersForQuest = usersInQueue.map((quest) => quest.userId);
    return usersForQuest;
};
exports.getQueuedUsersForQuest = getQueuedUsersForQuest;
const hasUserCompletedQuest = async (user, questName) => {
    var _a, _b, _c;
    const response = await axios_1.default.post(questBookUrl, {
        query: `query { user(userId: "${user}") { quests {
            id
            complete
            progress
          } } }`,
    });
    const quests = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.quests;
    if (!quests) {
        console.log(response === null || response === void 0 ? void 0 : response.data);
        throw Error(`Failed to get quests for user ${user}`);
    }
    // Filter user's quest for the named quest. eg theGreatMigration
    const quest = quests.find((q) => q.id === `${questName}.${user}`);
    return quest === null || quest === void 0 ? void 0 : quest.complete;
};
exports.hasUserCompletedQuest = hasUserCompletedQuest;
//# sourceMappingURL=quest-utils.js.map