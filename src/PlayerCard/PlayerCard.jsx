import PropTypes from "prop-types";
import React from "react";
import "./playercard.css";

export const Playercard = ({ country, appCountryFlagCnClassName }) => {
  return (
    <div className="playercard">
      <div className="app-player-profile-home" />

      <div className="frame">
        <div className="div">
          <div className="text-wrapper">WR</div>

          <div className="text-wrapper-2">#1</div>
        </div>

        <div className="container">
          <div className="frame-2">
            <div className="frame-3">
              <div className="WANG-chuqin">WANG CHUQIN</div>

              <div className="frame-4">
                <div
                  className={`app-country-flag-cn ${appCountryFlagCnClassName}`}
                />

                <div className="text-wrapper-3">CHN</div>
              </div>
            </div>

            <div className="frame-5">
              <div className="frame-6">
                <div className="text-wrapper-4">Points</div>

                <div className="text-wrapper-5">7367</div>
              </div>

              <div className="frame-4">
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
