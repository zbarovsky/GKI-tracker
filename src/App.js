import './App.scss';
import {Route, Link} from 'react-router-dom';
import { GkiResults } from './components/gkiResults';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>GKI Tracker</h1>
      </header>
      <body>
        <Route path='/profile' render={() => <GkiResults /> } />
      </body>
    </div>
  );
}

export default App;
