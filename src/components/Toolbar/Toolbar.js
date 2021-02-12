import React from 'react';

// styles
import './Toolbar.scss';

const Toolbar = () => {
	const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar'];

	return (
		// toolbar shorthand: tb
		<div className='tb'>
			<div className='tb__row'>
				{regions.map((region, idx) => {
					return (
						<button className='tb__button' key={idx}>
							{region}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Toolbar;
