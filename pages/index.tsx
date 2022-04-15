import type { NextPage, GetStaticProps } from 'next'
import { Grid, Image } from '@nextui-org/react';
import { pokeAPI } from '../api'
import Layout from '../components/layouts/Layout'
import { PokemonListResponse } from '../interfaces'
import { SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon list'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>     )}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonListResponse>('/pokemon?limit=151');
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.sv
  const pokemons: SmallPokemon[] = data.results.map((poke, index): SmallPokemon => {
    return {
      ...poke,
      id: (index + 1).toString(),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    }
  })
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
