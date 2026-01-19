import express from "express";
import MarketDataController from "../controllers/marketData.controller.js";

const router = express.Router();

router.post("/symbol", MarketDataController.setSymbol);
router.get("/ltp", MarketDataController.getLTP);

export default router;
