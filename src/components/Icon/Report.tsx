import React from 'react';

function IconReport({ active }: { active?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none" viewBox="0 0 16 15">
      <path
        fill={active ? 'var(--main-primary-color)' : '#667085'}
        d="M.333.5V13c0 .91.756 1.667 1.667 1.667h12.5V13H2V.5H.333zm13.578 1.91l-3.578 3.578-2.5-2.5-4.756 4.756 1.179 1.179 3.577-3.578 2.5 2.5L15.09 3.59l-1.178-1.178z"
      ></path>
    </svg>
  );
}

export default IconReport;
