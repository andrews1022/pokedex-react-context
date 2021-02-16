import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadInitialPokemon } from './../../actions/pokemonAction';

// components
import PokemonCard from './../PokemonCard/PokemonCard';

// styles
import './PokemonList.scss';

const PokemonList = () => {
	// grab the pokemon and next/prev urls out of the store
	const { pokemonList } = useSelector((state) => state.pokemon);

	const dispatch = useDispatch();

	// on component load/mount, load the initial pokemon
	useEffect(() => {
		dispatch(loadInitialPokemon());
	}, [dispatch]);

	return (
		// pokemon list shorthand: pl
		<div className='pl'>
			<div className='pl__inner'>
				{pokemonList.length ? (
					pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} />)
				) : (
					<h2>Something went wrong here...</h2>
				)}
			</div>
		</div>
	);
};

export default PokemonList;
