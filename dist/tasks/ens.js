"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const crypto_1 = require("crypto");
const constants_1 = require("@utils/constants");
const EnsEthRegistrarController__factory_1 = require("types/generated/factories/EnsEthRegistrarController__factory");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.subtask("ens-commit", "Registers a commitment to claiming an ENS domain")
    .addParam("domain", "Domain name without the .eth extension.", "xzeno", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const signerAddress = await signer.getAddress();
    const controllerAddress = networkAddressFactory_1.getChainAddress("ENSRegistrarController", chain);
    const controller = EnsEthRegistrarController__factory_1.EnsEthRegistrarController__factory.connect(controllerAddress, signer);
    // Generate a random value to mask our commitment
    const buf = crypto_1.randomBytes(32);
    const secret = `0x${buf.toString("hex")}`;
    const domainName = taskArgs.domain;
    const commitment = await controller.makeCommitment(domainName, signerAddress, secret);
    console.log(`Comitting to ENS domain ${domainName}.eth with secret ${secret}, owner ${signerAddress} and commitment ${commitment}`);
    const tx = await controller.commit(commitment);
    deploy_utils_1.logTxDetails(tx, "commit");
});
config_1.task("ens-commit").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("ens-register", "Registers an ENS domain")
    .addParam("domain", "Domain name without the .eth extension.", "xzeno", config_1.types.string)
    .addParam("secret", "Secret from the previous commit transaction", undefined, config_1.types.string)
    .addOptionalParam("years", "Number of years to register the domain.", 1, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const signerAddress = await signer.getAddress();
    const controllerAddress = networkAddressFactory_1.getChainAddress("ENSRegistrarController", chain);
    const resolveAddress = networkAddressFactory_1.getChainAddress("ENSResolver", chain);
    const controller = EnsEthRegistrarController__factory_1.EnsEthRegistrarController__factory.connect(controllerAddress, signer);
    const domainName = taskArgs.domain;
    const { secret, years } = taskArgs;
    console.log(`Registering ENS domain ${domainName}.eth with secret ${secret}, ENS resolver ${resolveAddress}, owner ${signerAddress}`);
    const tx = await controller.registerWithConfig(domainName, signerAddress, constants_1.ONE_YEAR.mul(years), secret, resolveAddress, signerAddress);
    deploy_utils_1.logTxDetails(tx, "registerWithConfig ");
});
config_1.task("ens-register").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=ens.js.map