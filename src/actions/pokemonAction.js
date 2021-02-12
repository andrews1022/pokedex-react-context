import axios from 'axios';
import { baseUrl } from './../api/api';

export const loadInitialPokemon = () => async (dispatch) => {
	const pokemonData = await axios.get(baseUrl());
	const data = pokemonData.data;

	dispatch({
		type: 'FETCH_INITIAL_POKEMON',
		payload: {
			pokemonList: data.results,
			prevUrl: data.next,
			nextUrl: data.previous
		}
	});
};
