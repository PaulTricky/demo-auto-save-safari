import React from 'react';

type LogoOnlyProps = {
  color?: 'red' | 'white';
};

const IconLogoOnly: React.FC<LogoOnlyProps> = ({ color = 'red' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="none" viewBox="0 0 24 27">
      <path
        fill={color === 'red' ? '#B00101' : 'white'}
        fillRule="evenodd"
        d="M.844.5a.84.84 0 01.243.036C5.76 1.946 9.413 2.65 12.05 2.65c2.633 0 6.253-.703 10.86-2.11A.844.844 0 0124 1.352v8.316l-9.547 4.676 3.923-11.12-5.763 2.813v.004L5.558 9.485l-2.062 5.852 7.11-3.452-3.805 11.092L24 14.554v5.908c0 .33-.19.629-.488.768l-11.108 5.19a.841.841 0 01-.71.002L.49 21.229a.848.848 0 01-.49-.77V1.349C0 .879.378.5.844.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default IconLogoOnly;
