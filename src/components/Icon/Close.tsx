import React from 'react';

const IconClose = ({ color = '#9194A0' }: { color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
      <path
        fill={color}
        d="M1.333 11.83L.166 10.665l4.667-4.667L.166 1.331 1.333.164l4.666 4.667L10.666.164l1.167 1.167-4.667 4.666 4.667 4.667-1.167 1.167-4.667-4.667-4.666 4.667z"
      ></path>
    </svg>
  );
};

export default IconClose;
