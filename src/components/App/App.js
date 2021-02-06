import React from 'react';
import './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
	return (
		<div className='app'>
			<header className='app__header'>
				<h2>Hello!</h2>
				<FontAwesomeIcon icon={faCoffee} size='lg' />
				<FontAwesomeIcon icon={faHeart} size='lg' />
			</header>
		</div>
	);
}

export default App;
