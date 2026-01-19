import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterAdvisor = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sebi, setSebi] = useState("");
  const [otp, setOtp] = useState("");
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const url = "http://localhost:8080/api/advisor"
  /* ================= STEP 1 ================= */

  const handleSebiSubmit = async () => {
    setError("");

    const regex = /^[A-Za-z0-9]{12}$/;
    if (!regex.test(sebi)) {
      setError("SEBI Registration Number must be 12 alphanumeric characters.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(url + "/register/request-otp", {
        sebi_number: sebi,
      });

      console.log("OTP sent for SEBI:", sebi);

      // ✅ enable OTP input
      setOtpEnabled(true);
    } catch (err) {
      setError("Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setError("");

    if (!otpEnabled) {
      setError("Please verify SEBI first.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(url + "/register/verify-otp", {
        sebi_number: sebi,
        otp,
      });
      console.log(res.data);
      setStep(2);
    } catch (err) {
      setError("OTP verification failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= STEP 2 ================= */

  const handleRegister = async () => {
    setError("");

    if (!credentials.username || !credentials.password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(url + "/register/create-account", {
        sebi_number: sebi,
        username: credentials.username,
        password: credentials.password,
      });

      console.log("Advisor account created:", {
        sebi,
        ...credentials,
      });

      alert("Advisor registered successfully!");
      navigate("/login");
    } catch (err) {
      setError("Registration failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#0f1622] border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-yellow-400">
          Register as Advisor
        </h1>

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        {/* ================= STEP 1 UI ================= */}
        {step === 1 && (
          <>
            <p className="text-gray-400 text-sm mt-2">
              Verify your SEBI Registration Number
            </p>

            {/* SEBI NUMBER */}
            <div className="mt-6">
              <label className="text-sm">SEBI Registration Number *</label>
              <input
                type="text"
                value={sebi}
                maxLength={12}
                placeholder="e.g. INA000012345"
                onChange={(e) => setSebi(e.target.value.toUpperCase())}
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* OTP */}
            <div className="mt-4">
              <label className="text-sm">OTP *</label>
              <input
                type="text"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                value={otp}
                disabled={!otpEnabled}
                onChange={(e) => setOtp(e.target.value)}
                className={`w-full mt-2 bg-transparent border rounded-xl px-4 py-3 focus:outline-none
                  ${otpEnabled
                    ? "border-white/10 focus:border-yellow-400"
                    : "border-white/5 opacity-50 cursor-not-allowed"
                  }
                `}
              />
              <p className="text-xs text-gray-500 mt-1">
                (For now, OTP is <span className="text-yellow-400">123456</span>)
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSebiSubmit}
                disabled={loading}
                className="flex-1 border border-white/10 py-3 rounded-xl disabled:opacity-50"
              >
                Verify SEBI
              </button>

              <button
                onClick={handleOtpSubmit}
                disabled={loading}
                className="flex-1 bg-yellow-400 text-black font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                Submit OTP
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 2 UI ================= */}
        {step === 2 && (
          <>
            <p className="text-gray-400 text-sm mt-2">
              Create your login credentials
            </p>

            <div className="mt-6">
              <label className="text-sm">Username *</label>
              <input
                type="text"
                placeholder="Choose a username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm">Password *</label>
              <input
                type="password"
                placeholder="Create a password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full mt-8 bg-yellow-400 text-black font-semibold py-3 rounded-xl disabled:opacity-50"
            >
              Complete Registration
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterAdvisor;
