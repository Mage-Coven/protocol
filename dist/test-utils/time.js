"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentWeekEpoch = exports.weekEpoch = exports.startCurrentWeek = exports.startWeek = exports.sleep = exports.increaseTimeTo = exports.getTimestamp = exports.latestBlock = exports.increaseTime = exports.advanceBlock = void 0;
const hardhat_1 = require("hardhat");
const math_1 = require("./math");
const constants_1 = require("./constants");
const advanceBlock = async () => hardhat_1.ethers.provider.send("evm_mine", []);
exports.advanceBlock = advanceBlock;
const increaseTime = async (length) => {
    await hardhat_1.ethers.provider.send("evm_increaseTime", [math_1.BN.from(length).toNumber()]);
    await exports.advanceBlock();
};
exports.increaseTime = increaseTime;
const latestBlock = async () => hardhat_1.ethers.provider.getBlock(await hardhat_1.ethers.provider.getBlockNumber());
exports.latestBlock = latestBlock;
const getTimestamp = async () => math_1.BN.from((await exports.latestBlock()).timestamp);
exports.getTimestamp = getTimestamp;
const increaseTimeTo = async (target) => {
    const now = await exports.getTimestamp();
    const later = math_1.BN.from(target);
    if (later.lt(now))
        throw Error(`Cannot increase current time (${now.toNumber()}) to a moment in the past (${later.toNumber()})`);
    const diff = later.sub(now);
    await exports.increaseTime(diff);
    await exports.advanceBlock();
};
exports.increaseTimeTo = increaseTimeTo;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
const startWeek = (epochSeconds) => math_1.BN.from(epochSeconds).div(constants_1.ONE_WEEK).mul(constants_1.ONE_WEEK);
exports.startWeek = startWeek;
const startCurrentWeek = async () => exports.startWeek(await exports.getTimestamp());
exports.startCurrentWeek = startCurrentWeek;
const weekEpoch = (epochSeconds) => math_1.BN.from(epochSeconds).div(constants_1.ONE_WEEK);
exports.weekEpoch = weekEpoch;
const currentWeekEpoch = async () => exports.weekEpoch(await exports.getTimestamp());
exports.currentWeekEpoch = currentWeekEpoch;
//# sourceMappingURL=time.js.map