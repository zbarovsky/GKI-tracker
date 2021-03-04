import React from 'react';

const FormField = ({
	type,
	id,
	err,
	required = false,
	handleChange,
	value,
}) => {
<<<<<<< HEAD
	const styles = {
		border: '0.5px solid #C4C4C4',
		boxSizing: 'border-box',
		borderRadius: '5px',
		width: '100%',
		padding: '10px',
		fontSize: '17px',
	};
	return (
		<>
			<input
				style={styles}
=======
	return (
		<>
			<input
>>>>>>> added create user form and page
				className={!err ? '' : 'err'}
				required={required}
				type={type}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{!err || <p className='err-text'>*{err}</p>}
		</>
	);
};

export default FormField;
