import React from 'react';

// redux
import { useDispatch } from 'react-redux';
import { loadInitialPokemon } from './../../actions/pokemonAction';

// router
import { Link } from 'react-router-dom';

// styles
import './Nav.scss';

const Nav = () => {
	const dispatch = useDispatch();

	const resetPokemon = () => {
		dispatch(loadInitialPokemon());
	};

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'>
					<Link to='/'>
						<h1 className='nav__heading' onClick={resetPokemon}>
							Pokédux
						</h1>
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
					<button className='nav__button'>Search</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
