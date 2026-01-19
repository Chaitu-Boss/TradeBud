import TrustService from "../services/trust.service.js";

class TrustController {

  static async trustScore(req, res) {
    try {
      const data = await TrustService.calculateTrustScore(req.params.advisorId);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default TrustController;
