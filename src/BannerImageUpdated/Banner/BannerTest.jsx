import React from 'react';
import { Banner } from './Banner';
import { LanguageProvider } from '../../context/LanguageContext';

const BannerTest = () => {
  return (
    <LanguageProvider>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Banner />
      </div>
    </LanguageProvider>
  );
};

export default BannerTest;
