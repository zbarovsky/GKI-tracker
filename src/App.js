import './App.scss';
import { Route, Link } from 'react-router-dom';
import { Profile } from './components/profile/profile';
import GKIinput from './components/gkiinput';
import CreateUser from './components/CreateUser/CreateUser';
import Welcome from './components/Welcome/Welcome';

function App() {
	return (
		<div className='App'>
			<header>
				<h1>GKI Tracker</h1>
			</header>
			<body>
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/gkiinput' render={() => <GKIinput />} />
				<Route path='/signup' render={() => <CreateUser />} />
				<Route path='/welcome' render={() => <Welcome />} />
			</body>
		</div>
	);
}

export default App;
