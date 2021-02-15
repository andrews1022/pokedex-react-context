const initialState = {
	pokemonList: [],
	prevUrl: '',
	nextUrl: '',
	isLoaded: false
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_INITIAL_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				prevUrl: action.payload.prevUrl,
				nextUrl: action.payload.nextUrl,
				isLoaded: true
			};

		case 'FETCH_PAGINATION_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				prevUrl: action.payload.prevUrl,
				nextUrl: action.payload.nextUrl,
				isLoaded: true
			};

		case 'LOADING_POKEMON':
			return {
				...state,
				isLoaded: false
			};

		default:
			return { ...state };
	}
};

export default pokemonReducer;
