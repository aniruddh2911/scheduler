import './App.css';
import BottomSection from './BottomSection';
import LeftSection from './LeftSection';
import MainComponent from './MainComponent';
import MiddleSection from './MiddleSection';

function App() {
  return (
    <div className="App">
      <LeftSection />
      <MiddleSection />
      <BottomSection />
      <MainComponent />
    </div>
  );
}

export default App;
