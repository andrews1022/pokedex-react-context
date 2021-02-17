const initialState = {
	pokemonData: {},
	spriteUrl: '',
	input: '',
	validSearch: true,
	isLoaded: false
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_POKEMON':
			return {
				...state,
				pokemonData: action.payload.pokemonData,
				spriteUrl: action.payload.spriteUrl,
				input: action.payload.input,
				validSearch: true,
				isLoaded: true
			};

		case 'LOADING_POKEMON':
			return {
				...state,
				isLoaded: false
			};

		case 'INVALID_SEARCH':
			return {
				...state,
				pokemonData: {},
				input: action.payload.input,
				validSearch: false,
				isLoaded: true
			};

		default:
			return {
				...state
			};
	}
};

export default searchReducer;
