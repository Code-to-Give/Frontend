import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Food Connections Landing Page</h1>
      <Link to="/login"><button>Log-In</button></Link>
      <Link to="/signup"><button>Sign-Up</button></Link>
    </div>
  );
}

export default LandingPage;
