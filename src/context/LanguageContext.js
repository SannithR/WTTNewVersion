import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// Language options
export const LANGUAGES = {
  ENGLISH: 'english',
  ARABIC: 'arabic',
  MANDARIN: 'mandarin'
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH);
  const [direction, setDirection] = useState('ltr');

  // Update direction and HTML lang attribute when language changes
  useEffect(() => {
    // Set RTL for Arabic
    if (language === LANGUAGES.ARABIC) {
      setDirection('rtl');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else if (language === LANGUAGES.MANDARIN) {
      setDirection('ltr');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'mandarin'; // Using 'mandarin' to match CSS selectors
    } else {
      setDirection('ltr');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  // Function to change language
  const changeLanguage = (newLanguage) => {
    if (Object.values(LANGUAGES).includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };

  // Function to get locale code for API calls
  const getLocaleCode = () => {
    switch (language) {
      case LANGUAGES.ARABIC:
        return 'ar-IQ';
      case LANGUAGES.MANDARIN:
        return 'zh';
      case LANGUAGES.ENGLISH:
      default:
        return 'en';
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, direction, getLocaleCode }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
