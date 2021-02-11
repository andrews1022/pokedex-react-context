import axios from 'axios';
import { BASE_URL } from './../api/api';

const loadInitialPokemon = () => async (dispatch) => {
	const pokemonData = await axios.get(BASE_URL);
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

export default loadInitialPokemon;
