require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/dROy_Ze0s4sASpnIRKq1u",
      accounts: ["6c9e32fbdbf27adb6f218471355a2cff33d5c4e4451300792a86423a18650e3a"],
    },
  },
};