import { pokeAPI } from "../api";
import { Pokemon } from "../interfaces";


export const getPokemonInfo = async (nameOdId: string) => {
	try {
		const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${nameOdId}`);

		const { id, name: pokemonname, sprites } = data;
		return {
			id,
			name: pokemonname,
			sprites
		}
	} catch (error) {
		return null;
	}

}