import express from "express";
import PerformanceController from "../controllers/performance.controller.js";

const router = express.Router();

router.get("/:advisorId/performance/summary", PerformanceController.summary);
router.get("/:advisorId/performance/equity", PerformanceController.equity);
router.get("/:advisorId/performance/monthly", PerformanceController.monthly);

export default router;
