const initialPokemon = {
	pokemonList: [],
	prevUrl: '',
	nextUrl: ''
};

const pokemonReducer = (state = initialPokemon, action) => {
	switch (action.type) {
		case 'FETCH_INITIAL_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				prevUrl: action.payload.prevUrl,
				nextUrl: action.payload.nextUrl
			};

		default:
			return { ...state };
	}
};

export default pokemonReducer;
