import React from 'react';

function IconWork({ active }: { active?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_2116_28995)">
        <path
          fill={active ? 'var(--main-primary-color)' : '#667085'}
          d="M11.666 5.001V3.335H8.333V5h3.333zM3.333 6.668v9.167h13.333V6.668H3.333zm13.333-1.667a1.66 1.66 0 011.667 1.667v9.167c0 .925-.741 1.666-1.666 1.666H3.332a1.66 1.66 0 01-1.667-1.666l.009-9.167c0-.925.733-1.667 1.658-1.667h3.333V3.335a1.66 1.66 0 011.667-1.667h3.333a1.66 1.66 0 011.667 1.667V5h3.333z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2116_28995">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconWork;
