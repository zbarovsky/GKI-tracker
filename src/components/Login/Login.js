import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import FormField from '../FormField/FormField';

const Login = () => {
	//FAKE LOGIN FORM DOESN'T ACTUALLY SEND DATA ANYWHERE BUT USER DEVICE
	const blankForm = {
		email: '',
		password: '',
	};
	const { userInfo, setUserInfo } = useContext(AppContext);
	const [formState, setFormState] = useState(blankForm);
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);

	if (userInfo?.loggedIn) {
		return <Redirect to='/gkiinput' />;
	}

	if (!userInfo) {
		return 'Loading...';
	}

	function handleSubmit(e) {
		const data = JSON.parse(localStorage.getItem('BloomUser'));
		e.preventDefault();
		setSent(true);
		if (
			data.email === formState.email &&
			data.password === formState.password
		) {
			data.loggedIn = true;
			localStorage.setItem('BloomUser', JSON.stringify(data));
			setUserInfo(data);
			return <Redirect to='/gkiinput' />;
		} else {
			setErrors({
				password: 'Incorrect email or password',
			});
		}
		setSent(false);
	}

	function handleChange(e) {
		if (e.target.value) {
			setErrors({
				...errors,
				[e.target.id]: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	return (
		<div className='container sign-up-box'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Log in</h1>
				<label htmlFor='email'>Email:</label>
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={errors.email}
					handleChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={errors.password}
					handleChange={handleChange}
				/>
				<button type='submit' disabled={sent} className='blue'>
					Log In
				</button>
			</form>
			<p style={{ textAlign: 'center' }}>
				Don't have an account? <Link to='/signup'>Sign Up</Link>
			</p>
		</div>
	);
};

export default Login;
