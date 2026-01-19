import React from "react";
import Dashboard from "./Dashboard";
import InvestorDashboard from "./InvestorDashboard";
import { Navigate } from "react-router-dom";

const RoleBasedDashboard = () => {
  const type = localStorage.getItem("type");

  if (!type) {
    // not logged in
    return <Navigate to="/login" replace />;
  }

  if (type === "advisor") {
    return <Dashboard />;
  }

  if (type === "investor") {
    return <InvestorDashboard />;
  }

  // fallback
  return <Navigate to="/login" replace />;
};

export default RoleBasedDashboard;
