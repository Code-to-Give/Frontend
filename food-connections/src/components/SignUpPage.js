import React from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div>
      <h1>Sign-Up Page</h1>
      <Link to="/home"><button>Sign-Up</button></Link>
    </div>
  );
}

export default SignUpPage;
