import { LoadingIndicator } from './components/objects/LoadingIndicator';
import { IntroSection, ResultSection } from './sections';

function App() {
  return (
    <div className="App">
      <LoadingIndicator />
      <IntroSection />
      <ResultSection />
    </div>
  );
}

export default App;