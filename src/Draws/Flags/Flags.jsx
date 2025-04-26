import React from "react";

export const Flags = ({ className }) => {
  return (
    <svg
      className={`flags ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_10791)">
        <path className="path" d="M24 0H0V24H24V0Z" fill="#CE1126" />

        <path className="path" d="M24 0H0V18H24V0Z" fill="#003893" />

        <path className="path" d="M24 0H0V12H24V0Z" fill="#FCD116" />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_10791">
          <rect className="rect" fill="white" height="24" rx="4" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
