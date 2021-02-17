import axios from 'axios';
import { singlePokemonUrl, imageUrl } from './../api/api';
import { padWithZeroes } from './../utility/utilityFunctions';

export const searchPokemon = (userInput) => async (dispatch) => {
	dispatch({ type: 'LOADING_POKEMON' });

	try {
		const response = await axios.get(singlePokemonUrl(userInput));
		const data = await response.data;

		// format the id (add extra 0s if needed)
		const formattedID = padWithZeroes(data.id);

		// fetch sprite
		const spriteUrl = await axios.get(imageUrl(formattedID));
		const finalSpriteUrl = spriteUrl.config.url;

		dispatch({
			type: 'SEARCH_POKEMON',
			payload: {
				pokemonData: data,
				spriteUrl: finalSpriteUrl,
				input: userInput
			}
		});
	} catch (error) {
		console.log(error);

		dispatch({
			type: 'INVALID_SEARCH',
			payload: {
				input: userInput
			}
		});
	}
};
