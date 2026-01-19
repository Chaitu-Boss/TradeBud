import RankingService from "../services/ranking.service.js";

class RankingController {
  static async getAdvisorRankings(req, res) {
    try {
      const rankings = await RankingService.getAdvisorRankings();
      res.json({
        entity: "ADVISOR",
        count: rankings.length,
        rankings
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default RankingController;
