import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadInitialPokemon from './../../actions/pokemonAction';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import './App.scss';

const App = () => {
	const dispatch = useDispatch();

	// on component load/mount, dispatch the loadInitialPokemon action
	// making sure our state in our store is updated
	useEffect(() => {
		dispatch(loadInitialPokemon());
	}, [dispatch]);

	return (
		<div className='app'>
			<header className='app__header'>
				<Nav />
				<Footer />
			</header>
		</div>
	);
};

export default App;
