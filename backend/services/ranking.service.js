import { supabaseClient } from "../db/supabase.client.js";
import PerformanceService from "./performance.service.js";
import TrustService from "./trust.service.js";

/* ================= HELPERS ================= */

function normalize(value, min, max) {
  if (max === min) return 100;
  return ((value - min) / (max - min)) * 100;
}

function stdDev(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / arr.length
  );
}

/* ================= SERVICE ================= */

class RankingService {

  // FIXED: truly unique advisors
  static async getAdvisorIds() {
    const { data, error } = await supabaseClient
      .from("trades_react")
      .select("advisor_id");

    if (error) throw error;

    return [...new Set(data.map(d => d.advisor_id))];
  }

  static async getAdvisorRankings() {
    const advisorIds = await this.getAdvisorIds();
    const raw = [];

    // STEP 1: Collect raw metrics per ADVISOR
    for (const advisorId of advisorIds) {
      const summary = await PerformanceService.getSummary(advisorId);
      const trust = await TrustService.calculateTrustScore(advisorId);
      const equity = await PerformanceService.getEquityCurve(advisorId);
      const drawdown = PerformanceService.calculateMaxDrawdown(equity);
      const monthly = await PerformanceService.getMonthlyPerformance(advisorId);

      const consistency =
        monthly.length > 1
          ? 100 / Math.max(
              Math.stdDev(monthly.map(m => Number(m.pnl))), 1
            )
          : 50;

      raw.push({
        advisorId,
        trustScore: Number(trust.trustScore),
        accuracy: Number(summary.accuracy),
        roi: Number(summary.roi),
        drawdown: Number(drawdown), // %
        consistency,
        totalTrades: summary.totalTrades
      });
    }

    // STEP 2: Normalize metrics
    const trustVals = raw.map(r => r.trustScore);
    const roiVals = raw.map(r => r.roi);
    const accVals = raw.map(r => r.accuracy);
    const drawVals = raw.map(r => r.drawdown);
    const consVals = raw.map(r => r.consistency);

    raw.forEach(r => {
      r.normTrust = normalize(r.trustScore, Math.min(...trustVals), Math.max(...trustVals));
      r.normROI = normalize(r.roi, Math.min(...roiVals), Math.max(...roiVals));
      r.normAccuracy = normalize(r.accuracy, Math.min(...accVals), Math.max(...accVals));
      r.normConsistency = normalize(r.consistency, Math.min(...consVals), Math.max(...consVals));
      r.normDrawdown = 100 - normalize(r.drawdown, Math.min(...drawVals), Math.max(...drawVals));
    });

    // STEP 3: Final ranking score
    raw.forEach(r => {
      r.finalScore =
        0.30 * r.normTrust +
        0.20 * r.normConsistency +
        0.20 * r.normDrawdown +
        0.20 * r.normROI +
        0.10 * r.normAccuracy;
    });

    // STEP 4: Rank ADVISORS
    raw.sort((a, b) => b.finalScore - a.finalScore);

    return raw.map((r, index) => ({
      rank: index + 1,
      advisorId: r.advisorId,
      finalScore: Number(r.finalScore.toFixed(2)),
      trustScore: r.trustScore,
      consistency: Number(r.consistency.toFixed(2)),
      drawdown: r.drawdown,
      roi: r.roi,
      accuracy: r.accuracy,
      totalTrades: r.totalTrades
    }));
  }
}

// Small helper
Math.stdDev = function (arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(arr.reduce((s, x) => s + (x - mean) ** 2, 0) / arr.length);
};

export default RankingService;
