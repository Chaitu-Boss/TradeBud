import { TradePublishService } from "../services/tradePublish.service.js";

const service = new TradePublishService();

export class TradePublishController {

  async publishTrade(req, res) {
    try {
      const trade = req.body;

      console.log(trade)
      const result = await service.publishTrade(trade);
      console.log(result);

      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message || "Trade publishing failed"
      });
    }
  }
}
