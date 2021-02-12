import React from 'react';

// packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styles
import './PaginationButton.scss';

const PaginationButton = ({ icon, direction }) => {
	return (
		<div className={`pb pb--${direction}`}>
			<FontAwesomeIcon icon={icon} className='pb__icon' />
		</div>
	);
};

export default PaginationButton;
