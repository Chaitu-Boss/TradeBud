import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!form.username || !form.password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);

    try {
      /* 🔍 CHECK INVESTOR TABLE */
      const { data: investor, error: investorError } = await supabase
        .from("investors_react")
        .select("*")
        .eq("username", form.username)
        .eq("password", form.password)
        .single();

      if (investor) {
        console.log("Investor login:", investor);

        // ✅ STORE ID
        localStorage.setItem("id", investor.id);
        localStorage.setItem("type", "investor");
        navigate("/dashboard");
        return;
      }

      /* 🔍 CHECK ADVISOR TABLE */
      const { data: advisor, error: advisorError } = await supabase
        .from("advisors_accounts")
        .select("*")
        .eq("username", form.username)
        .eq("password", form.password)
        .single();

      if (advisor) {
        console.log("Advisor login:", advisor);

        // ✅ STORE ID
        localStorage.setItem("id", advisor.id);
        localStorage.setItem("type", "advisor");

        navigate("/dashboard");
        return;
      }


      setError("Invalid username or password.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#0f1622] border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-yellow-400">TradeBud</h1>
        <p className="text-gray-400 text-sm mt-1">Login to your account</p>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <div className="mt-6">
          <label className="text-sm">Username</label>
          <input
            type="text"
            className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </div>

        <div className="mt-4">
          <label className="text-sm">Password</label>
          <input
            type="password"
            className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 bg-yellow-400 text-black font-semibold py-3 rounded-xl cursor-pointer disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/register-investor")}
            className="w-full border border-white/10 py-3 rounded-xl hover:bg-white/5"
          >
            Register as Investor
          </button>

          <button
            onClick={() => navigate("/register-advisor")}
            className="w-full border border-white/10 py-3 rounded-xl hover:bg-white/5"
          >
            Register as Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
