import React from 'react';

// components
import PokemonList from './../../components/PokemonList/PokemonList';
import Toolbar from './../../components/Toolbar/Toolbar';

const Home = () => {
	return (
		<div className='wrapper'>
			<Toolbar />
			<PokemonList />
		</div>
	);
};

export default Home;
