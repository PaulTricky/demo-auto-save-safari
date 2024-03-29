import React from 'react';

function IconIdea({ active }: { active?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_2116_28986)">
        <path
          fill={active ? 'var(--main-primary-color)' : '#667085'}
          d="M9.167 0v2.5h1.666V0H9.167zM3.519 2.34L2.34 3.52l1.768 1.767 1.178-1.178L3.52 2.34zm12.962 0l-1.768 1.768 1.179 1.178L17.66 3.52 16.48 2.34zM10 4.167c-3.212 0-5.833 2.621-5.833 5.833 0 2.306 1.38 4.252 3.333 5.195V17.5c0 .91.756 1.667 1.667 1.667h1.666A1.68 1.68 0 0012.5 17.5v-2.305c1.953-.943 3.333-2.889 3.333-5.195 0-3.212-2.621-5.833-5.833-5.833zm0 1.666A4.154 4.154 0 0114.167 10a4.159 4.159 0 01-2.779 3.924l-.555.196v3.38H9.167v-3.38l-.555-.196A4.159 4.159 0 015.833 10 4.154 4.154 0 0110 5.833zM0 9.167v1.666h2.5V9.167H0zm17.5 0v1.666H20V9.167h-2.5zM4.108 14.713L2.34 16.482 3.52 17.66l1.767-1.767-1.178-1.178zm11.784 0l-1.178 1.179 1.767 1.768 1.178-1.179-1.767-1.768z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2116_28986">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconIdea;
