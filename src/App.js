import './App.scss';
import { Route, Link, Redirect } from 'react-router-dom';
import { Profile } from './components/profile/profile';
import GKIinput from './components/gkiinput';
import CreateUser from './components/CreateUser/CreateUser';
import Welcome from './components/Welcome/Welcome';
import { AppContext } from './AppContext';
import { useContext } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {

	const { userInfo, setUserInfo } = useContext(AppContext);

	if (!userInfo) {
		setUserInfo(JSON.parse(localStorage.getItem('BloomUser')) || null);
	}

	return (
		<div className='App'>
			<header>
				<h1>GKI Tracker</h1>
			</header>
			<body>
				<Route path='/' exact render={() => <Home />} />
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/gkiinput' render={() => <GKIinput />} />
				<Route path='/signup' render={() => <CreateUser />} />
				<Route path='/welcome' render={() => <Welcome />} />
				<Route path='/login' render={() => <Login />} />
			</body>
		</div>
	);
}

export default App;
