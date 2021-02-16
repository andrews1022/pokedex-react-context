const initialState = {
	pokemonList: [],
	isLoaded: false
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_INITIAL_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				isLoaded: true
			};

		case 'FETCH_GENERATION_POKEMON':
			return {
				...state,
				pokemonList: action.payload.pokemonList,
				isLoaded: true
			};

		case 'LOADING_POKEMON':
			return {
				...state,
				isLoaded: false
			};

		default:
			return {
				...state
			};
	}
};

export default pokemonReducer;
