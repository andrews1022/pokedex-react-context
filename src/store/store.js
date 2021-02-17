import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer(history),
		preloadedState,
		composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
	);

	return store;
};

export default configureStore;
