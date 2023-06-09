"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = exports.RmBPT = exports.mBPT = exports.RBAL = exports.PBAL = exports.BAL = exports.cyZUSD = exports.CREAM = exports.COMP = exports.stkAAVE = exports.AAVE = exports.PWMATIC = exports.vZENO = exports.RZENO = exports.PZENO = exports.ZENO = exports.TBTCv2 = exports.TBTC = exports.HBTC = exports.WBTC = exports.sBTC = exports.renBTC = exports.ALCX = exports.alUSD = exports.MFRAX = exports.PFRAX = exports.FRAX = exports.TRIBE = exports.FEI = exports.FLX = exports.RAI = exports.BUSD = exports.GUSD = exports.PDAI = exports.PUSDT = exports.PUSDC = exports.DAI = exports.USDT = exports.USDC = exports.sUSD = exports.RmBTC = exports.RzUSD = exports.MzUSD = exports.PzUSD = exports.mBTC = exports.zUSD = exports.assetAddressTypes = exports.isToken = exports.Platform = exports.Chain = void 0;
const constants_1 = require("@utils/constants");
const regex_1 = require("@utils/regex");
var Chain;
(function (Chain) {
    Chain[Chain["mainnet"] = 0] = "mainnet";
    Chain[Chain["polygon"] = 1] = "polygon";
    Chain[Chain["ropsten"] = 2] = "ropsten";
    Chain[Chain["mumbai"] = 3] = "mumbai";
})(Chain = exports.Chain || (exports.Chain = {}));
var Platform;
(function (Platform) {
    Platform[Platform["Compound"] = 0] = "Compound";
    Platform[Platform["Aave"] = 1] = "Aave";
})(Platform = exports.Platform || (exports.Platform = {}));
function isToken(asset) {
    const token = asset;
    return token.symbol !== undefined && token.address.match(regex_1.ethereumAddress) && token.chain !== undefined && token.decimals !== undefined;
}
exports.isToken = isToken;
exports.assetAddressTypes = [
    "address",
    "savings",
    "vault",
    "feederPool",
    "integrator",
    "liquidityProvider",
    "platformTokenVendor",
    "bridgeForwarder",
    "bridgeRecipient",
];
// xZeno on mainnet
exports.zUSD = {
    symbol: "zUSD",
    address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    savings: "0x30647a72dc82d7fbb1123ea74716ab8a317eac19",
    vault: "0x78BefCa7de27d07DC6e71da295Cc2946681A6c7B",
};
exports.mBTC = {
    symbol: "mBTC",
    address: "0x945Facb997494CC2570096c74b5F66A3507330a1",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    savings: "0x17d8CBB6Bce8cEE970a4027d1198F6700A7a6c24",
    vault: "0xF38522f63f40f9Dd81aBAfD2B8EFc2EC958a3016",
};
// xZeno on Polygon mainnet
exports.PzUSD = {
    symbol: "zUSD",
    address: "0xE840B73E5287865EEc17d250bFb1536704B43B21",
    integrator: "0xeab7831c96876433dB9B8953B4e7e8f66c3125c3",
    chain: Chain.polygon,
    decimals: 18,
    quantityFormatter: "USD",
    savings: "0x5290Ad3d83476CA6A2b178Cd9727eE1EF72432af",
    vault: "0x32aBa856Dc5fFd5A56Bcd182b13380e5C855aa29",
    platformTokenVendor: "0x7b19a4f4ee26037ffef77bc7d99f56209acc8db1",
    bridgeForwarder: "0x7206A7eB2fe1B8a66D4d35db98d68Cadc890FAca",
    bridgeRecipient: "0xd3778a18Ee00a6368A0e5D545cB3412886e5a04c",
};
exports.MzUSD = {
    symbol: "zUSD",
    address: "0x0f7a5734f208A356AB2e5Cf3d02129c17028F3cf",
    chain: Chain.mumbai,
    decimals: 18,
    quantityFormatter: "USD",
    bridgeForwarder: "0x1dAdDae168636fE28b5eA34F1b3D4ea9367e8b6F",
    bridgeRecipient: constants_1.DEAD_ADDRESS,
};
// Ropsten
exports.RzUSD = {
    symbol: "zUSD",
    address: "0x4E1000616990D83e56f4b5fC6CC8602DcfD20459",
    chain: Chain.ropsten,
    decimals: 18,
    quantityFormatter: "USD",
    savings: "0x5b7f01dAe6BCE656c9cA4175Eb3E406ADC6c7957",
    vault: "0xDEFc008BAC1e38F13F081DDD20acf89985DFa7C8",
};
exports.RmBTC = {
    symbol: "mBTC",
    address: "0x4A677A48A790f26eac4c97f495E537558Abf6A79",
    chain: Chain.ropsten,
    decimals: 18,
    quantityFormatter: "BTC",
    savings: "0xBfe31D984d688628d06Ae2Da1D640Cf5D9e242A5",
    vault: "0x7799BEEAf20120CC78f5cF2EB9C85e395B43bF4D",
};
// USD Main Pool Assets on Mainnet
exports.sUSD = {
    symbol: "sUSD",
    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xA2a3CAe63476891AB2d640d9a5A800755Ee79d6E",
    liquidityProvider: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.USDC = {
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chain: Chain.mainnet,
    platform: Platform.Compound,
    integrator: "0xD55684f4369040C12262949Ff78299f2BC9dB735",
    liquidityProvider: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    decimals: 6,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.USDT = {
    symbol: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xA2a3CAe63476891AB2d640d9a5A800755Ee79d6E",
    liquidityProvider: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
    decimals: 6,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.DAI = {
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xA2a3CAe63476891AB2d640d9a5A800755Ee79d6E",
    liquidityProvider: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
// USD Main Pool Assets on Polygon
exports.PUSDC = {
    symbol: "USDC",
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    chain: Chain.polygon,
    platform: Platform.Aave,
    integrator: "0xeab7831c96876433dB9B8953B4e7e8f66c3125c3",
    decimals: 6,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.PUSDT = {
    symbol: "USDT",
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    chain: Chain.polygon,
    platform: Platform.Aave,
    integrator: "0xeab7831c96876433dB9B8953B4e7e8f66c3125c3",
    decimals: 6,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.PDAI = {
    symbol: "DAI",
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    chain: Chain.polygon,
    platform: Platform.Aave,
    integrator: "0xeab7831c96876433dB9B8953B4e7e8f66c3125c3",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
// USD Feeder Pool Assets on Mainnet
exports.GUSD = {
    symbol: "GUSD",
    address: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xd51f062104D7c8eE7dB100878A454451ADFD2811",
    liquidityProvider: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583",
    decimals: 2,
    quantityFormatter: "USD",
    parent: "zUSD",
    feederPool: "0x4fB30C5A3aC8e85bC32785518633303C4590752d",
    vault: "0xAdeeDD3e5768F7882572Ad91065f93BA88343C99",
};
exports.BUSD = {
    symbol: "BUSD",
    address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xac98ffc901d6bB634be06f6d3fE63893b1aF6535",
    liquidityProvider: "0xA361718326c15715591c299427c62086F69923D9",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
    feederPool: "0xfE842e95f8911dcc21c943a1dAA4bd641a1381c6",
    vault: "0xD124B55f70D374F58455c8AEdf308E52Cf2A6207",
};
// NonPeggedFeederPool contains priceGetter
exports.RAI = {
    symbol: "RAI",
    address: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0x8CC6A1aE38743d453F2522C5228B775D145f43B7",
    liquidityProvider: "0xc9BC48c72154ef3e5425641a3c747242112a46AF",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
    feederPool: "0x36F944B7312EAc89381BD78326Df9C84691D8A5B",
    vault: "0xF93e0ddE0F7C48108abbD880DB7697A86169f13b",
    priceGetter: "0x07210B8871073228626AB79c296d9b22238f63cE",
};
// FLX token for RAI
exports.FLX = {
    symbol: "FLX",
    address: "0x6243d8cea23066d098a15582d81a598b4e8391f4",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
// FEI Feeder Pool Asset on Mainnet
exports.FEI = {
    symbol: "FEI",
    address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0x4094aec22f40f11c29941d144c3dc887b33f5504",
    liquidityProvider: "0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3",
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
    feederPool: "0x2F1423D27f9B20058d9D1843E342726fDF985Eb4",
    vault: "0xD24099Eb4CD604198071958655E4f2D263a5539B",
};
// TRIBE token for FEI
exports.TRIBE = {
    symbol: "TRIBE",
    address: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
// USD Feeder Pool Assets on Mainnet
exports.FRAX = {
    symbol: "FRAX",
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
// USD Feeder Pool Assets on Polygon
exports.PFRAX = {
    symbol: "FRAX",
    address: "0x104592a158490a9228070E0A8e5343B499e125D0",
    chain: Chain.polygon,
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
    feederPool: "0xB30a907084AC8a0d25dDDAB4E364827406Fd09f0",
    bridgeForwarder: "0x38dD64B51C1808b04493324f334350eBB3AE8d11",
    bridgeRecipient: "0xc425Fd9Ed3C892d849C9E1a971516da1C1B29696",
};
exports.MFRAX = {
    symbol: "FRAX",
    address: "0x8F6F8064A0222F138d56C077a7F27009BDBBE3B1",
    chain: Chain.mumbai,
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
// Alchemix
exports.alUSD = {
    symbol: "alUSD",
    address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
    feederPool: "0x4eaa01974B6594C0Ee62fFd7FEE56CF11E6af936",
    integrator: "0xd658d5fDe0917CdC9b10cAadf10E20d942572a7B",
    vault: "0x0997dDdc038c8A958a3A3d00425C16f8ECa87deb",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    parent: "zUSD",
};
exports.ALCX = {
    symbol: "ALCX",
    address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
// BTC
exports.renBTC = {
    symbol: "renBTC",
    address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
    chain: Chain.mainnet,
    decimals: 8,
    quantityFormatter: "BTC",
    parent: "mBTC",
};
exports.sBTC = {
    symbol: "sBTC",
    address: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "BTC",
    parent: "mBTC",
};
exports.WBTC = {
    symbol: "WBTC",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    chain: Chain.mainnet,
    platform: Platform.Aave,
    integrator: "0xC9451a4483d1752a3E9A3f5D6b1C7A6c34621fC6",
    liquidityProvider: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
    decimals: 8,
    quantityFormatter: "BTC",
    parent: "mBTC",
};
// BTC Feeder Pool Assets
exports.HBTC = {
    symbol: "HBTC",
    address: "0x0316EB71485b0Ab14103307bf65a021042c6d380",
    chain: Chain.mainnet,
    decimals: 18,
    parent: "mBTC",
    quantityFormatter: "BTC",
    feederPool: "0x48c59199Da51B7E30Ea200a74Ea07974e62C4bA7",
    vault: "0xF65D53AA6e2E4A5f4F026e73cb3e22C22D75E35C",
};
exports.TBTC = {
    symbol: "TBTC",
    address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    chain: Chain.mainnet,
    decimals: 18,
    parent: "mBTC",
    quantityFormatter: "BTC",
    feederPool: "0xb61A6F928B3f069A68469DDb670F20eEeB4921e0",
    vault: "0x760ea8CfDcC4e78d8b9cA3088ECD460246DC0731",
};
exports.TBTCv2 = {
    symbol: "tBTCv2",
    address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
    chain: Chain.mainnet,
    decimals: 18,
    parent: "mBTC",
    quantityFormatter: "BTC",
    feederPool: "0xc3280306b6218031E61752d060b091278d45c329",
    vault: "0x97E2a2F97A2E9a4cFB462a49Ab7c8D205aBB9ed9",
};
exports.ZENO = {
    symbol: "ZENO",
    address: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    vault: "0x8f2326316eC696F6d023E37A9931c2b2C177a3D7", // ZENO Staking V2
};
exports.PZENO = {
    symbol: "ZENO",
    address: "0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0",
    chain: Chain.polygon,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.RZENO = {
    symbol: "ZENO",
    address: "0x273bc479E5C21CAA15aA8538DecBF310981d14C0",
    chain: Chain.ropsten,
    decimals: 18,
    quantityFormatter: "USD",
    vault: "0x4d8E465ba7FACa907E8A5F39649e056bB14802D1",
};
// Old ZENO staking contract
// Was previously vault on ZENO but that is now the ZENO Staking V2 contract
exports.vZENO = {
    symbol: "vZENO",
    address: "0xaE8bC96DA4F9A9613c323478BE181FDb2Aa0E1BF",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.PWMATIC = {
    symbol: "WMATIC",
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    chain: Chain.polygon,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.AAVE = {
    symbol: "AAVE",
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    liquidityProvider: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
};
exports.stkAAVE = {
    symbol: "stkAAVE",
    address: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.COMP = {
    symbol: "COMP",
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.CREAM = {
    symbol: "CREAM",
    address: "0x2ba592f78db6436527729929aaf6c908497cb200",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.cyZUSD = {
    symbol: "cyZUSD",
    address: "0xbe86e8918dfc7d3cb10d295fc220f941a1470c5c",
    chain: Chain.mainnet,
    decimals: 8,
    quantityFormatter: "USD",
};
exports.BAL = {
    symbol: "BAL",
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.PBAL = {
    symbol: "BAL",
    address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    chain: Chain.polygon,
    decimals: 18,
    quantityFormatter: "USD",
    bridgeForwarder: "0x4e649Fa2f3C0Ff18b7695d1e1fa371a1999187Dc",
    // The DisperseForwarder contract on Polygon
    bridgeRecipient: "0x5783458E67B380d19a84514F11054ABDc326EB07",
};
exports.RBAL = {
    symbol: "BAL",
    address: "0x0Aa94D9Db9dA74Bb86A437E28EE4ecf22365843E",
    chain: Chain.ropsten,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.mBPT = {
    symbol: "mBPT",
    address: "0xe2469f47aB58cf9CF59F9822e3C5De4950a41C49",
    chain: Chain.mainnet,
    decimals: 18,
    quantityFormatter: "USD",
    vault: "0xeFbe22085D9f29863Cfb77EEd16d3cC0D927b011",
};
exports.RmBPT = {
    symbol: "mBPT",
    address: "0x021c343C6180f03cE9E48FaE3ff432309b9aF199",
    chain: Chain.ropsten,
    decimals: 18,
    quantityFormatter: "USD",
};
exports.tokens = [
    exports.AAVE,
    exports.stkAAVE,
    exports.COMP,
    exports.ZENO,
    exports.PZENO,
    exports.RZENO,
    exports.vZENO,
    exports.zUSD,
    exports.mBTC,
    exports.sUSD,
    exports.USDC,
    exports.USDT,
    exports.DAI,
    exports.GUSD,
    exports.BUSD,
    exports.RAI,
    exports.FLX,
    exports.FEI,
    exports.TRIBE,
    exports.renBTC,
    exports.sBTC,
    exports.WBTC,
    exports.HBTC,
    exports.TBTC,
    exports.TBTCv2,
    exports.alUSD,
    exports.ALCX,
    exports.PFRAX,
    exports.PzUSD,
    exports.PUSDC,
    exports.PUSDT,
    exports.PDAI,
    exports.PWMATIC,
    exports.RzUSD,
    exports.RmBTC,
    exports.MzUSD,
    exports.MFRAX,
    exports.mBPT,
    exports.RmBPT,
    exports.BAL,
    exports.PBAL,
    exports.RBAL,
];
//# sourceMappingURL=tokens.js.map