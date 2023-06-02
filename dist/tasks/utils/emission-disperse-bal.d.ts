import { BN } from "@utils/math";
interface DisperseDetails {
    total: BN;
    recipients: Array<string>;
    values: Array<BN>;
}
interface BalancerReward {
    address: string;
    amount: string;
}
interface BalancerDetails {
    total: BN;
    rewards: Array<BalancerReward>;
}
interface BalancerPolygonReport {
    disperser: DisperseDetails;
    balancer: BalancerDetails;
}
/**
 * Download a report report from balancer labs repository, it contains the distribution of rewards that need to be dispersed.
 *  It downloads the report from the following URL
 * https://raw.githubusercontent.com/balancer-labs/bal-mining-scripts/master/reports/WEEK/__polygon_0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0.json
 *
 * @param {number} report  - Report number from the bal-mining-script repo. eg 79
 * @return {Promise}  -  {Promise<Array<{ address: string, amount: string }>>}
 */
export declare const fetchBalancerReport: (report: number) => Promise<Array<{
    address: string;
    amount: string;
}>>;
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
export declare const getBalancerPolygonReport: (report: number, zenoBalance: BN) => Promise<BalancerPolygonReport>;
export {};
