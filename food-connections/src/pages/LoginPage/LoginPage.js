import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle login logic here (e.g., authentication)
    
    // After login logic is handled, navigate to BeneHomePage or DonorHomePage
    navigate('/home');
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
          <Button text="Log In" onClick={handleSubmit} fullWidth />  {/* Pass fullWidth prop here */}
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
