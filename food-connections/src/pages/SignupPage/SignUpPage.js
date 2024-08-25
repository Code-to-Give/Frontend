import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { register } from "../../api/authApi";
import Button from "../../components/Button/Button";

function SignUpPage() {
  const [companyName, setCompanyName] = useState("");
  const [repName, setRepName] = useState("");
  const [repPhone, setRepPhone] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !repEmail ||
      !password ||
      !repName ||
      !repPhone ||
      !role ||
      (role !== "Volunteer" && !companyName)
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (role === "Donor") {
      navigate("/donor-approval");
    } else if (role === "Beneficiary" || role === "Volunteer") {
      navigate("/home");
    }

    try {
      const data = {
        company_name: role === "Volunteer" ? "" : companyName,
        name: repName,
        phone_number: repPhone,
        email: repEmail,
        password,
        role,
      };

      await register(data);

      if (role === "Donor") {
        navigate("/donor-approval");
      } else if (role === "Beneficiary" || role === "Volunteer") {
        navigate("/home");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Registration failed. Please check your inputs and try again.");
      console.log(error.response?.data);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-content">
        <div className="signup-container">
          <div className="signup-image">
            <img src="/heartsHand.png" alt="Signup Details" />
          </div>
          <div className="signup-box">
            <h1>Sign Up</h1>
            <div className="loginLine">
              <p>Have an account?</p>
              <Link to="/login" className="router-link">
                Log In
              </Link>
            </div>
            <div className="input-group">
              <label className="details">Representative's Work E-Mail:</label>
              <input
                type="email"
                placeholder="Representative's Work E-Mail"
                value={repEmail}
                onChange={(e) => setRepEmail(e.target.value)}
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
            <div className="input-group">
              <label className="details">Representative's Name:</label>
              <input
                type="text"
                placeholder="Representative's Name"
                value={repName}
                onChange={(e) => setRepName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="details">Representative's Phone Number:</label>
              <input
                type="text"
                placeholder="Representative's Phone Number"
                value={repPhone}
                onChange={(e) => setRepPhone(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="details">Role:</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled>
                  Donor/Beneficiary/Volunteer
                </option>
                <option value="Donor">Donor</option>
                <option value="Beneficiary">Beneficiary</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>
            {role !== "Volunteer" && (
              <div className="input-group">
                <label className="details">Company Name:</label>
                <p className="subtext">
                  If you are a volunteer, put your name in "Company Name" and "Name".
                </p>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
            <Button text="Sign Up" onClick={handleSubmit} fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
