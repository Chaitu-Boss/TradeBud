import { supabaseClient } from "../db/supabase.client.js";

class PerformanceService {

  // ---------- BASIC STATS ----------
  static async getSummary(advisorId) {
    const { data, error } = await supabaseClient
      .from("trades_react")
      .select("entry_price, exit_price, trade_type, exit_reason")
      .eq("advisor_id", advisorId)
      .eq("status", "CLOSED");

    if (error) throw error;

    let wins = 0, losses = 0, totalPnl = 0;

    data.forEach(t => {
      const pnl =
        t.trade_type === "BUY"
          ? t.exit_price - t.entry_price
          : t.entry_price - t.exit_price;

      totalPnl += pnl;
      pnl > 0 ? wins++ : losses++;
    });

    const totalTrades = data.length;
    const accuracy = totalTrades ? (wins / totalTrades) * 100 : 0;

    return {
      totalTrades,
      wins,
      losses,
      accuracy: accuracy.toFixed(2),
      totalPnl: totalPnl.toFixed(2),
      roi: ((totalPnl / (totalTrades * 100000)) * 100).toFixed(2) // fixed capital
    };
  }

  // ---------- EQUITY CURVE ----------
  static async getEquityCurve(advisorId) {
    const { data, error } = await supabaseClient
      .from("trades_react")
      .select("closed_at, entry_price, exit_price, trade_type")
      .eq("advisor_id", advisorId)
      .eq("status", "CLOSED")
      .order("closed_at");

    if (error) throw error;

    let equity = 0;
    return data.map(t => {
      const pnl =
        t.trade_type === "BUY"
          ? t.exit_price - t.entry_price
          : t.entry_price - t.exit_price;

      equity += pnl;
      return { date: t.closed_at, equity };
    });
  }

  // ---------- MAX DRAWDOWN ----------
  static calculateMaxDrawdown(equityCurve) {
    let peak = 0;
    let maxDrawdown = 0;

    equityCurve.forEach(point => {
      if (point.equity > peak) peak = point.equity;
      const drawdown = peak ? (peak - point.equity) / peak : 0;
      maxDrawdown = Math.max(maxDrawdown, drawdown);
    });

    return (maxDrawdown * 100).toFixed(2);
  }

  // ---------- MONTHLY CONSISTENCY ----------
  static async getMonthlyPerformance(advisorId) {
    const { data, error } = await supabaseClient
      .from("trades_react")
      .select("closed_at, entry_price, exit_price, trade_type")
      .eq("advisor_id", advisorId)
      .eq("status", "CLOSED");

    if (error) throw error;

    const monthly = {};

    data.forEach(t => {
      const month = t.closed_at.slice(0, 7);
      const pnl =
        t.trade_type === "BUY"
          ? t.exit_price - t.entry_price
          : t.entry_price - t.exit_price;

      monthly[month] = (monthly[month] || 0) + pnl;
    });

    return Object.entries(monthly).map(([month, pnl]) => ({
      month,
      pnl: pnl.toFixed(2)
    }));
  }
}

export default PerformanceService;
