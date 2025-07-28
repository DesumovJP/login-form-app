import React from 'react';
const PlusIcon = (props) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export default PlusIcon; 