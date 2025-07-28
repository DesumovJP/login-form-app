import React from 'react';
const PiggyIcon = (props) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="10" cy="12" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14" cy="10" r="1" fill="currentColor"/>
    <path d="M3 12L1 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 12L19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export default PiggyIcon; 