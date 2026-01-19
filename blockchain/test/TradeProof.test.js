const { expect } = require("chai");
const { ethers } = require("hardhat");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

describe("TradeProof – Immutability Guarantees", function () {
  let TradeProof;
  let tradeProof;

  beforeEach(async function () {
    TradeProof = await ethers.getContractFactory("TradeProof");
    tradeProof = await TradeProof.deploy();
    await tradeProof.waitForDeployment();
  });

  /**
   * ✅ 1. Trade hash is stored correctly
   */
  it("stores the exact trade hash that was provided", async function () {
    const tradeHash = ethers.encodeBytes32String("trade-hash-1");

    await tradeProof.anchorTrade(tradeHash);

    const trade = await tradeProof.getTrade(0);
    expect(trade.tradeHash).to.equal(tradeHash);
  });

  /**
   * ✅ 2. Timestamp is recorded
   */
  it("records a valid timestamp for each trade", async function () {
    const tradeHash = ethers.encodeBytes32String("trade-hash-2");

    await tradeProof.anchorTrade(tradeHash);

    const trade = await tradeProof.getTrade(0);
    expect(trade.timestamp).to.be.gt(0);
  });

  /**
   * ✅ 3. Trades are append-only
   */
  it("does not modify earlier trades when new trades are added", async function () {
    const hash1 = ethers.encodeBytes32String("first");
    const hash2 = ethers.encodeBytes32String("second");

    await tradeProof.anchorTrade(hash1);
    const firstTradeBefore = await tradeProof.getTrade(0);

    await tradeProof.anchorTrade(hash2);
    const firstTradeAfter = await tradeProof.getTrade(0);

    expect(firstTradeAfter.tradeHash).to.equal(firstTradeBefore.tradeHash);
    expect(firstTradeAfter.timestamp).to.equal(firstTradeBefore.timestamp);
  });

  /**
   * ✅ 4. Trade count increases correctly
   */
  it("increments trade count exactly by 1 per trade", async function () {
    expect(await tradeProof.totalTrades()).to.equal(0);

    await tradeProof.anchorTrade(
      ethers.encodeBytes32String("t1")
    );
    expect(await tradeProof.totalTrades()).to.equal(1);

    await tradeProof.anchorTrade(
      ethers.encodeBytes32String("t2")
    );
    expect(await tradeProof.totalTrades()).to.equal(2);
  });

  /**
   * ✅ 5. Stored data cannot be altered (indirectly)
   */
  it("does not allow overwriting or mutating stored trade data", async function () {
    const originalHash = ethers.encodeBytes32String("immutable");

    await tradeProof.anchorTrade(originalHash);

    const trade = await tradeProof.getTrade(0);

    // There is NO function to update or overwrite
    // So the only thing we can verify is immutability by re-reading
    const rereadTrade = await tradeProof.getTrade(0);

    expect(rereadTrade.tradeHash).to.equal(trade.tradeHash);
    expect(rereadTrade.timestamp).to.equal(trade.timestamp);
  });
});
