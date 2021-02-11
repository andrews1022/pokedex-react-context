import React from 'react';
import './Nav.scss';

const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'>
					<h1 className='nav__heading'>Pokedux</h1>
				</li>
				<li className='nav__item'>
					<input className='nav__search' type='text' name='poke_search' id='poke_search' />
					<button className='nav__button'>Seach</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
