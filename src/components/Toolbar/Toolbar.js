import React from 'react';

// styles
import './Toolbar.scss';

const Toolbar = () => {
	const regions = [
		{ name: 'Kanto', generation: 1 },
		{ name: 'Johto', generation: 2 },
		{ name: 'Hoenn', generation: 3 },
		{ name: 'Sinnoh', generation: 4 },
		{ name: 'Unova', generation: 5 },
		{ name: 'Kalos', generation: 6 },
		{ name: 'Alola', generation: 7 },
		{ name: 'Galar', generation: 8 }
	];

	return (
		// toolbar shorthand: tb
		<div className='tb'>
			<div className='tb__row'>
				{regions.map((region, idx) => {
					return (
						<button className='tb__button' key={idx}>
							{region.name}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Toolbar;
