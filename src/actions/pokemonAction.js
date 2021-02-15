import axios from 'axios';
import { baseUrl, paginationUrl } from './../api/api';

export const loadInitialPokemon = () => async (dispatch) => {
	dispatch({ type: 'LOADING_POKEMON' });

	const response = await axios.get(baseUrl());
	const data = response.data;

	dispatch({
		type: 'FETCH_INITIAL_POKEMON',
		payload: {
			pokemonList: data.results,
			prevUrl: data.previous,
			nextUrl: data.next
		}
	});
};

export const fetchPokemon = (url) => async (dispatch) => {
	dispatch({ type: 'LOADING_POKEMON' });

	const response = await axios.get(paginationUrl(url));
	const data = response.data;

	dispatch({
		type: 'FETCH_PAGINATION_POKEMON',
		payload: {
			pokemonList: data.results,
			prevUrl: data.previous,
			nextUrl: data.next
		}
	});
};
