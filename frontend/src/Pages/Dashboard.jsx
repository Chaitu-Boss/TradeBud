import React, { useEffect, useMemo, useState } from "react";
import supabase from "../../utils/supabase";
import AddTrade from "../components/AddTrade";
import LivePriceChart from "../components/LivePriceChart";
import { useNavigate } from "react-router-dom";
const ADVISOR_ID = "9430400d-0f2e-41b7-8481-9d4d347882cf";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");
  const [advisor, setAdvisor] = useState(null);

  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH TRADES ================= */

  const fetchTrades = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("trades_react")
      .select("*")
      .eq("advisor_id", ADVISOR_ID)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch trades:", error);
    } else {
      setTrades(data || []);
    }

    setLoading(false);
  };
  const fetchAdvisorProfile = async () => {
    const advisorId = localStorage.getItem("id");

    if (!advisorId) {
      console.error("No advisor id in localStorage");
      return;
    }

    const { data, error } = await supabase
      .from("advisors_react")
      .select(`
      name,
      email,
      phone,
      address,
      validity,
      contact_person
    `)
      .eq("id", advisorId)
      .single();

    if (error) {
      console.error("Failed to fetch advisor profile:", error);
    } else {
      setAdvisor(data);
    }
  };



  useEffect(() => {
    fetchTrades();
    fetchAdvisorProfile();
  }, []);
  const handleSignOut = () => {
    // 🔥 clear auth data
    localStorage.removeItem("id");
    localStorage.removeItem("type");

    // 🔁 redirect to login
    navigate("/login");
  };
  /* ================= FILTER BY TAB ================= */

  const filteredTrades = useMemo(() => {
    if (activeTab === "all") return trades;
    if (activeTab === "add") return [];
    return trades.filter((t) => t.status === activeTab);
  }, [activeTab, trades]);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-white/10">
        <h1 className="text-xl font-bold text-yellow-400"><a href="/">TradeBud</a> </h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <span
            onClick={handleSignOut}
            className="cursor-pointer hover:text-red-400 "
          >
            Sign Out
          </span>
        </div>
      </header>

      {/* PROFILE */}
      <section className="px-10 py-8">
        <div className="bg-[#0f1622] border border-white/10 rounded-2xl p-8 flex justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              {advisor?.name || "—"}
            </h2>

            <p className="text-gray-300 mt-1">
              {advisor?.email}
            </p>

            <p className="text-gray-300">
              📞 {advisor?.phone}
            </p>

            <p className="text-gray-400 mt-2">
              📍 {advisor?.address}
            </p>

            <p className="text-gray-400 mt-1">
              👤 Contact: {advisor?.contact_person}
            </p>

            <p className="text-gray-400 mt-1">
              🕒 Validity: {advisor?.validity}
            </p>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="px-10">
        <div className="flex gap-8 border-b border-white/10 text-sm">
          <Tab label="Live Monitoring" active={activeTab === "active"} onClick={() => setActiveTab("active")} />
          <Tab label="All Trades" active={activeTab === "all"} onClick={() => setActiveTab("all")} />
          <Tab label="Drafts" active={activeTab === "draft"} onClick={() => setActiveTab("draft")} />
          <Tab label="Add Trade" active={activeTab === "add"} onClick={() => setActiveTab("add")} />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-10 py-8">
        {activeTab === "add" ? (
          <AddTrade onSave={fetchTrades} />
        ) : (
          <>
            {loading && (
              <p className="text-gray-400">Loading trades...</p>
            )}

            {!loading && filteredTrades.length === 0 && (
              <p className="text-gray-400">No trades found.</p>
            )}

            <div className="space-y-4">
              {filteredTrades.map((trade) => (
                <TradeCard key={trade.id} trade={trade} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

/* ================= COMPONENTS ================= */

const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-3 ${active
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-gray-400 hover:text-white"
      }`}
  >
    {label}
  </button>
);

const TradeCard = ({ trade }) => {
  const border =
    trade.status === "active"
      ? "border-yellow-400"
      : trade.status === "draft"
        ? "border-gray-500"
        : "border-green-500";

  return (
    <div
      className={`bg-[#0f1622] border ${border} rounded-2xl p-6`}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">
            {trade.symbol}
          </h3>

          <p className="text-sm text-gray-300">
            Entry: ₹{trade.entry_price}
          </p>
          <p className="text-sm text-gray-300">
            Target: ₹{trade.target_price}
          </p>

          <p className="text-xs text-gray-400 capitalize mt-1">
            Status: {trade.status}
          </p>
        </div>

        <span
          className={`font-semibold ${trade.trade_type === "BUY"
            ? "text-green-400"
            : "text-red-400"
            }`}
        >
          {trade.trade_type}
        </span>
      </div>

      {/* 🔥 LIVE GRAPH ONLY FOR ACTIVE */}
      {trade.status === "active" && (
        <LivePriceChart symbol={trade.symbol} />
      )}
    </div>
  );
};
