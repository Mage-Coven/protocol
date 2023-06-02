"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const ethereumjs_util_1 = require("ethereumjs-util");
const errors_1 = require("hardhat/internal/core/errors");
const errors_list_1 = require("hardhat/internal/core/errors-list");
/**
 * Hardhat task CLI argument types
 */
exports.params = {
    address: {
        name: "address",
        parse: (argName, strValue) => strValue,
        validate: (argName, value) => {
            const isValid = typeof value === "string" && ethereumjs_util_1.isValidAddress(value);
            if (!isValid) {
                throw new errors_1.HardhatError(errors_list_1.ERRORS.ARGUMENTS.INVALID_VALUE_FOR_TYPE, {
                    value,
                    name: argName,
                    type: "address",
                });
            }
        },
    },
    addressArray: {
        name: "address[]",
        parse: (argName, strValue) => strValue.split(","),
        validate: (argName, value) => {
            const isValid = Array.isArray(value) && value.every(ethereumjs_util_1.isValidAddress);
            if (!isValid) {
                throw new errors_1.HardhatError(errors_list_1.ERRORS.ARGUMENTS.INVALID_VALUE_FOR_TYPE, {
                    value,
                    name: argName,
                    type: "address[]",
                });
            }
        },
    },
};
//# sourceMappingURL=params.js.map