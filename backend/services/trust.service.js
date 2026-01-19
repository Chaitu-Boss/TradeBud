import PerformanceService from "./performance.service.js";

class TrustService {

  static async calculateTrustScore(advisorId) {
    const summary = await PerformanceService.getSummary(advisorId);
    const equityCurve = await PerformanceService.getEquityCurve(advisorId);

    const drawdown = PerformanceService.calculateMaxDrawdown(equityCurve);

    const trustScore =
      0.30 * summary.accuracy +
      0.25 * summary.roi +
      0.20 * (100 - drawdown) +
      0.15 * Math.min(summary.totalTrades * 2, 100) +
      0.10 * (summary.wins / (summary.losses + 1)) * 10;

    return {
      trustScore: Math.min(trustScore, 100).toFixed(0),
      drawdown,
      ...summary
    };
  }
}

export default TrustService;
