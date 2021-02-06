const initialPokemon = {
	pokemonList: []
};

const pokemonReducer = (state = initialPokemon, action) => {
	switch (action.type) {
		case 'FETCH_INITIAL_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList
			};

		default:
			return { ...state };
	}
};

export default pokemonReducer;
