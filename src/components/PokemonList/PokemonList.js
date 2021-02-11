import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import loadInitialPokemon from './../../actions/pokemonAction';

// components
import PokemonCard from './../PokemonCard/PokemonCard';
import Loading from './../Loading/Loading';

const PokemonList = () => {
	const dispatch = useDispatch();

	// on component load/mount, load the initial pokemon
	useEffect(() => {
		dispatch(loadInitialPokemon());
	}, [dispatch]);

	// grab the pokemon out of the store
	const { pokemonList, prevUrl, nextUrl } = useSelector((state) => state.pokemon);
	console.log(pokemonList);
	console.log(prevUrl);
	console.log(nextUrl);

	return (
		// pokemon list shorthand: pl
		<div className='pl'>
			{pokemonList.length ? (
				pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} />)
			) : (
				<Loading />
			)}
		</div>
	);
};

export default PokemonList;
