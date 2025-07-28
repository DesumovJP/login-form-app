import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, value, onChange, className = '', style = {}, activeClassName = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const btnClass = `custom-dropdown-btn${open ? ' open' : ''}${activeClassName ? ' ' + activeClassName : ''}`;

  return (
    <div className={`custom-dropdown ${className}`} style={style} ref={ref}>
      <button
        className={btnClass}
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span>{value || options[0]}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="custom-dropdown-list">
          {options.map((opt) => (
            <div
              key={opt}
              className={`custom-dropdown-item${opt === value ? ' selected' : ''}`}
              onClick={() => { onChange(opt); setOpen(false); }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown; 