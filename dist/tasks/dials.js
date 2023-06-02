"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("@utils/math");
const config_1 = require("hardhat/config");
require("ts-node/register");
require("tsconfig-paths/register");
const generated_1 = require("types/generated");
const utils_1 = require("./utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const signerFactory_1 = require("./utils/signerFactory");
const snap_utils_1 = require("./utils/snap-utils");
/**
 * @dev This is a fork of EmissionsController.calculateRewards, any change to the smart contract should be replicated here.
 *
 * @param {Array<BN>} latestDialVotes
 * @param {Array<DialData>} dialsData
 * @param {BN} emissionForEpoch
 * @return {Object}  - Calculation rewards details { distributionAmounts, totalDialVotes, dialsData}
 */
const calculateRewards = (latestDialVotes, dialsData, emissionForEpoch) => {
    const dialLen = latestDialVotes.length;
    // const dialVotes: Array<BN> = Array(dialLen).fill(BN.from(0))
    const dials = [...dialsData];
    // 2.0 - Calculate the total amount of dial votes ignoring any disabled dials
    const dialVotes = dialsData.map((dial, i) => (dial.disabled ? math_1.BN.from(0) : latestDialVotes[i]));
    const totalDialVotes = dialVotes.reduce(math_1.sum);
    // 3.0 - Deal with the capped dials
    const distributionAmounts = Array(dialLen).fill(math_1.BN.from(0));
    let postCappedVotes = totalDialVotes;
    let postCappedEmission = emissionForEpoch;
    for (let k = 0; k < dialLen; k += 1) {
        const dialData = dialsData[k];
        // 3.1 - If the dial has a cap and isn't disabled, check if it's over the threshold
        if (dialData.cap > 0 && !dialData.disabled) {
            const maxVotes = math_1.BN.from(dialData.cap).mul(totalDialVotes).div(100);
            // If dial has more votes than its cap
            if (dialVotes[k].gt(maxVotes)) {
                // Calculate amount of rewards for the dial
                distributionAmounts[k] = math_1.BN.from(dialData.cap).mul(emissionForEpoch).div(100);
                // Add dial rewards to balance in storage.
                // Is addition and not set as rewards could have been donated.
                dials[k] = { ...dials[k], balance: dials[k].balance.add(distributionAmounts[k]) };
                // Remove dial votes from total votes
                postCappedVotes = postCappedVotes.sub(dialVotes[k]);
                // Remove capped rewards from total reward
                postCappedEmission = postCappedEmission.sub(distributionAmounts[k]);
                // Set to zero votes so it'll be skipped in the next loop
                dialVotes[k] = math_1.BN.from(0);
            }
        }
    }
    // 4.0 - Calculate the distribution amounts for each dial
    for (let l = 0; l < dialLen; l += 1) {
        // Skip dial if no votes, disabled or was over cap
        if (!dialVotes[l].eq(math_1.BN.from(0)) && !postCappedVotes.eq(math_1.BN.from(0))) {
            // Calculate amount of rewards for the dial & set storage
            distributionAmounts[l] = dialVotes[l].mul(postCappedEmission).div(postCappedVotes);
            dials[l] = { ...dials[l], balance: dials[l].balance.add(distributionAmounts[l]) };
        }
    }
    return { distributionAmounts, totalDialVotes, dialsData: dials };
};
const dialNames = [
    "ZENO Staking Contract",
    "BPT Staking Contract",
    "zUSD Vault",
    "mBTC Vault",
    "GUSD FP Vault",
    "BUSD FP Vault",
    "alUSD FP Vault",
    "RAI FP Vault",
    "FEI FP Vault",
    "HBTC FP Vault",
    "tBTCv2 FP Vault",
    "Polygon zUSD Vault",
    "Polygon FRAX Farm",
    "Polygon Balancer Pool",
    "Treasury DAO",
    "Votium",
    "Visor Finance",
];
const dialsDetailsToString = (dialsDetails) => dialsDetails
    .map((dd, i) => `${dialNames[i].padStart(21)}\t${utils_1.usdFormatter(dd.voteWeight, 18, 5, 2)}\t${utils_1.usdFormatter(dd.distributed)}\t${utils_1.usdFormatter(dd.donated)}\t ${utils_1.usdFormatter(dd.rewards)}`)
    .join("\n");
const dialsDetailsToCsv = (dialsDetails) => dialsDetails
    .map((dd, i) => `${dd.dialId.toString().padStart(2)}, ${dialNames[i].padStart(21)}, ${utils_1.usdFormatter(dd.voteWeight, 18, 5, 2)}, ${utils_1.usdFormatter(dd.distributed)}, ${utils_1.usdFormatter(dd.donated)}, ${utils_1.usdFormatter(dd.rewards)}`)
    .join("\n");
const outputDialsSnap = (dialsSnap) => {
    if (!dialsSnap.csv) {
        console.log(`\nEmissions Controller Dials Snap at epoch ${dialsSnap.nextEpoch}`);
        console.log(`\t\t Name\tPercent\t   Distributed\t\tDonated\t\t  Total`);
        console.log(dialsDetailsToString(dialsSnap.dialsDetails));
        console.log(`Totals\t\t\t\t${utils_1.usdFormatter(dialsSnap.totalDistributed)}\t${utils_1.usdFormatter(dialsSnap.totalDonated)}\t ${utils_1.usdFormatter(dialsSnap.totalRewards)}`);
        console.log("ZENO in Emissions Controller", utils_1.usdFormatter(dialsSnap.emissionsControllerBalance));
    }
    else {
        console.log(`ID, Name, Percent, Distributed, Donated, Total`);
        console.log(dialsDetailsToCsv(dialsSnap.dialsDetails));
    }
};
/**
 *
 *  1.- For each dial in the Emissions Controller
 *      1.1- Get the weighted votes as a percentage of the total weighted votes across all dials -  from voteHistory
 *      1.2- Calculate distributed ZENO rewards for the next run factoring in disabled dials and reward caps for the staking contracts - topLineEmission
 *      1.3- Get the current donated ZENO rewards - balance  from DialData
 *      1.4- Total rewards = distributed + donated rewards
 *   2.- Total ZENO rewards to be distributed across all dials - basically the sum
 *   3.- Total ZENO rewards currently donated across all dials - the sum of balance of each dial
 *   4.- Total ZENO rewards across all dials = distributed + donated
 *   5.- Get ZENO balance in the Emissions Controller  - // (REWARD_TOKEN.balanceOf(emissionsController))
 */
config_1.task("dials-snap", "Snaps Emissions Controller's dials")
    .addOptionalParam("csv", "Output in comma separated values", false, config_1.types.boolean)
    .addOptionalParam("block", "Block number. (default: current block)", 0, config_1.types.int)
    .setAction(async (_taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const block = await snap_utils_1.getBlock(hre.ethers, _taskArgs.block);
    const emissionsControllerAddress = networkAddressFactory_1.getChainAddress("EmissionsController", chain);
    const emissionsController = generated_1.EmissionsController__factory.connect(emissionsControllerAddress, signer);
    const zenoToken = generated_1.IERC20__factory.connect(utils_1.ZENO.address, signer);
    // Get current epoch  and simulate next epoch by adding one week
    const [, lastEpoch] = await emissionsController.epochs({
        blockTag: block.blockNumber,
    });
    const nextEpoch = lastEpoch + 1;
    // 1.- For each dial in the Emissions Controller store its details
    const dialsDetails = [];
    // 2.- Total ZENO rewards to be distributed across all dials - basically the sum
    const totalDistributed = await emissionsController.topLineEmission(nextEpoch, {
        blockTag: block.blockNumber,
    });
    // 3.- Total ZENO rewards currently donated across all dials - the sum of balance of each dial
    let totalDonated = math_1.BN.from(0);
    // 4.- Total ZENO rewards across all dials = distributed + donated
    let totalRewards = math_1.BN.from(0);
    // 5.- Get ZENO balance in the Emissions Controller
    const emissionsControllerBalance = await zenoToken.balanceOf(emissionsController.address, {
        blockTag: block.blockNumber,
    });
    // Get the latest dial votes, it helps to know the len of dials.
    const latestDialVotes = await emissionsController.getDialVotes({
        blockTag: block.blockNumber,
    });
    const dialsData = [];
    for (let i = 0; i < latestDialVotes.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        dialsData.push(await emissionsController.dials(i, {
            blockTag: block.blockNumber,
        }));
    }
    // Gets the total vote of all enabled dial
    const totalDialVotes = dialsData
        .filter((dial) => !dial.disabled)
        .map((_dial, i) => latestDialVotes[i])
        .reduce(math_1.sum);
    // Calculate distributed ZENO rewards for the next run factoring in disabled dials and reward caps for the staking contracts
    const calculatedRewards = calculateRewards(latestDialVotes, dialsData, totalDistributed);
    latestDialVotes.forEach(async (vote, dialId) => {
        const dialData = dialsData[dialId];
        // if the dial is disabled assign 0 to the vote
        const adjustedVote = math_1.BN.from(dialData.disabled ? 0 : vote);
        // 1.1- Get the weighted votes as a percentage of the total weighted votes across all dials (adjust if they are disabled)
        const voteWeight = math_1.percentToWeight(totalDialVotes.eq(0) ? math_1.BN.from(0) : adjustedVote.mul(10000).div(totalDialVotes));
        // 1.2- Calculate distributed ZENO rewards for the next run factoring in disabled dials and reward caps
        const distributed = calculatedRewards.distributionAmounts[dialId];
        // 1.3- Get the current donated ZENO rewards:  from DialData.balance
        const donated = dialData.balance;
        // 1.4- Total rewards = distributed + donated rewards
        const rewards = donated.add(distributed);
        totalDonated = totalDonated.add(donated);
        totalRewards = totalRewards.add(rewards);
        dialsDetails.push({ dialId, voteWeight, distributed, donated, rewards });
    });
    outputDialsSnap({
        nextEpoch,
        dialsDetails,
        totalDistributed,
        totalDonated,
        totalRewards,
        emissionsControllerBalance,
        ...calculatedRewards,
        csv: _taskArgs.csv,
    });
});
module.exports = {};
//# sourceMappingURL=dials.js.map