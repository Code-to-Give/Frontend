import React from 'react';
import './Button.css';

function Button({ text, onClick, className, fullWidth }) {
  return (
    <button 
      className={`cta-button ${className} ${fullWidth ? 'full-width' : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
