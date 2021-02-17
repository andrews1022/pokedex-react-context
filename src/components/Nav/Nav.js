import React, { useState } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { loadInitialPokemon } from './../../actions/pokemonAction';
import { searchPokemon } from './../../actions/searchAction';

// router
import { Link, useHistory } from 'react-router-dom';

// styles
import './Nav.scss';

const Nav = () => {
	const [textInput, setTextInput] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	// go home
	const resetPokemon = () => {
		dispatch(loadInitialPokemon());
	};

	// get user input
	const getSearchText = (e) => {
		setTextInput(e.target.value);
	};

	// form submission handler
	const submitUserInput = (e) => {
		e.preventDefault(); // prevent default form behavior

		dispatch(searchPokemon(textInput.toLowerCase())); // send user input to store

		setTextInput(''); // clear input

		history.push(`/search/${textInput}`); // go to search page
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
					<form className='nav__form' onSubmit={submitUserInput}>
						<input
							className='nav__search'
							type='text'
							name='poke_search'
							id='poke_search'
							placeholder='Enter a Pokémon name...'
							value={textInput}
							onChange={getSearchText}
						/>
						<button className='nav__button'>Search</button>
					</form>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
