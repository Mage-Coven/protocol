"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_LIQUIDATOR = exports.KEY_PROXY_ADMIN = exports.KEY_SAVINGS_MANAGER = exports.ONE_YEAR = exports.ONE_WEEK = exports.TEN_DAYS = exports.FIVE_DAYS = exports.ONE_DAY = exports.ONE_HOUR = exports.TEN_MINS = exports.ONE_MIN = exports.ZERO = exports.MIN_INT128 = exports.MAX_INT128 = exports.MAX_UINT256 = exports.ZERO_KEY = exports.ZERO_ADDRESS = exports.DEAD_ADDRESS = exports.DEFAULT_DECIMALS = exports.fullScale = exports.ratioScale = void 0;
/* eslint-disable max-classes-per-file */
const ethers_1 = require("ethers");
/**
 * @notice This file contains constants relevant across the xZeno test suite
 * Wherever possible, it should conform to fixed on chain vars
 */
exports.ratioScale = ethers_1.BigNumber.from(10).pow(8);
exports.fullScale = ethers_1.BigNumber.from(10).pow(18);
exports.DEFAULT_DECIMALS = 18;
exports.DEAD_ADDRESS = "0x0000000000000000000000000000000000000001";
exports.ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
exports.ZERO_KEY = "0x0000000000000000000000000000000000000000000000000000000000000000";
exports.MAX_UINT256 = ethers_1.BigNumber.from(2).pow(256).sub(1);
exports.MAX_INT128 = ethers_1.BigNumber.from(2).pow(127).sub(1);
exports.MIN_INT128 = ethers_1.BigNumber.from(2).pow(127).mul(-1);
exports.ZERO = ethers_1.BigNumber.from(0);
exports.ONE_MIN = ethers_1.BigNumber.from(60);
exports.TEN_MINS = ethers_1.BigNumber.from(60 * 10);
exports.ONE_HOUR = ethers_1.BigNumber.from(60 * 60);
exports.ONE_DAY = ethers_1.BigNumber.from(60 * 60 * 24);
exports.FIVE_DAYS = ethers_1.BigNumber.from(60 * 60 * 24 * 5);
exports.TEN_DAYS = ethers_1.BigNumber.from(60 * 60 * 24 * 10);
exports.ONE_WEEK = ethers_1.BigNumber.from(60 * 60 * 24 * 7);
exports.ONE_YEAR = ethers_1.BigNumber.from(60 * 60 * 24 * 365);
exports.KEY_SAVINGS_MANAGER = ethers_1.utils.keccak256(ethers_1.utils.toUtf8Bytes("SavingsManager"));
exports.KEY_PROXY_ADMIN = ethers_1.utils.keccak256(ethers_1.utils.toUtf8Bytes("ProxyAdmin"));
exports.KEY_LIQUIDATOR = ethers_1.utils.keccak256(ethers_1.utils.toUtf8Bytes("Liquidator"));
//# sourceMappingURL=constants.js.map