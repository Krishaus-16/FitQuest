import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", password: "", confirmPassword: "" });

  const backgroundImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSigninChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signinData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuthenticated", "true");
        alert("Signin successful! Redirecting to home page...");
        window.location.href = "/home";
      } else {
        alert(data.message || "Signin failed");
      }
    } catch (error) {
      alert("Error signing in");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupData.email, password: signupData.password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuthenticated", "true");
        alert("Signup successful! Redirecting to home page...");
        window.location.href = "/home";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Error signing up");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="auth-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
        <div className="auth-tabs">
          <div
            className={`auth-tab ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => handleTabClick("signin")}
          >
            Sign In
          </div>
          <div
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabClick("signup")}
          >
            Sign Up
          </div>
        </div>

        {activeTab === "signin" && (
          <form className="auth-form" onSubmit={handleSigninSubmit}>
            <input
              type="email"
              name="email"
              className="auth-input"
              placeholder="Email"
              value={signinData.email}
              onChange={handleSigninChange}
              required
            />
            <input
              type="password"
              name="password"
              className="auth-input"
              placeholder="Password"
              value={signinData.password}
              onChange={handleSigninChange}
              required
            />
            <button type="submit" className="auth-submit">
              Sign In
            </button>
          </form>
        )}

        {activeTab === "signup" && (
          <form className="auth-form" onSubmit={handleSignupSubmit}>
            <input
              type="email"
              name="email"
              className="auth-input"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <input
              type="password"
              name="password"
              className="auth-input"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              className="auth-input"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
            />
            <button type="submit" className="auth-submit">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
