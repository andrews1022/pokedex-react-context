import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	details: detailsReducer
});

export default rootReducer;
