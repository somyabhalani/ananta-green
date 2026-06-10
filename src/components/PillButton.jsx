import React from 'react';
import './PillButton.css';

export default function PillButton({ children, href, className = '' }) {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      className={`pill-button ${className}`}
    >
      <span className="pill-button-text">{children}</span>
    </Component>
  );
}
