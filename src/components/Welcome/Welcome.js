import React from 'react';
import { useHistory } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
	const history = useHistory();
	return (
		<div>
			<h1 className='logo'>BLOOM</h1>
			<div className='welcome-buttons'>
				<button className='blue' onClick={() => history.push('baseline')}>
					I'M NEW HERE
				</button>
				<button className='white' onClick={() => history.push('login')}>
					I'M A REGULAR
				</button>
			</div>
		</div>
	);
};

export default Welcome;
