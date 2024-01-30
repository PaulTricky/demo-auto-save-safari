import React from 'react';

function IconLogout({ color = '#4C394F' }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        fill={color}
        d="M9 18v-2h7V2H9V0h7c.55 0 1.021.196 1.413.587C17.804.979 18 1.45 18 2v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0116 18H9zm-2-4l-1.375-1.45L8.175 10H0V8h8.175l-2.55-2.55L7 4l5 5-5 5z"
      ></path>
    </svg>
  );
}

export default IconLogout;
