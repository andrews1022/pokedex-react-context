const initialState = {
	pokemonList: [],
	prevUrl: '',
	nextUrl: ''
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_INITIAL_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				prevUrl: action.payload.prevUrl,
				nextUrl: action.payload.nextUrl,
				currentPokemon: action.payload.currentPokemon
			};

		default:
			return { ...state };
	}
};

export default pokemonReducer;
