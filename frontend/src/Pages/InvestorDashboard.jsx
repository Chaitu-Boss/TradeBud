import React, { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvestorDashboard = () => {
  const investorId = localStorage.getItem("id");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [subscribedAdvisorIds, setSubscribedAdvisorIds] = useState([]);
  const navigate = useNavigate();
  const fetchSubscribedAdvisorIds = async () => {
    const { data, error } = await supabase
      .from("investors_advisors_join")
      .select("advisor_id")
      .eq("investor_id", investorId);

    if (!error) {
      setSubscribedAdvisorIds(data.map((d) => d.advisor_id));
    }
  };
  const fetchAdvisorRankings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/advisor/rankings"
      );

      // expecting: res.data.rankings = []
      return res.data?.rankings || [];
    } catch (err) {
      console.error("Failed to fetch advisor rankings", err);
      return [];
    }
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


  const [tab, setTab] = useState("browse");
  const [advisors, setAdvisors] = useState([]);
  const [myAdvisors, setMyAdvisors] = useState([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchSubscribedAdvisorIds();

    if (tab === "browse") {
      fetchAdvisors();
    }

    if (tab === "my") {
      fetchMyAdvisors();
    }
  }, [tab]);


  const fetchAdvisors = async () => {
    const { data: accounts, error: accError } = await supabase
      .from("advisors_accounts")
      .select("id");

    if (accError) {
      console.error(accError);
      return;
    }

    const advisorIds = accounts.map((a) => a.id);

    const { data, error } = await supabase
      .from("advisors_react")
      .select("id, name, sebi_number")
      .in("id", advisorIds);

    if (error) {
      console.error(error);
      return;
    }

    // 🔥 FETCH RANKINGS FROM BACKEND
    const rankings = await fetchAdvisorRankings();

    // 🔥 MERGE RANKINGS WITH ADVISORS
    const merged = data.map((advisor) => {
      const rankData = rankings.find(
        (r) => r.advisorId === advisor.id
      );

      return {
        ...advisor,
        ranking: rankData || null,
      };
    });

    // remove already subscribed advisors
    const filtered = merged.filter(
      (a) => !subscribedAdvisorIds.includes(a.id)
    );

    setAdvisors(filtered);
  };


  const fetchMyAdvisors = async () => {
    const { data, error } = await supabase
      .from("investors_advisors_join")
      .select(`
        advisor_id,
        advisors_react (
          id,
          name,
          sebi_number
        )
      `)
      .eq("investor_id", investorId);

    if (!error) setMyAdvisors(data);
  };

  const url = "http://localhost:8080/api"; // Backend URL
  const subscribe = async (advisorId) => {
    try {
      setPaymentStatus("Creating payment order...");

      const { data: order } = await axios.post(
        url + "/investor/subscriptions/create-order",
        {
          investorId,
          advisorId,
          amount: 499,
        }
      );

      setPaymentStatus("Loading payment gateway...");

      const razorpayLoaded = await loadRazorpay();
      if (!razorpayLoaded) {
        setPaymentStatus("❌ Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: order.razorpayKey,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Advisor Subscription",
        description: "Monthly Advisor Plan",

        handler: async (response) => {
          try {
            setPaymentStatus("Verifying payment...");

            await axios.post(
              url + "/investor/subscriptions/verify-payment",
              {
                investorId,
                advisorId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            const { error: joinError } = await supabase
              .from("investors_advisors_join")
              .insert({
                investor_id: investorId,
                advisor_id: advisorId,
              });

            if (joinError) throw joinError;

            const { error: paymentError } = await supabase
              .from("subscriptions")
              .insert({
                investor_id: investorId,
                advisor_id: advisorId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                amount: 499,
                status: "paid", // must match payment_status enum
              });

            if (paymentError) throw paymentError;

            setSubscribedAdvisorIds((prev) => [...prev, advisorId]);
            setAdvisors((prev) => prev.filter((a) => a.id !== advisorId));
            setPaymentStatus("✅ Subscription activated successfully!");
            setTab("my");

          } catch (err) {
            console.error(err);
            setPaymentStatus("❌ Something went wrong while saving payment");
          }
        }
        ,

        modal: {
          ondismiss: () => {
            setPaymentStatus("❌ Payment cancelled by user");
          },
        },

        prefill: {
          email: "testuser@gmail.com",
          contact: "9999999999",
        },

        theme: {
          color: "#0a7cff",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setPaymentStatus("❌ Payment failed");
    }
  };

  const loadTrades = async (advisor) => {
    setSelectedAdvisor(advisor);

    const { data, error } = await supabase
      .from("trades_react")
      .select("*")
      .eq("advisor_id", advisor.id);

    if (!error) setTrades(data);
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400 mb-6">
          Investor Dashboard
        </h1>
        <button
        onClick={() => {
          localStorage.removeItem("id");
          localStorage.removeItem("type");
          navigate("/login", { replace: true });
        }}
        className="text-sm text-gray-300 hover:text-red-400 border cursor-pointer border-white/10 px-4 py-2 rounded-xl"
      >
        Sign Out
      </button>
      </div>
      

      {/* ================= TABS ================= */}
      <div className="flex gap-4 mb-8 items-center ">
        <button
          onClick={() => {
            setTab("browse");
            setSelectedAdvisor(null);
          }}
          className={`px-4 py-2 rounded-xl cursor-pointer ${tab === "browse"
            ? "bg-yellow-400 text-black"
            : "border border-white/10"
            }`}
        >
          Browse Advisors
        </button>
        <button
          onClick={() => {
            setTab("my");
            setSelectedAdvisor(null);
          }}
          className={`px-4 py-2 rounded-xl cursor-pointer ${tab === "my"
            ? "bg-yellow-400 text-black"
            : "border border-white/10"
            }`}
        >
          My Advisors
        </button>
        {paymentStatus && (
          <div className="mt-6 text-sm font-semibold text-yellow-400 pb-5">
            {paymentStatus}
          </div>
        )}
      </div>

      {/* ================= BROWSE ADVISORS ================= */}
      {tab === "browse" && (
        <div className="grid md:grid-cols-2 gap-6">
          {advisors.map((a) => (
            <div
              key={a.id}
              className="border border-white/10 rounded-xl p-6 cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{a.name}</h2>
              <p className="text-sm text-gray-400">
                SEBI: {a.sebi_number}
              </p>

              {a.ranking && (
                <div className="mt-2 text-xs text-gray-400 space-y-1">
                  <p>🏆 Rank: {a.ranking.rank}</p>
                  <p>⭐ Score: {a.ranking.finalScore}</p>
                  <p>🎯 Accuracy: {a.ranking.accuracy}%</p>
                  <p>📈 ROI: {(a.ranking.roi * 100).toFixed(2)}%</p>
                  <p>📊 Trades: {a.ranking.totalTrades}</p>
                </div>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 PREVENT NAVIGATION
                  subscribe(a.id);
                  console.log("Subscribing to advisor", a.id);
                }}
                className="mt-4 bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-xl"
              >
                Subscribe ₹499
              </button>
              <button
                onClick={(e) => {
                  navigate(`/dashboard/${a.id}`);
                }}
                className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-xl ml-15 cursor-pointer"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}


      {tab === "my" && !selectedAdvisor && (
        <div className="space-y-4">
          {myAdvisors.map((a) => (
            <div
              key={a.advisor_id}
              className="border border-white/10 rounded-xl p-5 flex justify-between"
            >
              <div>
                <h2 className="font-semibold">
                  {a.advisors_react.name}
                </h2>
                <p className="text-sm text-gray-400">
                  SEBI: {a.advisors_react.sebi_number}
                </p>
              </div>

              <button
                onClick={() => loadTrades(a.advisors_react)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-xl cursor-pointer"
              >
                View Trades
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ================= ADVISOR TRADES ================= */}
      {selectedAdvisor && (
        <div>
          <button
            onClick={() => setSelectedAdvisor(null)}
            className="mb-4 text-sm text-yellow-400 cursor-pointer"
          >
            ← Back to My Advisors
          </button>

          <h2 className="text-xl font-bold mb-4">
            Trades by {selectedAdvisor.name}
          </h2>

          <div className="space-y-4">
            {trades.map((t) => (
              <div
                key={t.id}
                className="border border-white/10 rounded-xl p-5"
              >
                <div className="flex justify-between">
                  <span className="font-semibold">{t.symbol}</span>
                  <span
                    className={`text-sm ${t.trade_type === "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                      }`}
                  >
                    {t.trade_type}
                  </span>
                </div>

                <div className="text-sm text-gray-400 mt-2">
                  Entry: {t.entry_price} | Target: {t.target_price} |
                  SL: {t.stop_loss}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;
