/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakingRewardsWithPlatformTokenIzusdPolygon1,
  StakingRewardsWithPlatformTokenIzusdPolygon1Interface,
} from "../StakingRewardsWithPlatformTokenIzusdPolygon1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platformToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformReward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformReward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payer",
        type: "address",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewardOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlatformToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsDistributor",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nameArg",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbolArg",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nexus",
    outputs: [
      {
        internalType: "contract INexus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformRewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformRewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "platformRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformTokenVendor",
    outputs: [
      {
        internalType: "contract PlatformTokenVendor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDistributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsDistributor",
        type: "address",
      },
    ],
    name: "setRewardsDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userPlatformRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040526000600755600060085560006009553480156200002157600080fd5b5060405162002b8338038062002b838339810160408190526200004491620000ff565b6001600160601b0319606084901b1660805283806001600160a01b038116620000b35760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b6001600160601b0319606091821b811660a05293811b841660c0529190911b90911660e052506200015b915050565b80516001600160a01b0381168114620000fa57600080fd5b919050565b6000806000806080858703121562000115578384fd5b6200012085620000e2565b93506200013060208601620000e2565b92506200014060408601620000e2565b91506200015060608601620000e2565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c61299c620001e76000396000818161048f0152818161056a01528181610a3801528181610ad901528181610d5101526115dd0152600081816103bc01528181610542015261151e0152600081816104ba0152611652015260008181610413015281816112680152611881015261299c6000f3fe60806040523480156200001157600080fd5b50600436106200024f5760003560e01c8063906571471162000141578063c8f33c9111620000bd578063df136d651162000087578063df136d65146200058c578063e882025a1462000596578063e9fad8ee14620005a0578063ebe2b12b14620005aa578063f9ce7d4714620005b4576200024f565b8063c8f33c911462000528578063cd3daf9d1462000532578063d1af0c7d146200053c578063d1b812cd1462000564576200024f565b8063a694fc3a116200010b578063a694fc3a14620004dc578063adc9772e14620004f3578063b88a802f146200050a578063c014a3201462000514578063c5869a06146200051e576200024f565b806390657147146200046c57806395d89b4114620004835780639ed374f7146200048d578063a3f5c1d214620004b4576200024f565b80633c6b16ab11620001d157806370a08231116200019b57806370a0823114620003e157806372f702f3146200040d5780637b0a47ee146200043557806380faa57d146200043f5780638b8763471462000449576200024f565b80633c6b16ab14620003535780633f2a5540146200036a57806347f53068146200039757806369940d7914620003ba576200024f565b806318160ddd116200021f57806318160ddd14620002f35780631976214314620002fc5780631be0528914620003155780632e1a7d4d1462000320578063313ce5671462000337576200024f565b80628cc262146200025457806306fdde0314620002855780630700037d146200029e5780630b12a95214620002d0575b600080fd5b6200026b6200026536600462001b57565b620005c8565b604080519283526020830191909152015b60405180910390f35b6200028f620006d0565b6040516200027c919062001cbe565b620002c1620002af36600462001b57565b600f6020526000908152604090205481565b6040519081526020016200027c565b620002c1620002e136600462001b57565b60106020526000908152604090205481565b600354620002c1565b620003136200030d36600462001b57565b62000766565b005b620002c162093a8081565b620003136200033136600462001c6e565b62000792565b62000340601281565b60405160ff90911681526020016200027c565b620003136200036436600462001c6e565b620008bb565b6005546200037e906001600160a01b031681565b6040516001600160a01b0390911681526020016200027c565b620002c1620003a836600462001b57565b600e6020526000908152604090205481565b7f00000000000000000000000000000000000000000000000000000000000000006200037e565b620002c1620003f236600462001b57565b6001600160a01b031660009081526004602052604090205490565b6200037e7f000000000000000000000000000000000000000000000000000000000000000081565b620002c160085481565b620002c162000c0f565b620002c16200045a36600462001b57565b600d6020526000908152604090205481565b620003136200047d36600462001b95565b62000c24565b6200028f62000de7565b7f00000000000000000000000000000000000000000000000000000000000000006200037e565b6200037e7f000000000000000000000000000000000000000000000000000000000000000081565b62000313620004ed36600462001c6e565b62000df6565b620003136200050436600462001c1e565b62000e05565b6200031362000e15565b6200031362000f0d565b620002c1600c5481565b620002c1600a5481565b6200026b62000fed565b6200037e7f000000000000000000000000000000000000000000000000000000000000000081565b6200037e7f000000000000000000000000000000000000000000000000000000000000000081565b620002c1600b5481565b620002c160095481565b62000313620010a9565b620002c160075481565b6006546200037e906001600160a01b031681565b600080600080620005d862000fed565b6001600160a01b0387166000908152600d60205260408120549294509092509062000604908462001d51565b6001600160a01b0387166000908152600e6020526040812054919250906200062d908462001d51565b9050600062000651886001600160a01b031660009081526004602052604090205490565b90506000620006618285620010d0565b90506000620006718385620010d0565b6001600160a01b038b166000908152600f60205260409020549091506200069a90839062001cf3565b6001600160a01b038b16600090815260106020526040902054620006c090839062001cf3565b9850985050505050505050915091565b60018054620006df9062001d9a565b80601f01602080910402602001604051908101604052809291908181526020018280546200070d9062001d9a565b80156200075e5780601f1062000732576101008083540402835291602001916200075e565b820191906000526020600020905b8154815290600101906020018083116200074057829003601f168201915b505050505081565b62000770620010ee565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b33600080620007a062000fed565b915091506000821180620007b45750600081115b156200082a57600b829055600c819055620007ce62000c0f565b600a556001600160a01b038316156200082a57620007ec83620005c8565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b60008411620008745760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b60448201526064015b60405180910390fd5b6200087f846200115a565b60405184815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a250505050565b6005546001600160a01b03163314620009175760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f7420726577617264206469737472696275746f7260448201526064016200086b565b60008060006200092662000fed565b9150915060008211806200093a5750600081115b15620009b057600b829055600c8190556200095462000c0f565b600a556001600160a01b03831615620009b0576200097283620005c8565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b69d3c21bcecceda1000000841062000a205760405162461bcd60e51b815260206004820152602c60248201527f43616e6e6f74206e6f746966792077697468206d6f7265207468616e2061206d60448201526b696c6c696f6e20756e69747360a01b60648201526084016200086b565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801562000a8357600080fd5b505afa15801562000a98573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000abe919062001c87565b9050801562000b035760065462000b03906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911683620012e4565b6007544290811062000b395762000b1e62093a808762001d0e565b60085562000b3062093a808362001d0e565b60095562000bb7565b60008160075462000b4b919062001d51565b905060006008548262000b5f919062001d2f565b905062093a8062000b71828a62001cf3565b62000b7d919062001d0e565b60085560095460009062000b92908462001d2f565b905062093a8062000ba4828762001cf3565b62000bb0919062001d0e565b6009555050505b600a81905562000bcb62093a808262001cf3565b60075560408051878152602081018490527f6c07ee05dcf262f13abf9d87b846ee789d2f90fe991d495acd7d7fc109ee1f55910160405180910390a1505050505050565b600062000c1f426007546200134e565b905090565b600054610100900460ff168062000c3e575060005460ff16155b62000ca35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200086b565b600054610100900460ff1615801562000ccf576000805460ff1961ff0019909116610100171660011790555b62000cda8662000770565b62000d4f85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284376000920191909152506200136592505050565b7f000000000000000000000000000000000000000000000000000000000000000060405162000d7e9062001a59565b6001600160a01b039091168152602001604051809103906000f08015801562000dab573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b0392909216919091179055801562000ddf576000805461ff00191690555b505050505050565b60028054620006df9062001d9a565b62000e023382620013a7565b50565b62000e118282620013a7565b5050565b3360008062000e2362000fed565b91509150600082118062000e375750600081115b1562000ead57600b829055600c81905562000e5162000c0f565b600a556001600160a01b0383161562000ead5762000e6f83620005c8565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b600062000eb9620014cf565b9050600062000ec7620015a4565b604080518481526020810183905291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f5191015b60405180910390a25050505050565b3360008062000f1b62000fed565b91509150600082118062000f2f5750600081115b1562000fa557600b829055600c81905562000f4962000c0f565b600a556001600160a01b0383161562000fa55762000f6783620005c8565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b600062000fb1620014cf565b604080518281526000602082015291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f519101620008ad565b600080600062000ffc60035490565b9050806200101557600b54600c549250925050620010a5565b6000600a546200102462000c0f565b62001030919062001d51565b905060008160085462001044919062001d2f565b905060008260095462001058919062001d2f565b9050600062001068838662001608565b9050600062001078838762001608565b905081600b546200108a919062001cf3565b81600c546200109a919062001cf3565b975097505050505050505b9091565b33600090815260046020526040902054620010c49062000331565b620010ce62000e15565b565b6000620010e78383670de0b6b3a76400006200162b565b9392505050565b620010f86200164e565b6001600160a01b0316336001600160a01b031614620010ce5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e20657865637574650000000000000060448201526064016200086b565b60005462010000900460ff16620011b45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016200086b565b6000805462ff000019168155338152600460205260409020548111156200121e5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420656e6f7567682075736572207265776172647300000000000000000060448201526064016200086b565b806003546200122e919062001d51565b600355336000908152600460205260409020546200124e90829062001d51565b3360008181526004602052604090209190915562001298907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169083620012e4565b60405181815260009033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3506000805462ff0000191662010000179055565b6040516001600160a01b0383166024820152604481018290526200134990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152620016e5565b505050565b60008183116200135f5782620010e7565b50919050565b6200137c6000805462ff0000191662010000179055565b81516200139190600190602085019062001a67565b5080516200134990600290602084019062001a67565b81600080620013b562000fed565b915091506000821180620013c95750600081115b156200143f57600b829055600c819055620013e362000c0f565b600a556001600160a01b038316156200143f576200140183620005c8565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b60008411620014825760405162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b60448201526064016200086b565b6200148e8585620017be565b604080518581523360208201526001600160a01b038716917f9f9e4044c5742cca66ca090b21552bac14645e68bad7a92364a9d9ff18111a1c910162000efe565b336000908152600f6020526040812054801562000c1f57336000818152600f6020526040808220919091555163a9059cbb60e01b81526004810191909152602481018290526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156200156357600080fd5b505af115801562001578573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200159e919062001c4c565b50905090565b33600090815260106020526040812054801562000c1f573360008181526010602052604081205560065462000c1f916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169216908462001900565b6000816200161f670de0b6b3a76400008562001d2f565b620010e7919062001d0e565b6000816200163a848662001d2f565b62001646919062001d0e565b949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015620016aa57600080fd5b505afa158015620016bf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c1f919062001b76565b60006200173c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620019409092919063ffffffff16565b8051909150156200134957808060200190518101906200175d919062001c4c565b620013495760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016200086b565b60005462010000900460ff16620018185760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016200086b565b6000805462ff0000191690556003546200183490829062001cf3565b6003556001600160a01b0382166000908152600460205260409020546200185d90829062001cf3565b6001600160a01b03808416600090815260046020526040902091909155620018aa907f00000000000000000000000000000000000000000000000000000000000000001633308462001900565b6040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350506000805462ff0000191662010000179055565b6040516001600160a01b03808516602483015283166044820152606481018290526200193a9085906323b872dd60e01b9060840162001311565b50505050565b606062001646848460008585843b6200199c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200086b565b600080866001600160a01b03168587604051620019ba919062001ca0565b60006040518083038185875af1925050503d8060008114620019f9576040519150601f19603f3d011682016040523d82523d6000602084013e620019fe565b606091505b509150915062001a1082828662001a1b565b979650505050505050565b6060831562001a2c575081620010e7565b82511562001a3d5782518084602001fd5b8160405162461bcd60e51b81526004016200086b919062001cbe565b610b698062001dfe83390190565b82805462001a759062001d9a565b90600052602060002090601f01602090048101928262001a99576000855562001ae4565b82601f1062001ab457805160ff191683800117855562001ae4565b8280016001018555821562001ae4579182015b8281111562001ae457825182559160200191906001019062001ac7565b5062001af292915062001af6565b5090565b5b8082111562001af2576000815560010162001af7565b60008083601f84011262001b1f578182fd5b50813567ffffffffffffffff81111562001b37578182fd5b60208301915083602082850101111562001b5057600080fd5b9250929050565b60006020828403121562001b69578081fd5b8135620010e78162001de7565b60006020828403121562001b88578081fd5b8151620010e78162001de7565b60008060008060006060868803121562001bad578081fd5b853562001bba8162001de7565b9450602086013567ffffffffffffffff8082111562001bd7578283fd5b62001be589838a0162001b0d565b9096509450604088013591508082111562001bfe578283fd5b5062001c0d8882890162001b0d565b969995985093965092949392505050565b6000806040838503121562001c31578182fd5b823562001c3e8162001de7565b946020939093013593505050565b60006020828403121562001c5e578081fd5b81518015158114620010e7578182fd5b60006020828403121562001c80578081fd5b5035919050565b60006020828403121562001c99578081fd5b5051919050565b6000825162001cb481846020870162001d6b565b9190910192915050565b600060208252825180602084015262001cdf81604085016020870162001d6b565b601f01601f19169190910160400192915050565b6000821982111562001d095762001d0962001dd1565b500190565b60008262001d2a57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161562001d4c5762001d4c62001dd1565b500290565b60008282101562001d665762001d6662001dd1565b500390565b60005b8381101562001d8857818101518382015260200162001d6e565b838111156200193a5750506000910152565b60028104600182168062001daf57607f821691505b602082108114156200135f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811462000e0257600080fdfe60c06040523480156200001157600080fd5b5060405162000b6938038062000b698339810160408190526200003491620004ad565b33606081811b60a05282901b6001600160601b031916608052620000669082906200006d602090811b6200010617901c565b5062000575565b62000093816000846001600160a01b0316620000be60201b62000135179092919060201c565b620000ba81600019846001600160a01b0316620000be60201b62000135179092919060201c565b5050565b8015806200014c5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200010f57600080fd5b505afa15801562000124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014a9190620004d6565b155b620001c45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021c9185916200022116565b505050565b60006200027d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620002ff60201b62000285179092919060201c565b8051909150156200021c57808060200190518101906200029e91906200048b565b6200021c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620001bb565b60606200031084846000856200031a565b90505b9392505050565b6060824710156200037d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620001bb565b843b620003cd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001bb565b600080866001600160a01b03168587604051620003eb9190620004ef565b60006040518083038185875af1925050503d80600081146200042a576040519150601f19603f3d011682016040523d82523d6000602084013e6200042f565b606091505b509092509050620004428282866200044d565b979650505050505050565b606083156200045e57508162000313565b8251156200046f5782518084602001fd5b8160405162461bcd60e51b8152600401620001bb91906200050d565b6000602082840312156200049d578081fd5b8151801515811462000313578182fd5b600060208284031215620004bf578081fd5b81516001600160a01b038116811462000313578182fd5b600060208284031215620004e8578081fd5b5051919050565b600082516200050381846020870162000542565b9190910192915050565b60006020825282518060208401526200052e81604085016020870162000542565b601f01601f19169190910160400192915050565b60005b838110156200055f57818101518382015260200162000545565b838111156200056f576000848401525b50505050565b60805160601c60a05160601c6105be620005ab60003960008181604b015260e0015260008181608e015260bf01526105be6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063488a49e314610046578063d1b812cd14610089578063d8245bb9146100b0575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6100b86100ba565b005b6101047f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610106565b565b61011b6001600160a01b038316826000610135565b6101316001600160a01b03831682600019610135565b5050565b8015806101be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc91906104f1565b155b61022e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261028090849061029e565b505050565b60606102948484600085610370565b90505b9392505050565b60006102f3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102859092919063ffffffff16565b805190915015610280578080602001905181019061031191906104d1565b6102805760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610225565b6060824710156103d15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610225565b843b61041f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610225565b600080866001600160a01b0316858760405161043b9190610509565b60006040518083038185875af1925050503d8060008114610478576040519150601f19603f3d011682016040523d82523d6000602084013e61047d565b606091505b509150915061048d828286610498565b979650505050505050565b606083156104a7575081610297565b8251156104b75782518084602001fd5b8160405162461bcd60e51b81526004016102259190610525565b6000602082840312156104e2578081fd5b81518015158114610297578182fd5b600060208284031215610502578081fd5b5051919050565b6000825161051b818460208701610558565b9190910192915050565b6000602082528251806020840152610544816040850160208701610558565b601f01601f19169190910160400192915050565b60005b8381101561057357818101518382015260200161055b565b83811115610582576000848401525b5050505056fea264697066735822122085e755d7b903f69cd1091ac8bd39759b656cb499c4e48d85ac1129ccd64aa56e64736f6c63430008020033a2646970667358221220e3ce214c886f3db7f3708a0d8bb457e11b31bf03590f5a92318ec2652e80e1c364736f6c63430008020033";

export class StakingRewardsWithPlatformTokenIzusdPolygon1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _stakingToken: string,
    _rewardsToken: string,
    _platformToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingRewardsWithPlatformTokenIzusdPolygon1> {
    return super.deploy(
      _nexus,
      _stakingToken,
      _rewardsToken,
      _platformToken,
      overrides || {}
    ) as Promise<StakingRewardsWithPlatformTokenIzusdPolygon1>;
  }
  getDeployTransaction(
    _nexus: string,
    _stakingToken: string,
    _rewardsToken: string,
    _platformToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _stakingToken,
      _rewardsToken,
      _platformToken,
      overrides || {}
    );
  }
  attach(address: string): StakingRewardsWithPlatformTokenIzusdPolygon1 {
    return super.attach(
      address
    ) as StakingRewardsWithPlatformTokenIzusdPolygon1;
  }
  connect(
    signer: Signer
  ): StakingRewardsWithPlatformTokenIzusdPolygon1__factory {
    return super.connect(
      signer
    ) as StakingRewardsWithPlatformTokenIzusdPolygon1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsWithPlatformTokenIzusdPolygon1Interface {
    return new utils.Interface(
      _abi
    ) as StakingRewardsWithPlatformTokenIzusdPolygon1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewardsWithPlatformTokenIzusdPolygon1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingRewardsWithPlatformTokenIzusdPolygon1;
  }
}
