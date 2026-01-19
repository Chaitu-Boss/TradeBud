import PerformanceService from "../services/performance.service.js";

class PerformanceController {

  static async summary(req, res) {
    try {
      const data = await PerformanceService.getSummary(req.params.advisorId);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async equity(req, res) {
    try {
      const equityCurve = await PerformanceService.getEquityCurve(req.params.advisorId);
      const drawdown = PerformanceService.calculateMaxDrawdown(equityCurve);
      res.json({ equityCurve, drawdown });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async monthly(req, res) {
    try {
      const data = await PerformanceService.getMonthlyPerformance(req.params.advisorId);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default PerformanceController;
