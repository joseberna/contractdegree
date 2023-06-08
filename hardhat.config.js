/** @format */

require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // solidity: "0.8.4",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
    },
    goerli: {
      url: "https://goerli.infura.io/v3/cef84b2692424753aa09b74b33ba3861",
      accounts: [
        "6c24992899e8b6309a608e480b6caa35e466137cde8ee8932a3a531fbf7abf82",
      ],
    },
    // hardhat: {
    // },
  },
};
