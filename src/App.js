import './App.css';
import { HomepageEnglish } from './HomepageEnglish/HomepageEnglish';
import { LanguageProvider } from './context/LanguageContext';
import { Draws } from './Draws/DrawsComponents/DrawsComponents';
import { Results } from './Results/ResultsComponent/ResultsComponent';
import { Schedule } from './Schedule/ScheduleComponent/ScheduleComponent';
import { Players } from './Players/Players/Players';





function App() {
  return (
    <LanguageProvider>
<HomepageEnglish/>
    </LanguageProvider>
  );
}

export default App;
