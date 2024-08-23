import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    // Handle login logic here (e.g., authentication)
    
    // After login logic is handled, navigate to HomePage
    navigate('/home'); // Update path to target HomePage
  };

  return (
    <div className="login-page">
      <div id="navbar">
        <div id="navbar-left">
          <Link to="/" className="navbar-logo">Food-Connections</Link>
        </div>
      </div>

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
          <button className="login" onClick={handleSubmit}>Log In</button>
          <div className="signup">
            <p>Don't have an account?</p>
            <Link to="/signup" className="router-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
