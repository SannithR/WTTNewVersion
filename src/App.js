import './App.css';
import { HomepageEnglish } from './HomepageEnglish/HomepageEnglish';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
<HomepageEnglish/>
    </LanguageProvider>
  );
}

export default App;
