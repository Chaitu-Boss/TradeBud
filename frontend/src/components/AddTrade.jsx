// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import supabase from "../../utils/supabase";

// const STOCKS = [
//   "RELIANCE",
//   "TCS",
//   "INFY",
//   "WIPRO",
//   "HDFC",
//   "ICICI",
//   "BAJAJFINSV",
//   "MARUTI",
//   "AXIS",
//   "SBIN",
// ];

// const PRICE_TTL = 30_000; // 30 seconds

// const AddTrade = ({ onSave }) => {
//   const timerRef = useRef(null);

//   const [priceExpired, setPriceExpired] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(0);

//   const [form, setForm] = useState({
//     symbol: "",
//     trade_type: "BUY",
//     entry_price: null,
//     target_price: "",
//     stop_loss: "",
//     analysis: "",
//   });

//   const fetchPrice = async () => {
//     if (!form.symbol) {
//       alert("Select stock symbol first");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8080/api/market-data/symbol", {
//         symbol: form.symbol,
//       });
//       const res = await axios.get(
//         "http://localhost:8080/api/market-data/ltp"
//       );

//       const ltp = res.data?.ltp;

//       if (!ltp) {
//         alert("Failed to fetch LTP");
//         return;
//       }

//       setForm((p) => ({ ...p, entry_price: ltp }));
//       setPriceExpired(false);
//       setTimeLeft(30);

//       clearInterval(timerRef.current);

//       timerRef.current = setInterval(() => {
//         setTimeLeft((t) => {
//           if (t <= 1) {
//             clearInterval(timerRef.current);
//             setPriceExpired(true);
//             alert("⏰ Time elapsed. Please fetch price again.");
//             return 0;
//           }
//           return t - 1;
//         });
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       alert("Market data fetch failed");
//     }
//   };

//   const saveDraft = async () => {
//     if (!form.symbol) {
//       alert("Select stock symbol");
//       return;
//     }

//     const { error } = await supabase.from("trades_react").insert({
//       advisor_id: "9430400d-0f2e-41b7-8481-9d4d347882cf",
//       symbol: form.symbol,
//       entry_price: form.entry_price,
//       target_price: form.target_price,
//       stop_loss: form.stop_loss,
//       trade_type: form.trade_type,
//       analysis: form.analysis,
//       status: "draft",
//     });

//     if (error) {
//       alert("Error saving draft");
//       console.error(error);
//       return;
//     } else {
//       alert("Draft saved successfully");
//     }

//     onSave?.();
//   };

//   const publishTrade = async () => {
//     if (!form.entry_price) {
//       alert("Fetch price before publishing");
//       return;
//     }

//     if (priceExpired) {
//       alert("Price expired. Fetch again.");
//       return;
//     }

//     if (!form.target_price || !form.stop_loss) {
//       alert("Target and Stop Loss required");
//       return;
//     }

//     const payload = {
//       advisor_id: "adv-101",
//       symbol: form.symbol,
//       entry_price: Number(form.entry_price),
//       target_price: Number(form.target_price),
//       stop_loss: Number(form.stop_loss),
//       trade_type: form.trade_type,
//       analysis: form.analysis,
//     };

//     try {
//       await axios.post("/api/publish-trade", payload);
//       onSave?.();
//     } catch (err) {
//       console.error(err);
//       alert("Publish failed");
//     }
//   };

//   /* ================= CLEANUP ================= */

//   useEffect(() => {
//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <div className="w-full bg-[#0f1622] border border-white/10 rounded-2xl p-8">
//       <h2 className="text-xl font-semibold">Add New Trade</h2>
//       <p className="text-gray-400 text-sm mt-1">
//         Fetch price and publish within 30 seconds
//       </p>

//       {/* SYMBOL + SIDE */}
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <select
//           value={form.symbol}
//           onChange={(e) =>
//             setForm((p) => ({ ...p, symbol: e.target.value }))
//           }
//           className="bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3"
//         >
//           <option value="">Select stock</option>
//           {STOCKS.map((s) => (
//             <option key={s}>{s}</option>
//           ))}
//         </select>

//         <select
//           value={form.trade_type}
//           onChange={(e) =>
//             setForm((p) => ({ ...p, trade_type: e.target.value }))
//           }
//           className="bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3"
//         >
//           <option>BUY</option>
//           <option>SELL</option>
//         </select>
//       </div>

//       {/* PRICE */}
//       <div className="mt-6 border border-white/10 rounded-xl p-4 flex justify-between items-center">
//         <div>
//           <p className="text-sm font-semibold">Live Market Price</p>
//           <p className="text-gray-400 text-sm">
//             {form.entry_price
//               ? `₹${form.entry_price}`
//               : "Not fetched"}
//           </p>
//           {timeLeft > 0 && (
//             <p className="text-xs text-yellow-400">
//               Expires in {timeLeft}s
//             </p>
//           )}
//         </div>
//         <button
//           onClick={fetchPrice}
//           className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
//         >
//           Fetch Price
//         </button>
//       </div>

//       {/* TARGET + SL */}
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <input
//           type="number"
//           placeholder="Target Price"
//           className="bg-transparent border border-white/10 rounded-xl px-4 py-3"
//           onChange={(e) =>
//             setForm((p) => ({ ...p, target_price: e.target.value }))
//           }
//         />
//         <input
//           type="number"
//           placeholder="Stop Loss"
//           className="bg-transparent border border-white/10 rounded-xl px-4 py-3"
//           onChange={(e) =>
//             setForm((p) => ({ ...p, stop_loss: e.target.value }))
//           }
//         />
//       </div>

//       {/* ANALYSIS */}
//       <textarea
//         rows={4}
//         placeholder="Trade analysis..."
//         className="w-full mt-6 bg-transparent border border-white/10 rounded-xl px-4 py-3"
//         onChange={(e) =>
//           setForm((p) => ({ ...p, analysis: e.target.value }))
//         }
//       />

//       {/* ACTIONS */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={saveDraft}
//           className="px-6 py-3 rounded-xl border border-white/10"
//         >
//           Save Draft
//         </button>

//         <button
//           onClick={publishTrade}
//           disabled={priceExpired}
//           className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold disabled:opacity-50"
//         >
//           Publish Trade
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddTrade;


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import supabase from "../../utils/supabase";

const STOCKS = [
  "RELIANCE",
  "TCS",
  "INFY",
  "WIPRO",
  "HDFC",
  "ICICI",
  "BAJAJFINSV",
  "MARUTI",
  "AXIS",
  "SBIN",
];

const PRICE_TTL = 30_000; // 30 seconds

const AddTrade = ({ onSave }) => {
  const timerRef = useRef(null);

  const [priceExpired, setPriceExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const [form, setForm] = useState({
    symbol: "",
    trade_type: "BUY",
    entry_price: null,
    target_price: "",
    stop_loss: "",
    analysis: "",
  });

  /* ================= VALIDATION ================= */

  const validatePrices = () => {
    const entry = Number(form.entry_price);
    const target = Number(form.target_price);
    const stop = Number(form.stop_loss);

    if (!entry || !target || !stop) {
      alert("Entry, Target and Stop Loss are required");
      return false;
    }

    if (form.trade_type === "BUY") {
      if (target <= entry) {
        alert("For BUY, Target must be greater than Entry price");
        return false;
      }
      if (stop >= entry) {
        alert("For BUY, Stop Loss must be less than Entry price");
        return false;
      }
    }

    if (form.trade_type === "SELL") {
      if (target >= entry) {
        alert("For SELL, Target must be less than Entry price");
        return false;
      }
      if (stop <= entry) {
        alert("For SELL, Stop Loss must be greater than Entry price");
        return false;
      }
    }

    return true;
  };

  /* ================= FETCH PRICE ================= */

  const fetchPrice = async () => {
    if (!form.symbol) {
      alert("Select stock symbol first");
      return;
    }

    try {
      
      const response = await axios.post("http://localhost:8080/api/market-data/symbol", {
        symbol: form.symbol,
      });

      console.log("data:", response.data);

      const res = await axios.get(
        "http://localhost:8080/api/market-data/ltp"
      );
      console.log(res.data);

      const ltp = res.data?.ltp;

      console.log("LTP:", ltp);

      if (!ltp) {
        alert("Failed to fetch LTP");
        return;
      }

      setForm((p) => ({ ...p, entry_price: ltp }));
      setPriceExpired(false);
      setTimeLeft(30);

      clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setPriceExpired(true);
            alert("⏰ Time elapsed. Please fetch price again.");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("Market data fetch failed");
    }
  };

  /* ================= SAVE DRAFT ================= */

  const saveDraft = async () => {
    if (!form.symbol) {
      alert("Select stock symbol");
      return;
    }

    if (form.entry_price && !validatePrices()) return;

    const { error } = await supabase.from("trades_react").insert({
      advisor_id: "9430400d-0f2e-41b7-8481-9d4d347882cf",
      symbol: form.symbol,
      entry_price: form.entry_price,
      target_price: form.target_price,
      stop_loss: form.stop_loss,
      trade_type: form.trade_type,
      analysis: form.analysis,
      status: "draft",
    });

    if (error) {
      alert("Error saving draft");
      console.error(error);
      return;
    }

    alert("Draft saved successfully");
    onSave?.();
  };

  /* ================= PUBLISH ================= */

  const publishTrade = async () => {
    if (!form.entry_price) {
      alert("Fetch price before publishing");
      return;
    }

    if (priceExpired) {
      alert("Price expired. Fetch again.");
      return;
    }

    const payload = {
      advisor_id: "9430400d-0f2e-41b7-8481-9d4d347882cf",
      symbol: form.symbol,
      entry_price: Number(form.entry_price),
      target_price: Number(form.target_price),
      stop_loss: Number(form.stop_loss),
      trade_type: form.trade_type,
      analysis: form.analysis,
    };

    try {
      console.log("Publishing trade:", payload);
      await axios.post("http://localhost:8080/api/advisor/publish-trade", payload);
      alert("Trade published successfully");
      onSave?.();
    } catch (err) {
      console.error(err);
      alert("Publish failed");
    }
  };

  /* ================= CLEANUP ================= */

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="w-full bg-[#0f1622] border border-white/10 rounded-2xl p-8">
      <h2 className="text-xl font-semibold">Add New Trade</h2>
      <p className="text-gray-400 text-sm mt-1">
        Fetch price and publish within 30 seconds
      </p>

      {/* SYMBOL + SIDE */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <select
          value={form.symbol}
          onChange={(e) =>
            setForm((p) => ({ ...p, symbol: e.target.value }))
          }
          className="bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3"
        >
          <option value="">Select stock</option>
          {STOCKS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          value={form.trade_type}
          onChange={(e) =>
            setForm((p) => ({ ...p, trade_type: e.target.value }))
          }
          className="bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3"
        >
          <option>BUY</option>
          <option>SELL</option>
        </select>
      </div>

      {/* PRICE */}
      <div className="mt-6 border border-white/10 rounded-xl p-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Live Market Price</p>
          <p className="text-gray-400 text-sm">
            {form.entry_price ? `₹${form.entry_price}` : "Not fetched"}
          </p>
          {timeLeft > 0 && (
            <p className="text-xs text-yellow-400">
              Expires in {timeLeft}s
            </p>
          )}
        </div>
        <button
          onClick={fetchPrice}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
        >
          Fetch Price
        </button>
      </div>

      {/* TARGET + SL */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <input
          type="number"
          placeholder="Target Price"
          className="bg-transparent border border-white/10 rounded-xl px-4 py-3"
          onChange={(e) =>
            setForm((p) => ({ ...p, target_price: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Stop Loss"
          className="bg-transparent border border-white/10 rounded-xl px-4 py-3"
          onChange={(e) =>
            setForm((p) => ({ ...p, stop_loss: e.target.value }))
          }
        />
      </div>

      {/* ANALYSIS */}
      <textarea
        rows={4}
        placeholder="Trade analysis..."
        className="w-full mt-6 bg-transparent border border-white/10 rounded-xl px-4 py-3"
        onChange={(e) =>
          setForm((p) => ({ ...p, analysis: e.target.value }))
        }
      />

      {/* ACTIONS */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={saveDraft}
          className="px-6 py-3 rounded-xl border border-white/10"
        >
          Save Draft
        </button>

        <button
          onClick={publishTrade}
          disabled={priceExpired}
          className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold disabled:opacity-50"
        >
          Publish Trade
        </button>
      </div>
    </div>
  );
};

export default AddTrade;
