import React from 'react';

// redux
import { useDispatch } from 'react-redux';
import { fetchGenerationPokemon } from './../../actions/pokemonAction';

// styles
import './Toolbar.scss';

const Toolbar = () => {
	const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola'];

	const dispatch = useDispatch();

	const clickHandler = (e) => {
		const generationToFetch = regions.indexOf(e.target.textContent) + 1;

		dispatch(fetchGenerationPokemon(generationToFetch));
	};

	return (
		// toolbar shorthand: tb
		<div className='tb'>
			<div className='tb__row'>
				{regions.map((region, idx) => {
					return (
						<button className='tb__button' key={idx} onClick={clickHandler}>
							{region}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Toolbar;
