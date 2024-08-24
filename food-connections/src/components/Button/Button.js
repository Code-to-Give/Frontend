import React from 'react';
import './Button.css';

function Button({ text, onClick, className }) {
  return (
    <button className={`standard-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
