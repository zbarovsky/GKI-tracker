import './App.scss';
import {Route, Link} from 'react-router-dom';
import {Profile} from './components/profile/profile'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>GKI Tracker</h1>
      </header>
      <body>
        <Route path='/profile' render={() => <Profile /> } />
      </body>
    </div>
  );
}

export default App;
