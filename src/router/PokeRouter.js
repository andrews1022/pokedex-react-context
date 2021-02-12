import React from 'react';

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import Search from '../pages/Search/Search';
import Error from '../pages/Error/Error';

// components
import Nav from './../components/Nav/Nav';
import Footer from './../components/Footer/Footer';

const PokeRouter = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/details/:name' component={Details} />
				<Route path='/search/:name' component={Search} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default PokeRouter;
