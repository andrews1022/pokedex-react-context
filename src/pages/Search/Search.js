import React from 'react';

// redux
import { useSelector } from 'react-redux';

// components
import Loading from './../../components/Loading/Loading';

// router
import { Link } from 'react-router-dom';

// styles
import './Search.scss';

const Search = () => {
	const { pokemonData, spriteUrl, input, validSearch, isLoaded } = useSelector(
		(state) => state.search
	);

	return (
		<div className='wrapper'>
			<div className='search'>
				<h2 className='search__results-heading'>Search results for: {input}</h2>

				{!validSearch ? (
					<p className='search__error'>Sorry, that wasn't a valid search. Please try again</p>
				) : (
					<div className='search__card'>
						{isLoaded ? (
							<div className='search__card-inner'>
								<img
									className='search__sprite'
									src={spriteUrl}
									alt={`sprite for ${pokemonData}`}
									srcset=''
								/>
								<h3 className='search__info'>
									#{pokemonData.id}: {pokemonData.name}
								</h3>
								<Link className='search__button' to={`/details/${pokemonData.name}`}>
									View Details
								</Link>
							</div>
						) : (
							<Loading />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
