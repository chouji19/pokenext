import React, { useEffect, useState } from 'react'
import Layout from '../../components/layouts/Layout';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui/';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons());
	}, [])


	return (
		<Layout title='Pokemon favorites'>
			{
				favoritePokemons.length === 0 
				? <NoFavorites />
				: (<FavoritePokemons favoritePokemons={favoritePokemons} />)
			}

		</Layout>
	)
}

export default FavoritesPage