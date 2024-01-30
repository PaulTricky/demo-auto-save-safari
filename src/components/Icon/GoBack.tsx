import React from 'react';

function IconGoBack({size = '', fontWeight = '', className = '',}) {
  return (
    <svg  className={className}  xmlns="http://www.w3.org/2000/svg" stroke={fontWeight} width={size || '20'} height={size || '20'} fill="none" viewBox="0 0 20 20">
      <path fill="#4A5264" d="M12.942 5.442l-4.558 4.559 4.558 4.558-.884.884L6.616 10l5.442-5.442.884.883z"></path>
    </svg>
  );
}

export default IconGoBack;
