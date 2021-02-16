import axios from 'axios';
import { singlePokemonUrl, imageUrl, descriptionUrl } from './../api/api';
import { padWithZeroes } from './../utility/utilityFunctions';

export const loadPokemonDetails = (name) => async (dispatch) => {
	dispatch({ type: 'LOADING_DETAIL' });

	// get pokemon details
	const response = await axios.get(singlePokemonUrl(name));
	const data = await response.data;

	// format the id (add extra 0s if needed)
	const formattedID = padWithZeroes(data.id);

	// fetch sprite
	const spriteUrl = await axios.get(imageUrl(formattedID));
	const finalSpriteUrl = spriteUrl.config.url;

	// fetch pokemon description
	const descriptionResponse = await axios.get(descriptionUrl(name));
	const descriptionData = await descriptionResponse.data;

	dispatch({
		type: 'FETCH_POKEMON_DETAILS',
		payload: {
			id: data.id,
			spriteUrl: finalSpriteUrl,
			types: data.types,
			description: descriptionData.flavor_text_entries[0].flavor_text.replace('', ' ')
		}
	});
};
