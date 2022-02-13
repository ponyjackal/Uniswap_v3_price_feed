require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-local-networks-config-plugin')

require('./hardhat/test')
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const bscScanAPIKey = process.env.BSC_SCAN_API_KEY;

module.exports = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  networks: {
    hardhat: {},
    bsc: {
      url: `https://bsc-dataseed.binance.org`,
      accounts: [privateKey],
      chainId: 56,
      gas: "auto",
      gasPrice: "auto",
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [privateKey],
      chainId: 97,
      gas: "auto",
      gasPrice: "auto",
    }
  },
  etherscan: {
    apiKey: bscScanAPIKey,
  },
}
