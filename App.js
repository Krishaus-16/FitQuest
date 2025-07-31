import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BMI from "./pages/BMI";
import Diet from "./pages/Diet";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";
import Motivation from "./components/Motivation"; // adjust path as needed
import Contact from "./pages/Contact";
import ProgressChart from "./pages/ProgressChart";
import NavbarProgressChart from "./components/NavbarProgressChart";
import Auth from "./pages/Auth";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Routes>
      <Route path="/progress-chart" element={
        <>
          <NavbarProgressChart />
          <ProgressChart />
        </>
      } />
      <Route
        path="/auth"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Auth />
          )
        }
      />
      <Route path="*" element={
        isAuthenticated ? (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={
                  <Navigate to="/home" replace />
                } />
                <Route path="/home" element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                } />
                <Route path="/bmi" element={
                  <PrivateRoute>
                    <BMI />
                  </PrivateRoute>
                } />
                <Route path="/diet" element={
                  <PrivateRoute>
                    <Diet />
                  </PrivateRoute>
                } />
                <Route path="/workout" element={
                  <PrivateRoute>
                    <Workout />
                  </PrivateRoute>
                } />
                <Route path="/progress" element={
                  <PrivateRoute>
                    <Progress />
                  </PrivateRoute>
                } />
                <Route path="/contact" element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </>
        ) : (
          <Auth />
        )
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
