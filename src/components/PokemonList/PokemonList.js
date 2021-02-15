import React, { useEffect } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadInitialPokemon } from './../../actions/pokemonAction';

// components
import PokemonCard from './../PokemonCard/PokemonCard';
import PaginationButton from './../PaginationButton/PaginationButton';

// styles
import './PokemonList.scss';

const PokemonList = () => {
	// grab the pokemon out of the store
	const { pokemonList, prevUrl, nextUrl } = useSelector((state) => state.pokemon);

	const dispatch = useDispatch();

	// on component load/mount, load the initial pokemon
	useEffect(() => {
		dispatch(loadInitialPokemon());
	}, [dispatch]);

	return (
		// pokemon list shorthand: pl
		<div className='pl'>
			<PaginationButton icon={faChevronLeft} direction='left' fetchUrl={prevUrl} />

			<div className='pl__inner'>
				{pokemonList.length ? (
					pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} />)
				) : (
					<h2>Something went wrong here...</h2>
				)}
			</div>

			<PaginationButton icon={faChevronRight} direction='right' fetchUrl={nextUrl} />
		</div>
	);
};

export default PokemonList;
