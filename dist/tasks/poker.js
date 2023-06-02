"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const units_1 = require("@ethersproject/units");
const constants_1 = require("@utils/constants");
const math_1 = require("@utils/math");
const ethers_multicall_1 = require("ethers-multicall");
const graphql_request_1 = require("graphql-request");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const tokens_1 = require("./utils/tokens");
const maxVZENO = math_1.simpleToExactAmount(600000, 18);
const maxBoost = math_1.simpleToExactAmount(3, 18);
const minBoost = math_1.simpleToExactAmount(1, 18);
const floor = math_1.simpleToExactAmount(98, 16);
const coeff = math_1.BN.from(9);
const calcBoost = (raw, vZENO, priceCoefficient, decimals = 18) => {
    // min(m, max(d, (d * 0.95) + c * min(vZENO, f) / USD^b))
    const scaledBalance = raw.mul(priceCoefficient).div(math_1.simpleToExactAmount(1, 18));
    if (scaledBalance.lt(math_1.simpleToExactAmount(1, decimals)))
        return minBoost;
    let denom = parseFloat(units_1.formatUnits(scaledBalance));
    denom **= 0.75;
    const scaledZENO = vZENO.div(12);
    const flooredZENO = scaledZENO.gt(maxVZENO) ? maxVZENO : scaledZENO;
    let rhs = floor.add(flooredZENO.mul(coeff).div(10).mul(constants_1.fullScale).div(math_1.simpleToExactAmount(denom)));
    rhs = rhs.gt(minBoost) ? rhs : minBoost;
    return rhs.gt(maxBoost) ? maxBoost : rhs;
};
const getAccountBalanceMap = async (accounts, tokenAddress, signer) => {
    const abi = ["function balanceOf(address owner) view returns (uint256)", "function decimals() view returns (uint8)"];
    const token = new ethers_multicall_1.Contract(tokenAddress, abi);
    const ethcallProvider = new ethers_multicall_1.Provider(signer.provider);
    await ethcallProvider.init();
    const callPromises = accounts.map((account) => token.balanceOf(account));
    console.log(`About to get balances for ${accounts.length} accounts`);
    const balances = (await ethcallProvider.all(callPromises));
    const accountBalances = {};
    balances.forEach((balance, i) => {
        accountBalances[accounts[i]] = balance;
    });
    return accountBalances;
};
config_1.task("over-boost", "Pokes accounts that are over boosted")
    .addFlag("update", "Will send a poke transactions to the Poker contract")
    .addOptionalParam("account", "Address of account to check or poke", undefined, config_1.types.string)
    .addOptionalParam("minZenoDiff", "Min amount of vZENO over boosted. 300 = 0.3 boost", 300, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const stkZENO = await networkAddressFactory_1.getChainAddress("StakedTokenZENO", chain);
    const stkMBPT = await networkAddressFactory_1.getChainAddress("StakedTokenBPT", chain);
    let idFilter = "";
    if (taskArgs.account) {
        const vaults = [tokens_1.zUSD, tokens_1.mBTC, tokens_1.GUSD, tokens_1.BUSD, tokens_1.HBTC, tokens_1.TBTC, tokens_1.TBTCv2, tokens_1.alUSD, tokens_1.RAI, tokens_1.FEI];
        const vaultAddresses = vaults.map((v) => v.vault.toLowerCase());
        const vaultAccountIds = vaultAddresses.map((vaultAddress) => `"${vaultAddress}.${taskArgs.account.toLowerCase()}" `);
        idFilter = `id_in: [${vaultAccountIds}] `;
    }
    const gqlClient = new graphql_request_1.GraphQLClient("https://api.studio.thegraph.com/query/948/xzeno-feeder-pools-and-vaults/v0.0.8");
    const query = graphql_request_1.gql `
            {
                boostedSavingsVaults {
                    id
                    boostCoeff
                    priceCoeff
                    stakingToken {
                        symbol
                    }
                    accounts(where: { ${idFilter} rawBalance_gt: "0" }) {
                        id
                        rawBalance
                        boostedBalance
                        rewardPerTokenPaid
                        rewards
                        lastClaim
                        lastAction
                    }
                }
                _meta {
                    block {
                        number
                    }
                }
            }
        `;
    const gqlData = await gqlClient.request(query);
    // eslint-disable-next-line no-underscore-dangle
    const blockNumber = gqlData._meta.block.number;
    console.log(`Results for block number ${blockNumber}`);
    // Maps GQL to a list if accounts (addresses) in each vault
    const vaultAccounts = gqlData.boostedSavingsVaults.map((vault) => vault.accounts.map((account) => account.id.split(".")[1]));
    const accountsWithDuplicates = vaultAccounts.flat();
    const accountsUnique = [...new Set(accountsWithDuplicates)];
    const zenoBalances = await getAccountBalanceMap(accountsUnique, stkZENO, signer);
    const bptBalances = await getAccountBalanceMap(accountsUnique, stkMBPT, signer);
    const accountBalances = {};
    Object.keys(zenoBalances).forEach((account) => {
        accountBalances[account] = zenoBalances[account].add(bptBalances[account]);
    });
    const pokeVaultAccounts = [];
    // For each Boosted Vault
    const vaults = gqlData.boostedSavingsVaults.filter((vault) => vault.id !== tokens_1.zUSD.vault.toLocaleLowerCase());
    for (const vault of vaults) {
        const boostVault = generated_1.BoostedVault__factory.connect(vault.id, signer);
        const priceCoeff = await boostVault.priceCoeff();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const overBoosted = [];
        console.log(`\nVault with id ${vault.id} for token ${vault.stakingToken.symbol}, ${vault.accounts.length} accounts, price coeff ${priceCoeff}`);
        console.log("Account, Raw Balance, Boosted Balance, Boost Balance USD, vZENO balance, Boost Actual, Boost Expected, Boost Diff");
        // For each account in the boosted savings vault
        vault.accounts.forEach((account) => {
            const boostActual = math_1.BN.from(account.boostedBalance).mul(1000).div(account.rawBalance).toNumber();
            const accountId = account.id.split(".")[1];
            const boostExpected = calcBoost(math_1.BN.from(account.rawBalance), accountBalances[accountId], priceCoeff)
                .div(math_1.simpleToExactAmount(1, 15))
                .toNumber();
            const boostDiff = boostActual - boostExpected;
            // Calculate how much the boost balance is in USD = balance balance * price coefficient / 1e18
            const boostBalanceUsd = math_1.BN.from(account.boostedBalance).mul(priceCoeff).div(math_1.simpleToExactAmount(1));
            // Identify accounts with more than 20% over their boost and boost balance > 50,000 USD
            if (boostDiff > taskArgs.minZenoDiff && boostBalanceUsd.gt(math_1.simpleToExactAmount(50000))) {
                overBoosted.push({
                    ...account,
                    boostActual,
                    boostExpected,
                    boostDiff,
                    boostBalanceUsd,
                });
            }
            console.log(`${accountId}, ${units_1.formatUnits(account.rawBalance)}, ${units_1.formatUnits(account.boostedBalance)}, ${units_1.formatUnits(boostBalanceUsd)}, ${units_1.formatUnits(accountBalances[accountId])}, ${units_1.formatUnits(boostActual, 3)}, ${units_1.formatUnits(boostExpected, 3)}, ${units_1.formatUnits(boostDiff, 3)}`);
        });
        console.log(`${overBoosted.length} of ${vault.accounts.length} over boosted for ${vault.stakingToken.symbol} vault ${vault.id}`);
        console.log("Account, Over Boosted by, Boost USD balance");
        overBoosted.forEach((account) => {
            const accountId = account.id.split(".")[1];
            console.log(`${accountId} ${units_1.formatUnits(account.boostDiff, 3)}, ${units_1.formatUnits(account.boostBalanceUsd)}`);
        });
        const pokeAccounts = overBoosted.map((account) => account.id.split(".")[1]);
        pokeVaultAccounts.push({
            boostVault: vault.id,
            accounts: pokeAccounts,
        });
    }
    if (taskArgs.update) {
        const pokerAddress = networkAddressFactory_1.getChainAddress("Poker", chain);
        console.log(`About to poke ${pokeVaultAccounts.length} vaults`);
        const poker = generated_1.Poker__factory.connect(pokerAddress, signer);
        const tx = await poker.poke(pokeVaultAccounts);
        await deploy_utils_1.logTxDetails(tx, "poke Poker");
    }
});
config_1.task("deployPoker", "Deploys the Poker contract").setAction(async (_, hre) => {
    const deployer = await signerFactory_1.getSigner(hre);
    await deploy_utils_1.deployContract(new generated_1.Poker__factory(deployer), "Poker");
});
module.exports = {};
//# sourceMappingURL=poker.js.map