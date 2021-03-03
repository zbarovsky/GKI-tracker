import './App.scss';
import { GkiResults } from './components/gkiResults';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>GKI Tracker</h1>
      </header>
      <body>
        <GkiResults />
      </body>
    </div>
  );
}

export default App;
