import React from 'react';
import './Nav.scss';

const Nav = () => {
	return (
		<nav className='nav'>
			<ul>
				<li>Pokedux</li>
				<li>
					<input type='text' name='' id='' />
					<button>Seach</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
