import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
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
    e.preventDefault(); // Prevent the default form submission behavior

    if (
      !companyName ||
      !repName ||
      !repPhone ||
      !repEmail ||
      !password ||
      !role
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Check if the password length is at least 8 characters
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (role === "donor") {
      navigate("/donor-approval"); // Navigate to Donor Approval Page
    } else if (role === "beneficiary") {
      navigate("/home"); // Navigate to HomePage
    }
    // Handle other sign-up logic here

    try {
      // Prepare the data object to match the backend API expectations
      const data = {
        company_name: companyName,
        name: repName,
        phone_number: repPhone,
        email: repEmail,
        password,
        role,
      };

      // Call the register function and pass the data
      await register(data);

      if (role === "Donor") {
        navigate("/donor-approval"); // Navigate to Donor Approval Page
      } else if (role === "beneficiary") {
        navigate("/home"); // Navigate to HomePage
      }
    } catch (err) {
      // Handle error
      console.error("Registration failed:", err);
      setError("Registration failed. Please check your inputs and try again.");
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
              <label className="details">Company Name:</label>
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
              <label className="details">Role:</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled>
                  Donor/Beneficiary
                </option>
                <option value="Donor">Donor</option>
                <option value="Beneficiary">Beneficiary</option>
              </select>
            </div>
            {error && <p className="error-message">{error}</p>}
            <Button text="Sign Up" onClick={handleSubmit} fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
