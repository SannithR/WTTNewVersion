import React from "react";

export const Flags = ({ className }) => {
  return (
    <svg
      className={`flags ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_11030)">
        <path className="path" d="M22 0H0V22H22V0Z" fill="#CE1126" />

        <path className="path" d="M22 0H0V16.5H22V0Z" fill="#003893" />

        <path className="path" d="M22 0H0V11H22V0Z" fill="#FCD116" />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_11030">
          <rect
            className="rect"
            fill="white"
            height="22"
            rx="3.50685"
            width="22"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
