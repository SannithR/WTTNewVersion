import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGES } from '../../context/LanguageContext';
import { getTranslation } from '../../translations';
import './LanguageDropdown.css';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    console.log("Toggle dropdown clicked, current state:", isOpen);
    setIsOpen(!isOpen);

    // If we're opening the dropdown, ensure it's visible by appending to body
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      console.log("Dropdown position:", rect);
    }
  };

  const handleLanguageSelect = (selectedLanguage) => {
    console.log("Language selected:", selectedLanguage);
    changeLanguage(selectedLanguage);
    setIsOpen(false);
  };

  // Get language display name based on current language
  const getLanguageDisplayName = (lang) => {
    return getTranslation(language, lang);
  };

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="language-button"
        onClick={toggleDropdown}
      >
        {getTranslation(language, 'selectLanguage')}
      </button>
      {isOpen && (
        <div className="language-options">
          <div
            className={`language-option ${language === LANGUAGES.ENGLISH ? 'active' : ''}`}
            onClick={() => handleLanguageSelect(LANGUAGES.ENGLISH)}
          >
            {getLanguageDisplayName('english')}
          </div>
          <div
            className={`language-option ${language === LANGUAGES.ARABIC ? 'active' : ''}`}
            onClick={() => handleLanguageSelect(LANGUAGES.ARABIC)}
          >
            {getLanguageDisplayName('arabic')}
          </div>
          <div
            className={`language-option ${language === LANGUAGES.MANDARIN ? 'active' : ''}`}
            onClick={() => handleLanguageSelect(LANGUAGES.MANDARIN)}
          >
            {getLanguageDisplayName('mandarin')}
          </div>
        </div>
      )}
    </div>
  );
};
