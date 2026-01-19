// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterInvestor = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleRegister = () => {
//     setError("");

//     // basic validation
//     if (!form.email || !form.username || !form.password) {
//       setError("All fields are required.");
//       return;
//     }

//     if (!form.email.includes("@")) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // simulate DB save
//     console.log("Investor registered:", form);

//     // redirect to login
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-6">
//       <div className="w-full max-w-md bg-[#0f1622] border border-white/10 rounded-2xl p-8">
//         {/* HEADER */}
//         <h1 className="text-2xl font-bold text-yellow-400">RA Hub</h1>
//         <p className="text-gray-400 text-sm mt-1">
//           Register as Investor
//         </p>

//         {error && (
//           <p className="mt-4 text-sm text-red-400">
//             {error}
//           </p>
//         )}

//         {/* EMAIL */}
//         <div className="mt-6">
//           <label className="text-sm">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//           />
//         </div>

//         {/* USERNAME */}
//         <div className="mt-4">
//           <label className="text-sm">Username</label>
//           <input
//             type="text"
//             placeholder="Choose a username"
//             className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
//             onChange={(e) =>
//               setForm({ ...form, username: e.target.value })
//             }
//           />
//         </div>

//         {/* PASSWORD */}
//         <div className="mt-4">
//           <label className="text-sm">Password</label>
//           <input
//             type="password"
//             placeholder="Create a password"
//             className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
//             onChange={(e) =>
//               setForm({ ...form, password: e.target.value })
//             }
//           />
//         </div>

//         {/* REGISTER */}
//         <button
//           onClick={handleRegister}
//           className="w-full mt-8 bg-yellow-400 text-black font-semibold py-3 rounded-xl"
//         >
//           Create Account
//         </button>

//         {/* FOOTER */}
//         <p className="text-sm text-gray-400 mt-6 text-center">
//           Already have an account?{" "}
//           <span
//             className="text-yellow-400 cursor-pointer hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterInvestor;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterInvestor = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/investor";
  const [step, setStep] = useState(1);
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  /* ================= STEP 1: REQUEST OTP ================= */

  const handleRequestOtp = async () => {
    setError("");

    if (
      !form.full_name ||
      !form.email ||
      !form.phone ||
      !form.username ||
      !form.password
    ) {
      setError("All fields are required.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // 🔁 REQUEST OTP (send ENTIRE FORM)
      await axios.post(url+"/register/request-otp", {
        ...form,
      });

      console.log("OTP sent to email:", form.email);
      setOtpEnabled(true);
    } catch (err) {
      setError("Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= STEP 2: VERIFY OTP ================= */

  const handleVerifyOtp = async () => {
    setError("");

    if (!otpEnabled) {
      setError("Please request OTP first.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(url+"/register/verify-otp", {
        email: form.email,
        otp,
      });
      console.log("OTP verified for:", form.email);
      setStep(2);
    } catch (err) {
      setError("OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= STEP 3: CREATE ACCOUNT ================= */

  const handleCreateAccount = async () => {
    setError("");
    setLoading(true);

    try {
      await axios.post(url+"/register/create-account", {
        email: form.email,
      });

      console.log("Investor registered:", form);

      alert("Investor registered successfully!");
      navigate("/login");
    } catch (err) {
      setError("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#0f1622] border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-yellow-400">RA Hub</h1>
        <p className="text-gray-400 text-sm mt-1">
          Register as Investor
        </p>

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        {/* ================= STEP 1 UI ================= */}
        {step === 1 && (
          <>
            <div className="mt-6">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-sm">Phone</label>
              <input
                type="text"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-sm">Username</label>
              <input
                type="text"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-sm">Password</label>
              <input
                type="password"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            <div className="mt-6">
              <label className="text-sm">OTP</label>
              <input
                type="text"
                maxLength={6}
                disabled={!otpEnabled}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className={`w-full mt-2 bg-transparent border rounded-xl px-4 py-3
                  ${
                    otpEnabled
                      ? "border-white/10"
                      : "border-white/5 opacity-50 cursor-not-allowed"
                  }
                `}
              />
              <p className="text-xs text-gray-500 mt-1">
                (Mock OTP: <span className="text-yellow-400">123456</span>)
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleRequestOtp}
                disabled={loading}
                className="flex-1 border border-white/10 py-3 rounded-xl disabled:opacity-50"
              >
                Request OTP
              </button>

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="flex-1 bg-yellow-400 text-black font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                Verify OTP
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 2 UI ================= */}
        {step === 2 && (
          <button
            onClick={handleCreateAccount}
            disabled={loading}
            className="w-full mt-8 bg-yellow-400 text-black font-semibold py-3 rounded-xl disabled:opacity-50"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default RegisterInvestor;
