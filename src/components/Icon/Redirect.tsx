import React from 'react';

const IconRedirect = ({ color = '#AF0000' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <mask id="mask0_3155_60094" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect x="0.480469" width="15.5192" height="16" fill="#D9D9D9" />
      </mask> */}
      <g mask="url(#mask0_3155_60094)">
        <path
          d="M4.40823 12.3119L3.28223 11.1511L9.61924 4.61774H4.14956V2.98438H12.3295V11.4177H10.7452V5.77863L4.40823 12.3119Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default IconRedirect;
