import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Log-In Page</h1>
      <Link to="/home"><button>Log-In</button></Link>
    </div>
  );
}

export default LoginPage;
