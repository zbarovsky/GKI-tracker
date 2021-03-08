import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<header class='nav-container'>
			<Link to='/gkiinput'>
				<h1 className='logo'>BLOOM</h1>
			</Link>
			<div className='nav-menu'>
				<Link to='/gkiinput'>Home</Link>
				<Link to='/account'>Account</Link>
			</div>
		</header>
	);
};

export default Nav;
