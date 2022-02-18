import './General.scss';
import { LoadingIndicator } from './components/objects/LoadingIndicator';
import { IntroSection, ResultSection } from './sections';
import { ScrollToTop } from './components/objects/ScrollToTop';

const App = () =>  (
  <div className="App">
    <LoadingIndicator />
    <IntroSection />
    <ResultSection />
    <ScrollToTop />
  </div>
);

export default App;