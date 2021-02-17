import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import detailsReducer from './detailsReducer';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';

const rootReducer = (history) =>
	combineReducers({
		details: detailsReducer,
		pokemon: pokemonReducer,
		search: searchReducer,
		router: connectRouter(history)
	});

export default rootReducer;
