"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignerAccount = exports.getSigner = exports.getDefenderSigner = void 0;
const ethers_1 = require("ethers");
const ethers_2 = require("defender-relay-client/lib/ethers");
const fork_1 = require("@utils/fork");
const regex_1 = require("@utils/regex");
const networkAddressFactory_1 = require("./networkAddressFactory");
const getDefenderSigner = async (speed = "fast") => {
    if (!process.env.DEFENDER_API_KEY || !process.env.DEFENDER_API_SECRET) {
        console.error(`Defender env vars DEFENDER_API_KEY and/or DEFENDER_API_SECRET have not been set`);
        process.exit(1);
    }
    if (!["safeLow", "average", "fast", "fastest"].includes(speed)) {
        console.error(`Defender Relay Speed param must be either 'safeLow', 'average', 'fast' or 'fastest'. Not "${speed}"`);
        process.exit(2);
    }
    const credentials = {
        apiKey: process.env.DEFENDER_API_KEY,
        apiSecret: process.env.DEFENDER_API_SECRET,
    };
    const provider = new ethers_2.DefenderRelayProvider(credentials);
    const signer = new ethers_2.DefenderRelaySigner(credentials, provider, { speed });
    return signer;
};
exports.getDefenderSigner = getDefenderSigner;
let signerInstance;
const getSigner = async (hre = {}, speed = "fast", useCache = true, key) => {
    // If already initiated a signer, just return the singleton instance
    if (useCache && signerInstance)
        return signerInstance;
    const pk = key || process.env.PRIVATE_KEY;
    if (pk) {
        if (!pk.match(regex_1.privateKey)) {
            throw Error(`Invalid format of private key`);
        }
        const wallet = new ethers_1.Wallet(pk, hre.ethers.provider);
        console.log(`Using signer ${await wallet.getAddress()} from private key`);
        return wallet;
    }
    // If connecting to a forked chain
    if (["tasks-fork.config.ts", "tasks-fork-polygon.config.ts"].includes(hre === null || hre === void 0 ? void 0 : hre.hardhatArguments.config)) {
        const chain = networkAddressFactory_1.getChain(hre);
        // If IMPERSONATE environment variable has been set
        if (process.env.IMPERSONATE) {
            let address = process.env.IMPERSONATE;
            if (!address.match(regex_1.ethereumAddress)) {
                address = networkAddressFactory_1.resolveAddress(process.env.IMPERSONATE, chain);
                if (!address)
                    throw Error(`Environment variable IMPERSONATE is an invalid Ethereum address or contract name`);
            }
            console.log(`Impersonating account ${address} from IMPERSONATE environment variable`);
            signerInstance = await fork_1.impersonate(address);
            return signerInstance;
        }
        const address = networkAddressFactory_1.getChainAddress("OperationsSigner", chain);
        if (address) {
            console.log(`Impersonating account ${address} resolved from "OperationsSigner"`);
            signerInstance = await fork_1.impersonate(address);
            return signerInstance;
        }
        // Return a random account with no Ether
        signerInstance = ethers_1.Wallet.createRandom().connect(hre.ethers.provider);
        console.log(`Impersonating random account ${await signerInstance.getAddress()}`);
        return signerInstance;
    }
    // If using Defender Relay and not a forked chain
    // this will work against test networks like Ropsten or Polygon's Mumbai
    if (process.env.DEFENDER_API_KEY && process.env.DEFENDER_API_SECRET) {
        signerInstance = await exports.getDefenderSigner(speed);
        return signerInstance;
    }
    // Return a random account with no Ether.
    // This is typically used for readonly tasks. eg reports
    signerInstance = ethers_1.Wallet.createRandom().connect(hre.ethers.provider);
    return signerInstance;
};
exports.getSigner = getSigner;
const getSignerAccount = async (hre = {}, speed = "fast") => {
    const signer = await exports.getSigner(hre, speed);
    return {
        signer,
        address: await signer.getAddress(),
    };
};
exports.getSignerAccount = getSignerAccount;
//# sourceMappingURL=signerFactory.js.map