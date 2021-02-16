const initialState = {
	id: '',
	spriteUrl: '',
	types: [],
	description: '',
	isLoaded: false
};

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POKEMON_DETAILS':
			return {
				...state,
				id: action.payload.id,
				spriteUrl: action.payload.spriteUrl,
				types: action.payload.types,
				description: action.payload.description,
				isLoaded: true
			};

		default:
			return {
				...state
			};
	}
};

export default detailReducer;
