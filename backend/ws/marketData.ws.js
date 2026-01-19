import { WebSocketServer } from "ws";
import MarketDataService from "../services/marketData.service.js";

export function initMarketWS(server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", ws => {
    console.log("🟢 WS client connected");

    const interval = setInterval(() => {
      const { activeSymbol, lastLTP } =
        MarketDataService.getState();

      if (activeSymbol && lastLTP) {
        ws.send(JSON.stringify({
          symbol: activeSymbol,
          ltp: lastLTP,
          source: "ws"
        }));
      }
    }, 1000);

    ws.on("close", () => {
      clearInterval(interval);
      console.log("🔴 WS client disconnected");
    });
  });
}
