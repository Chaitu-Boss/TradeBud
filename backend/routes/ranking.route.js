import express from "express";
import RankingController from "../controllers/ranking.controller.js";

const router = express.Router();

router.get(
  "/rankings",
  RankingController.getAdvisorRankings
);

export default router;
