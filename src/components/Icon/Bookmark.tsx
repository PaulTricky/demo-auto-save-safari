import React from 'react';

const IconBookmark = ({ color = 'black' }) => {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6666 0.5H2.33329C1.41663 0.5 0.67496 1.25 0.67496 2.16667L0.666626 15.5L6.49996 13L12.3333 15.5V2.16667C12.3333 1.25 11.5833 0.5 10.6666 0.5ZM10.6666 13L6.49996 11.1833L2.33329 13V2.16667H10.6666V13Z"
        fill={color}
      />
    </svg>
  );
};

export default IconBookmark;
