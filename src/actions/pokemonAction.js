import axios from 'axios';
import { BASE_URL } from './../api/api';

const loadInitialPokemon = () => async (dispatch) => {
	const pokemonData = await axios.get(BASE_URL);
	const { results } = pokemonData.data;

	dispatch({
		type: 'FETCH_INITIAL_POKEMON',
		payload: {
			pokemonList: results
		}
	});
};

export default loadInitialPokemon;
