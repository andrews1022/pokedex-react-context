import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className='error'>
			<p className='error__text'>Oops! A wild Snorlax has blocked your path!</p>
			<Link to='/' className='error__button'>
				Go Home
			</Link>
		</div>
	);
};

export default Error;
