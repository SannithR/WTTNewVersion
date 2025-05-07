import PropTypes from "prop-types";
import React from "react";
import "./playercard.css";

export const Playercard = ({
  country,
  className,
  appCountryFlagCnClassName,
}) => {
  return (
    <div className={`playercard ${className}`}>
      <div className="app-player-profile" />

      <div className="div">
        <div className="frame-2">
          <div className="text-wrapper">WR</div>

          <div className="text-wrapper-2">#1</div>
        </div>

        <div className="container">
          <div className="frame-3">
            <div className="frame-4">
              <div className="WANG-chuqin">WANG CHUQIN</div>

              <div className="frame-5">
                <div
                  className={`app-country-flag-cn ${appCountryFlagCnClassName}`}
                />

                <div className="text-wrapper-3">CHN</div>
              </div>
            </div>

            <div className="frame-6">
              <div className="frame-7">
                <div className="text-wrapper-4">Points</div>

                <div className="text-wrapper-5">7367</div>
              </div>

              <div className="frame-5">
                <div className="text-wrapper-6">Seed</div>

                <div className="text-wrapper-7">#1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Playercard.propTypes = {
  country: PropTypes.oneOf(["default"]),
};
