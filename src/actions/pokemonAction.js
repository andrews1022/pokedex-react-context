import axios from 'axios';
import { baseUrl, generationUrl } from './../api/api';

export const loadInitialPokemon = () => async (dispatch) => {
	dispatch({ type: 'LOADING_POKEMON' });

	const response = await axios.get(baseUrl());
	const data = response.data;

	const species = data.pokemon_species;

	const sortedSpecies = species.sort((a, b) =>
		a.url.localeCompare(b.url, 'en', { numeric: true, sensitivity: 'base' })
	);

	dispatch({
		type: 'FETCH_INITIAL_POKEMON',
		payload: {
			pokemonList: sortedSpecies
		}
	});
};

export const fetchGenerationPokemon = (gen) => async (dispatch) => {
	dispatch({ type: 'LOADING_POKEMON' });

	const response = await axios.get(generationUrl(gen));
	const data = response.data;

	const species = data.pokemon_species;

	const sortedSpecies = species.sort((a, b) =>
		a.url.localeCompare(b.url, 'en', { numeric: true, sensitivity: 'base' })
	);

	dispatch({
		type: 'FETCH_GENERATION_POKEMON',
		payload: {
			pokemonList: sortedSpecies
		}
	});
};
