import { english } from './english';
import { arabic } from './arabic';
import { mandarin } from './mandarin';
import { LANGUAGES } from '../context/LanguageContext';

export const translations = {
  [LANGUAGES.ENGLISH]: english,
  [LANGUAGES.ARABIC]: arabic,
  [LANGUAGES.MANDARIN]: mandarin,
};

export const getTranslation = (language, key) => {
  if (!translations[language]) {
    return translations[LANGUAGES.ENGLISH][key] || key;
  }
  
  return translations[language][key] || translations[LANGUAGES.ENGLISH][key] || key;
};
