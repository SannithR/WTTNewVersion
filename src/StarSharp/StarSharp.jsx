import React from "react";

export const StarSharp = ({ className }) => {
  return (
    <svg
      className={`star-sharp ${className}`}
      fill="none"
      height="35"
      viewBox="0 0 35 35"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.5 25.9146L26.5125 31.3542L24.1209 21.1021L32.0834 14.2042L21.5979 13.3146L17.5 3.64584L13.4021 13.3146L2.91669 14.2042L10.8792 21.1021L8.48752 31.3542L17.5 25.9146Z"
        fill="black"
      />
    </svg>
  );
};
