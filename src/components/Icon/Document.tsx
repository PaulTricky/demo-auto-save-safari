import React from 'react';

const IconDocument = () => {
  return (
    <svg width="48" height="61" viewBox="0 0 48 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_di_3401_53558)">
        <path
          d="M10 51.5L38 51.5C40.2091 51.5 42 49.7091 42 47.5L42 14.1569C42 13.096 41.5786 12.0786 40.8284 11.3284L34.1716 4.67157C33.4214 3.92143 32.404 3.5 31.3431 3.5L10 3.5C7.79086 3.5 6 5.29086 6 7.5L6 47.5C6 49.7091 7.79086 51.5 10 51.5Z"
          fill="url(#paint0_linear_3401_53558)"
        />
      </g>
      <rect x="11" y="12.5" width="12" height="3" rx="1.5" fill="#A1A0A3" />
      <rect opacity="0.5" x="11" y="19.5" width="24" height="3" rx="1.5" fill="#A1A0A3" />
      <rect opacity="0.5" x="11" y="25.5" width="24" height="3" rx="1.5" fill="#A1A0A3" />
      <defs>
        <filter
          id="filter0_di_3401_53558"
          x="0"
          y="0.5"
          width="48"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3401_53558" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3401_53558" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3401_53558" />
        </filter>
        <linearGradient
          id="paint0_linear_3401_53558"
          x1="21.5"
          y1="95"
          x2="19.5"
          y2="-0.500004"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0C2CB" />
          <stop offset="0.916667" stopColor="#EFF0F2" />
          <stop offset="1" stopColor="#F4F5F7" />
          <stop offset="1" stopColor="#DFE3F1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconDocument;
