import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './scss/index.scss';

// redux
import { Provider } from 'react-redux';
import configureStore, { history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
