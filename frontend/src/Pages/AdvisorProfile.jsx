import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import supabase from "../../utils/supabase";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const AdvisorProfile = () => {
  const { advisorId } = useParams();
  const navigate = useNavigate();

  /* ================= BASIC INFO ================= */
  const [advisor, setAdvisor] = useState(null);
  const [loadingAdvisor, setLoadingAdvisor] = useState(true);

  /* ================= PERFORMANCE DATA ================= */
  const [trustScore, setTrustScore] = useState(null);
  const [equityCurve, setEquityCurve] = useState([]);
  const [monthlyPnl, setMonthlyPnl] = useState([]);

  const [loadingTrust, setLoadingTrust] = useState(true);
  const [loadingEquity, setLoadingEquity] = useState(true);
  const [loadingMonthly, setLoadingMonthly] = useState(true);

  /* ================= FETCH ADVISOR INFO ================= */

  const fetchAdvisor = async () => {
    try {
      setLoadingAdvisor(true);

      const { data, error } = await supabase
        .from("advisors_react")
        .select(`
          id,
          name,
          sebi_number,
          email,
          phone,
          address,
          contact_person,
          validity
        `)
        .eq("id", advisorId)
        .single();

      if (error) throw error;
      setAdvisor(data);
    } catch (err) {
      console.error("Advisor fetch failed", err);
    } finally {
      setLoadingAdvisor(false);
    }
  };

  /* ================= TRUST SCORE ================= */

  const fetchTrustScore = async () => {
    try {
      setLoadingTrust(true);

      const res = await axios.get(
        `http://localhost:8080/api/advisor/${advisorId}/trust-score`
      );

      setTrustScore(Number(res.data.trustScore));
    } catch (err) {
      console.error("Trust score fetch failed", err);
    } finally {
      setLoadingTrust(false);
    }
  };

  /* ================= EQUITY CURVE ================= */

  const fetchEquityCurve = async () => {
    try {
      setLoadingEquity(true);

      const res = await axios.get(
        `http://localhost:8080/api/advisor/${advisorId}/performance/equity`
      );

      setEquityCurve(
        res.data.equityCurve.map((e) => ({
          date: new Date(e.date).toLocaleDateString(),
          equity: Number(e.equity),
        }))
      );
    } catch (err) {
      console.error("Equity curve fetch failed", err);
    } finally {
      setLoadingEquity(false);
    }
  };

  /* ================= MONTHLY PNL ================= */

  const fetchMonthlyPnl = async () => {
    try {
      setLoadingMonthly(true);

      const res = await axios.get(
        `http://localhost:8080/api/advisor/${advisorId}/performance/monthly`
      );

      setMonthlyPnl(
        res.data.map((m) => ({
          month: m.month,
          pnl: Number(m.pnl),
        }))
      );
    } catch (err) {
      console.error("Monthly PnL fetch failed", err);
    } finally {
      setLoadingMonthly(false);
    }
  };

  /* ================= LOAD ALL ================= */

  useEffect(() => {
    fetchAdvisor();
    fetchTrustScore();
    fetchEquityCurve();
    fetchMonthlyPnl();
  }, [advisorId]);

  /* ================= LOADING STATE ================= */

  if (loadingAdvisor) {
    return (
      <div className="min-h-screen bg-[#0b0f14] text-gray-400 p-10">
        Loading advisor profile...
      </div>
    );
  }

  if (!advisor) {
    return (
      <div className="min-h-screen bg-[#0b0f14] text-red-400 p-10">
        Advisor not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white p-8">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="text-yellow-400 text-sm mb-4 cursor-pointer"
      >
        ← Back
      </button>

      {/* ================= HEADER ================= */}
      <div className="bg-[#0f1622] border border-white/10 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-yellow-400">
          {advisor.name}
        </h1>
        <p className="text-gray-400 mt-1">
          SEBI: {advisor.sebi_number}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-gray-300">
          <p>📧 {advisor.email}</p>
          <p>📞 {advisor.phone}</p>
          <p>📍 {advisor.address}</p>
          <p>👤 Contact: {advisor.contact_person}</p>
          <p>🕒 Validity: {advisor.validity}</p>
        </div>
      </div>

      {/* ================= METRICS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Metric
          label="Trust Score"
          loading={loadingTrust}
          value={trustScore}
        />
      </div>

      {/* ================= EQUITY CURVE ================= */}
      <div className="bg-[#0f1622] border border-white/10 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Equity Curve
        </h2>

        {loadingEquity ? (
          <p className="text-gray-400 animate-pulse">
            Loading equity curve...
          </p>
        ) : (
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={equityCurve}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="equity"
                  stroke="#facc15"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* ================= MONTHLY PNL ================= */}
      <div className="bg-[#0f1622] border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Monthly PnL
        </h2>

        {loadingMonthly ? (
          <p className="text-gray-400 animate-pulse">
            Loading monthly PnL...
          </p>
        ) : (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPnl}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pnl" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvisorProfile;

/* ================= METRIC CARD ================= */

const Metric = ({ label, value, loading }) => (
  <div className="bg-[#0f1622] border border-white/10 rounded-xl p-4 text-center">
    <p className="text-gray-400 text-xs">{label}</p>

    {loading ? (
      <p className="text-gray-500 animate-pulse">Loading...</p>
    ) : (
      <p className="text-lg font-semibold text-yellow-400">
        {value}
      </p>
    )}
  </div>
);
