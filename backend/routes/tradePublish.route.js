import { Router } from "express";
import { TradePublishController } from "../controllers/tradePublish.controller.js";

const router = Router();
const controller = new TradePublishController();

// Advisor publishes a trade
router.post("/publish-trade", controller.publishTrade);

export default router;
