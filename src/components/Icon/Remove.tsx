import React from 'react';

const IconRemove = ({ color }: { color?: string }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.39999 3.15078H12.6M5.59999 10.1508V5.95078M8.39999 10.1508V5.95078M9.79999 12.9508H4.19999C3.4268 12.9508 2.79999 12.324 2.79999 11.5508V3.85078C2.79999 3.46418 3.11339 3.15078 3.49999 3.15078H10.5C10.8866 3.15078 11.2 3.46418 11.2 3.85078V11.5508C11.2 12.324 10.5732 12.9508 9.79999 12.9508ZM5.59999 3.15078H8.39999C8.78659 3.15078 9.09999 2.83738 9.09999 2.45078V1.75078C9.09999 1.36418 8.78659 1.05078 8.39999 1.05078H5.59999C5.21339 1.05078 4.89999 1.36418 4.89999 1.75078V2.45078C4.89999 2.83738 5.21339 3.15078 5.59999 3.15078Z"
        stroke={color ?? 'var(--main-primary-color)'}
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconRemove;
