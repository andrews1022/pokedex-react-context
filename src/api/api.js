export const baseUrl = () => 'https://pokeapi.co/api/v2/generation/1';

export const singlePokemonUrl = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;

export const generationUrl = (generation) => `https://pokeapi.co/api/v2/generation/${generation}`;

export const imageUrl = (id) =>
	`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`;

export const descriptionUrl = (name) => `https://pokeapi.co/api/v2/pokemon-species/${name}`;
