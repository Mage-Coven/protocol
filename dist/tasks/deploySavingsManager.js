"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const constants_1 = require("@utils/constants");
const deploy_utils_1 = require("./utils/deploy-utils");
const signerFactory_1 = require("./utils/signerFactory");
const etherscan_1 = require("./utils/etherscan");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.task("deploy-SavingsManager")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexus = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const revenueRecipient = networkAddressFactory_1.resolveAddress("RevenueRecipient", chain);
    const zusd = networkAddressFactory_1.resolveAddress("zUSD", chain, "address");
    const zusdSave = networkAddressFactory_1.resolveAddress("zUSD", chain, "savings");
    const mbtc = networkAddressFactory_1.resolveAddress("mBTC", chain, "address");
    const mbtcSave = networkAddressFactory_1.resolveAddress("mBTC", chain, "savings");
    const savingsManager = await deploy_utils_1.deployContract(new generated_1.SavingsManager__factory(signer), "SavingsManager", [
        nexus,
        [zusd, mbtc],
        [zusdSave, mbtcSave],
        [revenueRecipient, revenueRecipient],
        math_1.simpleToExactAmount(9, 17),
        constants_1.ONE_WEEK,
    ]);
    await etherscan_1.verifyEtherscan(hre, {
        address: savingsManager.address,
        contract: "contracts/savings/SavingsManager.sol:SavingsManager",
    });
});
module.exports = {};
//# sourceMappingURL=deploySavingsManager.js.map