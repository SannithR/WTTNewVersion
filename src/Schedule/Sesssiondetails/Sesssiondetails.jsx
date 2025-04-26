import PropTypes from "prop-types";
import React from "react";
import "./sesssiondetails.css";

export const Sesssiondetails = ({
  property1,
  className,
  ticketGreenPngClassName,
}) => {
  return (
    <div className={`sesssiondetails ${className}`}>
      <div className="data">
        <div className="text-wrapper">Session 01</div>
      </div>

      <div className="div">
        <div className="text-wrapper">2-4</div>

        <div className="link">
          <div className={`ticket-green-png ${ticketGreenPngClassName}`} />
        </div>
      </div>

      <div className="data">
        <div className="text-wrapper">1100</div>
      </div>

      <div className="div-wrapper">
        <p className="text-wrapper">
          Men’s Singles Qualifying R1 + Women’s Singles Qualifying R1
        </p>
      </div>
    </div>
  );
};

Sesssiondetails.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
