import React from 'react';

function IconBar({ color = 'black' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="4" fill="none" viewBox="0 0 14 4">
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.52 1.75c0 .966-.789 1.75-1.76 1.75A1.755 1.755 0 010 1.75C0 .784.788 0 1.76 0c.971 0 1.76.784 1.76 1.75zm10.48 0c0 .966-.788 1.75-1.76 1.75a1.755 1.755 0 01-1.759-1.75c0-.966.788-1.75 1.759-1.75.972 0 1.76.784 1.76 1.75zm-5.24 0c0 .966-.788 1.75-1.76 1.75a1.755 1.755 0 01-1.76-1.75C5.24.784 6.03 0 7 0c.972 0 1.76.784 1.76 1.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IconBar;
