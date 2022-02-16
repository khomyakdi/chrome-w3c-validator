import './General.scss';
import { LoadingIndicator } from './components/objects/LoadingIndicator';
import { IntroSection, ResultSection } from './sections';

const App = () =>  (
  <div className="App">
    <LoadingIndicator />
    <IntroSection />
    <ResultSection />
  </div>
);

export default App;