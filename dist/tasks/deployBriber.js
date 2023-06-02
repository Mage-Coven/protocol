"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./utils/deploy-utils");
const signerFactory_1 = require("./utils/signerFactory");
const etherscan_1 = require("./utils/etherscan");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.task("deploy-GaugeBriber")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexus = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const zusd = networkAddressFactory_1.resolveAddress("zUSD", chain, "address");
    const keeper = "0xb81473f20818225302b8fffb905b53d58a793d84";
    const briber = "0xd0f0F590585384AF7AB420bE1CFB3A3F8a82D775";
    const childRecipient = networkAddressFactory_1.resolveAddress("RevenueRecipient", chain);
    const gaugeBriber = await deploy_utils_1.deployContract(new generated_1.GaugeBriber__factory(signer), "GaugeBriber", [
        nexus,
        zusd,
        keeper,
        briber,
        childRecipient,
    ]);
    await etherscan_1.verifyEtherscan(hre, {
        address: gaugeBriber.address,
        contract: "contracts/buy-and-make/GaugeBriber.sol:GaugeBriber",
    });
});
config_1.task("briber-forward")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    // LOAD
    const savingsManagerAddr = networkAddressFactory_1.resolveAddress("SavingsManager", chain);
    const zusdAddr = networkAddressFactory_1.resolveAddress("zUSD", chain, "address");
    const recipientAddr = "0x8f2A9Ce873AEBd7a212A942B12b2209Fa00831D2";
    const briber = "0xd0f0F590585384AF7AB420bE1CFB3A3F8a82D775";
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddr, signer);
    const zusd = generated_1.ERC20__factory.connect(zusdAddr, signer);
    const recipient = generated_1.GaugeBriber__factory.connect(recipientAddr, signer);
    // EXEC
    const bal0 = await zusd.balanceOf(briber);
    console.log(bal0.toString());
    // 1. Forward
    let tx = await savingsManager.distributeUnallocatedInterest(zusdAddr);
    await tx.wait(2);
    // 2. Distribute
    tx = await recipient.forward();
    await tx.wait(2);
    // CHECK
    const bal1 = await zusd.balanceOf(briber);
    console.log(bal1.toString());
});
module.exports = {};
//# sourceMappingURL=deployBriber.js.map