require("@nomicfoundation/hardhat-chai-matchers")
require("hardhat-deploy")
require("hardhat-contract-sizer")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()
require("hardhat-gas-reporter")
require("solidity-coverage")
require("@nomiclabs/hardhat-etherscan")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const CMC_API_KEY = process.env.CMC_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
            // polygon: POLYGONSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "./gas-report.txt",
        noColors: true,
    },
    solidity: "0.8.15",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 500000,
    },
}
