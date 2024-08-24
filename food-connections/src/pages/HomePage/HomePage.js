import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/"><button>Log-Out</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/form"><button>Form</button></Link>
    </div>
  );
}

export default HomePage;
