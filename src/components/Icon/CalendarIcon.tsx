import React from "react";

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <mask
        id="mask0_7268_45306"
        style={{ maskType: "alpha" }}
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
      </mask>
      <g mask="url(#mask0_7268_45306)">
        <path
          fill="#1C1B1F"
          d="M4.5 18c-.412 0-.766-.15-1.06-.448A1.452 1.452 0 013 16.5v-11c0-.403.147-.753.44-1.052A1.433 1.433 0 014.5 4H6V2h1.5v2h5V2H14v2h1.5c.412 0 .766.15 1.06.448.293.299.44.65.44 1.052v11c0 .403-.147.753-.44 1.052A1.433 1.433 0 0115.5 18h-11zm0-1.5h11V9h-11v7.5z"
        ></path>
      </g>
    </svg>
  );
}

export default CalendarIcon;
