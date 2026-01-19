import express from "express";
import TrustController from "../controllers/trust.controller.js";

const router = express.Router();

router.get("/:advisorId/trust-score", TrustController.trustScore);

export default router;
