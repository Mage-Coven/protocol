"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_fork_polygon_config_1 = __importDefault(require("./hardhat-fork-polygon.config"));
require("./tasks/deployEmissionsController");
require("./tasks/deployIntegration");
require("./tasks/deployFeeders");
require("./tasks/deployPolygon");
require("./tasks/deployUnwrapper");
require("./tasks/bridge");
require("./tasks/emissions");
require("./tasks/feeder");
require("./tasks/masset");
require("./tasks/zUSD");
require("./tasks/token");
require("./tasks/ops");
require("./tasks/rewards");
require("./tasks/save");
require("./tasks/SaveWrapper");
exports.default = hardhat_fork_polygon_config_1.default;
//# sourceMappingURL=tasks-fork-polygon.config.js.map