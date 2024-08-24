import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { login } from "../../api/authApi";
import Button from "../../components/Button/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Handle login logic here (e.g., authentication)
    e.preventDefault();

    try {
      // Call the login function and pass the email and password
      const response = await login({ email, password });

      // Assuming the API returns a token or user data
      console.log("Login successful:", response);

      // After successful login, navigate to the HomePage
      navigate("/home");
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
