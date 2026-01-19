import { kite } from "../util/kiteClient.js";

let instrumentCache = null;

class InstrumentService {
  static async symbolToToken(symbol) {
    if (!instrumentCache) {
      instrumentCache = await kite.getInstruments("NSE");
    }

    const inst = instrumentCache.find(
      i => i.tradingsymbol === symbol.toUpperCase()
    );

    if (!inst) throw new Error("Invalid symbol");

    return inst.instrument_token;
  }
}

export default InstrumentService;
