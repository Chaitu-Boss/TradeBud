import { KiteTicker } from "kiteconnect";
import { kite } from "../util/kiteClient.js";

let ticker = null;
let activeSymbol = null;
let activeToken = null;
let lastLTP = null;

class MarketDataService {

  static getState() {
    return { activeSymbol, lastLTP };
  }

  static async start(symbol, token) {
    activeSymbol = symbol.toUpperCase();
    activeToken = Number(token);
    lastLTP = null;

    if (ticker) {
      try { ticker.disconnect(); } catch (_) {}
    }

    ticker = new KiteTicker({
      api_key: process.env.API_KEY,
      access_token: process.env.ACCESS_TOKEN,
    });

    ticker.on("connect", () => {
      console.log("✅ Kite WS connected");
      ticker.subscribe([activeToken]);
      ticker.setMode(ticker.modeFull, [activeToken]);
    });

    ticker.on("ticks", ticks => {
      const tick = ticks?.find(
        t => t.instrument_token === activeToken
      );
      if (tick) {
        lastLTP = tick.last_price;
      }
    });

    ticker.on("error", err =>
      console.error("❌ Kite WS error:", err)
    );

    ticker.connect();
  }

  static async getLTP() {
    if (!activeSymbol) throw new Error("No active symbol");

    if (lastLTP) {
      return { ltp: lastLTP, source: "ws" };
    }

    const rest = await kite.getLTP([`NSE:${activeSymbol}`]);
    return {
      ltp: rest[`NSE:${activeSymbol}`]?.last_price ?? null,
      source: "rest",
    };
  }
}

export default MarketDataService;
