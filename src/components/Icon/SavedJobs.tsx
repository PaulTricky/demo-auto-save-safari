import React from 'react';

function IconSavedJobs({ color = '#4C394F' }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="none" viewBox="0 0 14 18">
      <path fill={color} d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2zm0 15l-5-2.18L2 15V2h10v13z"></path>
    </svg>
  );
}

export default IconSavedJobs;
