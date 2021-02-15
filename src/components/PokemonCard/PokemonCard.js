import React, { useEffect, useState } from 'react';

// packages
import { Link } from 'react-router-dom';
import axios from 'axios';

// component
import Loading from './../Loading/Loading';

// api
import { singlePokemonUrl } from './../../api/api';

// styles
import './PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
	const { name } = pokemon;

	const [id, setId] = useState('');
	const [sprite, setSprite] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const cancelTokenSource = axios.CancelToken.source();

		const getSprites = async () => {
			try {
				const response = await axios.get(singlePokemonUrl(name), {
					cancelToken: cancelTokenSource.token
				});

				const data = await response.data;

				setId(data.id);
				setSprite(data.sprites.front_default);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		getSprites();

		return () => {
			cancelTokenSource.cancel();
		};
	}, [name]);

	if (isLoaded) {
		return (
			// pokemon card shorthand: pc
			<div className='pc'>
				<img className='pc__sprite' src={sprite} alt={`sprite for ${sprite}`} />
				<h2 className='pc__info'>
					#{id}: {name}
				</h2>
				<Link className='pc__button' to={`/details/${name}`}>
					View Details
				</Link>
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default PokemonCard;
