"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./utils/deploy-utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.task("deploy-RevenueForwarder")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexus = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const zusd = networkAddressFactory_1.resolveAddress("zUSD", chain, "address");
    const keeper = "0xdccb7a6567603af223c090be4b9c83eced210f18";
    const forwarder = "0xd0f0F590585384AF7AB420bE1CFB3A3F8a82D775";
    await deploy_utils_1.deployContract(new generated_1.RevenueForwarder__factory(signer), "RevenueForwarder", [nexus, zusd, keeper, forwarder]);
});
module.exports = {};
//# sourceMappingURL=deployRevenueForwarder.js.map