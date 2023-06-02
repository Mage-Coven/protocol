"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalancerPolygonReport = exports.fetchBalancerReport = void 0;
const axios_1 = __importDefault(require("axios"));
const math_1 = require("@utils/math");
const tokens_1 = require("./tokens");
const deploy_utils_1 = require("./deploy-utils");
const log = deploy_utils_1.logger("emission", "disperse-bal");
const REPORT_URL = "https://raw.githubusercontent.com/balancer-labs/bal-mining-scripts/master/reports";
/**
 * Download a report report from balancer labs repository, it contains the distribution of rewards that need to be dispersed.
 *  It downloads the report from the following URL
 * https://raw.githubusercontent.com/balancer-labs/bal-mining-scripts/master/reports/WEEK/__polygon_0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0.json
 *
 * @param {number} report  - Report number from the bal-mining-script repo. eg 79
 * @return {Promise}  -  {Promise<Array<{ address: string, amount: string }>>}
 */
const fetchBalancerReport = async (report) => {
    const url = `${REPORT_URL}/${report}/__polygon_${tokens_1.PZENO.address}.json`;
    log(`fetches balancer-labs report ${report}`);
    log(`downloads report from url :${url}`);
    const response = await axios_1.default.get(url);
    return Object.entries(response.data).map(([address, amount]) => {
        const amountStr = typeof amount === "string" ? amount : amount;
        return { address, amount: amountStr };
    });
};
exports.fetchBalancerReport = fetchBalancerReport;
/**
 * Gets the rewards values to be disperse via DisperserForwarder of a given report, the values are scaled to match the total ZENO balance.
 * @dev The Polygon ZENO rewards for  will be in the __polygon_0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0.json file under the report folder with a week number.
 * eg https://github.com/balancer-labs/bal-mining-scripts/blob/master/reports/79/__polygon_0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0.json
 *  The amounts in this file assumes 15k ZENO is being distributed but this will not be the case with the emissions controller.
 *  Need to proportion the ZENO balance in the DisperseForwarder contract to the recipients based off the bal-mining-script report.
 *
 * @param {number} report - Report number from the bal-mining-script repo. eg 79
 *  https://github.com/balancer-labs/bal-mining-scripts/blob/master/reports/WEEK
 * @param {BN} zenoBalance - The total amount of zeno to disperse, values on the report are scaled to match the total amount of ZENO available
 * @return {Promise}  {Promise<BalancerPolygonReport>}
 */
const getBalancerPolygonReport = async (report, zenoBalance) => {
    const disperseRecipients = [];
    const disperseValues = [];
    const balancerRewards = await exports.fetchBalancerReport(report);
    let disperseTotal = math_1.BN.from(0);
    // Balance with 18 decimals
    const balancerTotal = balancerRewards.reduce((sum, reward) => sum.add(math_1.simpleToExactAmount(reward.amount, 18)), math_1.BN.from(0));
    balancerRewards.forEach((reward) => {
        // calculate the equivalent to disperse keeping same ratio of the total reward amount
        const disperseRewardAmount = math_1.simpleToExactAmount(reward.amount, 18).mul(zenoBalance).div(balancerTotal);
        disperseRecipients.push(reward.address);
        disperseValues.push(disperseRewardAmount);
        disperseTotal = disperseTotal.add(disperseRewardAmount);
    });
    log(`total zeno token amount to disperser[${disperseTotal.toString()}], total recipients count [${disperseRecipients.length}]`);
    return {
        disperser: { total: disperseTotal, recipients: disperseRecipients, values: disperseValues },
        balancer: { total: balancerTotal, rewards: balancerRewards },
    };
};
exports.getBalancerPolygonReport = getBalancerPolygonReport;
//# sourceMappingURL=emission-disperse-bal.js.map