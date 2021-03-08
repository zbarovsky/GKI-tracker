import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const Home = () => {
	const { userInfo, setUserInfo } = useContext(AppContext);

	if (!userInfo) {
		return 'Loading...';
	}
	if (userInfo?.loggedIn === false) {
		return <Redirect to='welcome' />;
	}

	const logOut = () => {
		const data = { ...userInfo, loggedIn: false };
		localStorage.setItem('BloomUser', JSON.stringify(data));
		setUserInfo(data);
	};
	return (
		<div>
			{`Hi ${userInfo.firstName} ${userInfo.lastName}`}
			<br />
			<button className='blue' onClick={logOut}>
				log out
			</button>
		</div>
	);
};

export default Home;
