import React, { useState } from 'react';
import FormField from '../FormField/FormField';
import './CreateUser.css';

const CreateUser = () => {
	const blankForm = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirm: '',
	};
	const [formState, setFormState] = useState(blankForm);
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);

	function doubleCheckForm() {
		const errs = {};
		errs.firstName = formState.firstName ? '' : 'Required';
		errs.lastName = formState.lastName ? '' : 'Required';
		errs.email = formState.email ? '' : 'Required';
		errs.password = formState.password ? '' : 'Required';
		errs.confirm = formState.confirm ? '' : 'Required';
		setErrors({ ...errs });
		if (!errs.lastName && !errs.email && !errs.confirm && !errs.password) {
			return true;
		} else {
			return false;
		}
	}

	function validateUsername(e) {
		if (!e.target.value) {
			setErrors({
				...errors,
				lastName: 'Required',
			});
		} else {
			setErrors({
				...errors,
				lastName: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	function validateEmail(e) {
		const regex = RegExp('[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,15}$');
		if (!e.target.value) {
			setErrors({
				...errors,
				email: 'Required',
			});
		} else if (regex.test(e.target.value) && e.target.value) {
			setErrors({
				...errors,
				email: '',
			});
		} else {
			setErrors({
				...errors,
				email: 'Invalid email',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	function validatePassword(e) {
		if (!e.target.value) {
			setErrors({
				...errors,
				[e.target.id]: 'Required',
			});
		} else if (e.target.id === 'password') {
			if (e.target.value !== formState.confirm) {
				setErrors({
					...errors,
					confirm: 'Passwords must match',
					password: '',
				});
			} else {
				setErrors({
					...errors,
					confirm: '',
				});
			}
		} else if (e.target.value !== formState.password) {
			setErrors({
				...errors,
				confirm: 'Passwords must match',
			});
		} else {
			setErrors({
				...errors,
				confirm: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
		if (doubleCheckForm()) {
			console.log('signed in'); //replace with actual sign in lol
		}
		setSent(false);
	}

	return (
		<div className='container sign-up-box'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Create an account</h1>
				<p>
					by creating an account, you can store all of your GKI measurements
					overtime
				</p>
				<label htmlFor='firstName'>First Name:</label>
				<FormField
					type='text'
					id='firstName'
					value={formState.firstName}
					err={errors.firstName}
					handleChange={(e) => {
						setFormState({ ...formState, firstName: e.target.value });
						setErrors({ ...errors, firstName: '' });
					}}
				/>
				<label htmlFor='lastName'>Last Name:</label>
				<FormField
					type='text'
					id='lastName'
					value={formState.lastName}
					err={errors.lastName}
					handleChange={validateUsername}
				/>
				<label htmlFor='email'>Email:</label>
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={errors.email}
					handleChange={validateEmail}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={errors.password}
					handleChange={validatePassword}
				/>
				<label htmlFor='confirm'>Verify Password:</label>
				<FormField
					type='password'
					id='confirm'
					value={formState.confirm}
					err={errors.confirm}
					handleChange={validatePassword}
				/>
				<button type='submit' disabled={sent} className='blue'>
					Next
				</button>
			</form>
		</div>
	);
};

export default CreateUser;
