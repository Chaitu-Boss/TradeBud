const { buildModule } = require(
  "@nomicfoundation/hardhat-ignition/modules"
);

const TradeProofModule = buildModule("TradeProofModule", (m) => {
  const tradeProof = m.contract("TradeProof");
  return { tradeProof };
});

module.exports = TradeProofModule;
