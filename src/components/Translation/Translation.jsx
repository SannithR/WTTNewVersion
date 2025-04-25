import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations';

export const Translation = ({ textKey, children }) => {
  const { language } = useLanguage();
  
  // If a textKey is provided, use it to get the translation
  if (textKey) {
    return <>{getTranslation(language, textKey)}</>;
  }
  
  // If children is a string, use it as the key
  if (typeof children === 'string') {
    return <>{getTranslation(language, children)}</>;
  }
  
  // Otherwise, just render the children
  return <>{children}</>;
};
