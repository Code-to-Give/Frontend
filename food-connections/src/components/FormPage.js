import React from 'react';
import { Link } from 'react-router-dom';

function FormPage() {
  return (
    <div>
      <h1>Form Page</h1>
      <Link to="/home"><button>Submit</button></Link>
    </div>
  );
}

export default FormPage;
