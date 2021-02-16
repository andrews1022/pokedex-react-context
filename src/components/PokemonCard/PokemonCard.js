import React, { useEffect, useState } from 'react';

// packages
import axios from 'axios';
import { Link } from 'react-router-dom';

// component
import Loading from './../Loading/Loading';

// redux
import { useSelector } from 'react-redux';

// util funciton
import { padWithZeroes } from './../../utility/utilityFunctions';

// api
import { singlePokemonUrl, imageUrl } from './../../api/api';

// styles
import './PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
	const { name } = pokemon;

	// grab isLoaded state from the store
	const { isLoaded } = useSelector((state) => state.pokemon);

	const [id, setId] = useState('');
	const [sprite, setSprite] = useState('');

	useEffect(() => {
		const cancelTokenSource = axios.CancelToken.source();

		const getCardDetails = async () => {
			try {
				// fetch data
				const response = await axios.get(singlePokemonUrl(name), {
					cancelToken: cancelTokenSource.token
				});

				const data = await response.data;

				const formattedID = padWithZeroes(data.id);

				const spriteUrl = await axios.get(imageUrl(formattedID));
				const finalSpriteUrl = spriteUrl.config.url;

				setId(data.id);
				setSprite(finalSpriteUrl);
			} catch (error) {
				console.log(error);
			}
		};

		getCardDetails();

		// cleanup
		return () => {
			cancelTokenSource.cancel();
		};
	}, [name]);

	return (
		<div className='pc'>
			{isLoaded ? (
				<img className='pc__sprite' src={sprite} alt={`sprite for ${name}`} />
			) : (
				<Loading />
			)}

			<h2 className='pc__info'>
				#{id}: {name}
			</h2>

			<Link className='pc__button' to={`/details/${name}`}>
				View Details
			</Link>
		</div>
	);
};

export default PokemonCard;
