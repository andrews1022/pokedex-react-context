import React from 'react';

// packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// styles
import './Footer.scss';

const Footer = () => {
	const gitHubLink = 'https://github.com/andrews1022/pokedex-react-redux';
	const twitterLink = 'https://twitter.com/andrew_devsrc';

	return (
		<footer className='footer'>
			<p className='footer__text'>
				© {new Date().getFullYear()} All rights reserved. Designed and built and Andrew Shearer.
			</p>
			<div className='footer__icon-row'>
				<a
					className='footer__icon-link'
					href={gitHubLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon className='footer__icon' icon={faGithub} size='lg' />
				</a>
				<a
					className='footer__icon-link'
					href={twitterLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon className='footer__icon' icon={faTwitter} size='lg' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
