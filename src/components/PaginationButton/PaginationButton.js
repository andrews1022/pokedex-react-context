import React from 'react';

// packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// redux
import { useDispatch } from 'react-redux';
import { fetchPokemon } from './../../actions/pokemonAction';

// styles
import './PaginationButton.scss';

const PaginationButton = ({ icon, direction, fetchUrl }) => {
	const dispatch = useDispatch();

	const fetchHandler = (e) => {
		if (!fetchUrl) {
			e.preventDefault();
			return;
		}

		dispatch(fetchPokemon(fetchUrl));
	};

	return (
		<div className={`pb pb--${direction} ${!fetchUrl ? 'disabled' : ''}`}>
			<FontAwesomeIcon icon={icon} className='pb__icon' onClick={fetchHandler} />
		</div>
	);
};

export default PaginationButton;
