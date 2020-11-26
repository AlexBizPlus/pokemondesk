import React from 'react';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
// import s from './PokedexPage.module.scss';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon: {data?.name}</div>;
};

export default PokemonPage;
