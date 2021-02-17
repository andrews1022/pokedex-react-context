import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonDetails } from './../../actions/detailsAction';

// router
import { Link } from 'react-router-dom';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// components
import Loading from './../../components/Loading/Loading';

// styles
import './Details.scss';

const Details = (props) => {
	const pokemonName = props.match.params.name;

	const dispatch = useDispatch();

	// on component load/mount, load the initial pokemon
	useEffect(() => {
		dispatch(loadPokemonDetails(pokemonName));
	}, [dispatch, pokemonName]);

	const { id, spriteUrl, types, description, isLoaded } = useSelector((state) => state.details);

	return (
		<div className='pd'>
			<Link to='/' className='pd__button'>
				<FontAwesomeIcon icon={faChevronLeft} className='pd__icon' />
				<span className='pd__button-text'>Go back</span>
			</Link>

			{isLoaded ? (
				<div className='pd__row'>
					<div className='pd__box'>
						<img className='pd__sprite' src={spriteUrl} alt={`sprite for ${pokemonName}`} />
					</div>

					<div className='pd__box'>
						<h2 className='pd__heading'>
							#{id} {pokemonName}
						</h2>
						<ul className='pd__types'>
							{types.map((type, idx) => (
								<li className={`pd__type text-${type.type.name}`} key={idx}>
									{type.type.name}
								</li>
							))}
						</ul>
						<p className='pd__description'>{description}</p>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Details;
