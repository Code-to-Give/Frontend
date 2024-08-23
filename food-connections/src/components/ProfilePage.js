import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/home"><button>Back to Home</button></Link>
    </div>
  );
}

export default ProfilePage;
