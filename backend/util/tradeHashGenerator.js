import crypto from "crypto";

export function generateTradeHash(trade) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(trade))
    .digest("hex");
}
