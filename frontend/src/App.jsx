import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Advisors from "./Pages/Advisors.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import RegisterAdvisor from "./Pages/RegisterAdvisor.jsx";
import Login from "./Pages/Login.jsx";
import RegisterInvestor from "./Pages/RegisterInvestor.jsx";
import RoleBasedDashboard from "./Pages/RoleBasedDashboard.jsx";
import AdvisorProfile from "./Pages/AdvisorProfile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/dashboard" element={<RoleBasedDashboard />} />
        <Route path="/register-advisor" element={<RegisterAdvisor />} />
        <Route path="/register-investor" element={<RegisterInvestor />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/:advisorId"
          element={<AdvisorProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
