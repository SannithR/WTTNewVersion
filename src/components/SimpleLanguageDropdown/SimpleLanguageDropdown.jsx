import React, { useState } from 'react';
import { useLanguage, LANGUAGES } from '../../context/LanguageContext';
import { getTranslation } from '../../translations';
import './SimpleLanguageDropdown.css';

export const SimpleLanguageDropdown = () => {
  const { language, changeLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setShowDropdown(false);
  };

  return (
    <div className="simple-language-dropdown">
      <button
        className="dropdown-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="button-content">
          {getTranslation(language, 'selectLanguage')}
        </div>
      </button>

      {showDropdown && (
        <div className="dropdown-menu">
          <button
            className={`dropdown-item ${language === LANGUAGES.ENGLISH ? 'active' : ''}`}
            onClick={() => handleLanguageChange(LANGUAGES.ENGLISH)}
          >
            {getTranslation(language, 'english')}
          </button>
          <button
            className={`dropdown-item ${language === LANGUAGES.ARABIC ? 'active' : ''}`}
            onClick={() => handleLanguageChange(LANGUAGES.ARABIC)}
          >
            {getTranslation(language, 'arabic')}
          </button>
          <button
            className={`dropdown-item ${language === LANGUAGES.MANDARIN ? 'active' : ''}`}
            onClick={() => handleLanguageChange(LANGUAGES.MANDARIN)}
          >
            {getTranslation(language, 'mandarin')}
          </button>
        </div>
      )}
    </div>
  );
};
