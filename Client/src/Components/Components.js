import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import Logout from "./Auth/Logout"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import HomePage from "./Main/Main.js"
import OverviewPage from "./Overview/Overview.js";
import TrackingPage from "./Tracking/Tracking.js";
import GoalsPage from "./Goals/Goals.js";
import PremiumPage from "./Premium/Premium.js";
import Header from "./Header/Header.js";

// Function to define routes to different components, including protected route definitions
export default function Components() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/auth" element={<AuthModule />} />
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/auth/login" element={<AuthLogin />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/overview"
            element={<ProtectedRoute element={<OverviewPage />} />}
          />
          <Route
            path="/tracking"
            element={<ProtectedRoute element={<TrackingPage />} />}
          />
          <Route
            path="/goals"
            element={<ProtectedRoute element={<GoalsPage />} />}
          />
          <Route
            path="/premium"
            element={<ProtectedRoute element={<PremiumPage />} />}
          />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
    </Router>
  );
}
