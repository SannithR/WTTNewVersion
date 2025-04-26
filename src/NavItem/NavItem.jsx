import PropTypes from "prop-types";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../translations";
import "./nav-item.css";

export const NavItem = ({ property1, className, text = "DRAWS", iconName, navKey, isActive, onClick }) => {
  const { language } = useLanguage();
  // Determine which icon to use based on the navKey, text or property1
  const getIconPath = () => {
    // Map navigation keys to corresponding icons
    const iconMap = {
      "home": "/icons/Home.svg",
      "draws": "/icons/Name=Draws.svg",
      "results": "/icons/Name=Results.svg",
      "schedule": "/icons/Name=Schedule.svg",
      "players": "/icons/Name=Players.svg",
      "para": "/icons/Name=Para.svg",
      "youth": "/icons/Name=Youth.svg",
      "news": "/icons/Name=News.svg",
      "visit": "/icons/Name=Visit.svg",
      "about": "/icons/Name=about.svg",
      // Fallback for English text values (for backward compatibility)
      "DRAWS": "/icons/Name=Draws.svg",
      "RESULTS": "/icons/Name=Results.svg",
      "SCHEDULE": "/icons/Name=Schedule.svg",
      "PLAYERS": "/icons/Name=Players.svg",
      "PARA": "/icons/Name=Para.svg",
      "YOUTH": "/icons/Name=Youth.svg",
      "NEWS": "/icons/Name=News.svg",
      "VISIT": "/icons/Name=Visit.svg",
      "ABOUT": "/icons/Name=about.svg"
    };

    // Use the provided iconName, or navKey mapping, or fall back to text mapping
    return iconName || (navKey && iconMap[navKey]) || iconMap[text] || "starsharp.svg";
  };

  // Determine the CSS class based on active state
  const activeClass = isActive ? "active" : "";

  return (
    <div
      className={`nav-item ${property1} ${className} ${activeClass}`}
      onClick={() => onClick && onClick(navKey)}
    >
      <div className="icon-button">
        <div className="icon">
          <img className="star-sharp" src={getIconPath()} alt={`${text} icon`} />
        </div>
      </div>

      <div className="home">
        {navKey === "home" ? <>{getTranslation(language, 'home')}</> : <>{text}</>}
      </div>
    </div>
  );
};

NavItem.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  iconName: PropTypes.string, // Optional custom icon path
  navKey: PropTypes.string, // Language-independent key for navigation item
  isActive: PropTypes.bool, // Whether this nav item is currently active
  onClick: PropTypes.func, // Click handler for the nav item
};
