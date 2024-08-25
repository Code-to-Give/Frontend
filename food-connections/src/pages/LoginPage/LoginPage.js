import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { getCurrentUser, login } from "../../api/authApi";
import Button from "../../components/Button/Button";
import { useAuth } from "../../utils/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { removeToken } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });

      // use token to get user data
      const user = await getCurrentUser();
      console.log("User data:", user);

      const userRole = user.role;
      console.log(userRole);
      if (userRole === "Donor") {
        navigate("/donor-home");
      } else if (userRole === "Beneficiary") {
        navigate("/bene-home");
      } else if (userRole === "Volunteer") {
        navigate("/home");
      } else {
        console.error("Invalid user role:", userRole);
        setError("Invalid user role. Please try again.");
        removeToken();
        navigate("/home");
      }
    } catch (err) {
      // Handle error
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-content">
        <div className="login-box">
          <h1>Log In</h1>
          <div className="input-group">
            <label className="details">E-mail:</label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="details">Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <Button text="Log In" onClick={handleSubmit} fullWidth />{" "}
          {/* Pass fullWidth prop here */}
          <div className="signup">
            <p>Don't have an account?</p>
            <Link to="/signup" className="router-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
