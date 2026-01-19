import { ethers } from "ethers";
import { supabaseClient } from "../db/supabase.client.js";
import { generateTradeHash } from "../util/tradeHashGenerator.js";

export class TradePublishService {

  async publishTrade(trade) {
    console.log(trade);
    // 1️⃣ Generate trade hash
    const hashHex = generateTradeHash(trade);
    const bytes32Hash = "0x" + hashHex;

    // 2️⃣ Anchor on blockchain
    const provider = new ethers.JsonRpcProvider(
      process.env.ETHEREUM_RPC_URL
    );

    const wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY,
      provider
    );

    const contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      ["function anchorTrade(bytes32 _tradeHash) external"],
      wallet
    );

    const tx = await contract.anchorTrade(bytes32Hash);
    console.log("Tx sent:", tx.hash);
    const receipt = await tx.wait();

    console.log("Tx mined in block:", receipt.blockNumber);
    console.log("Status:", receipt.status);

    // 3️⃣ Save trade in Supabase
    const { error } = await supabaseClient
      .from("trades_react")
      .insert({
        ...trade,
        txnhash: bytes32Hash
      });

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw new Error("Failed to store trade in database");
    }

    return {
      success: true,
      tradeHash: bytes32Hash
    };
  }
}
