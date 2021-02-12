import React, { useEffect } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadInitialPokemon } from './../../actions/pokemonAction';

// components
import PokemonCard from './../PokemonCard/PokemonCard';
import Loading from './../Loading/Loading';
import PaginationButton from './../PaginationButton/PaginationButton';

// styles
import './PokemonList.scss';

const PokemonList = () => {
	const dispatch = useDispatch();

	// on component load/mount, load the initial pokemon
	useEffect(() => {
		dispatch(loadInitialPokemon());
	}, [dispatch]);

	// grab the pokemon out of the store
	const { pokemonList, prevUrl, nextUrl } = useSelector((state) => state.pokemon);
	console.log('list: ', pokemonList);
	console.log('previous url: ', prevUrl);
	console.log('next url: ', nextUrl);

	return (
		// pokemon list shorthand: pl
		<div className='pl'>
			<PaginationButton icon={faChevronLeft} direction='left' />

			<div className='pl__inner'>
				{pokemonList.length ? (
					pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} />)
				) : (
					<Loading />
				)}
			</div>

			<PaginationButton icon={faChevronRight} direction='right' />
		</div>
	);
};

export default PokemonList;
