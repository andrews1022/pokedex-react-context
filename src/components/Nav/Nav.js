import React from 'react';

// router
import { Link } from 'react-router-dom';

// styles
import './Nav.scss';

const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'>
					<Link to='/'>
						<h1 className='nav__heading'>Pokédux</h1>
					</Link>
				</li>
				<li className='nav__item'>
					<input
						className='nav__search'
						type='text'
						name='poke_search'
						id='poke_search'
						placeholder='Enter a Pokémon name...'
					/>
					<button className='nav__button'>Seach</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
