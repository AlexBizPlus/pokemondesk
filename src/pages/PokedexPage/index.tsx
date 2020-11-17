import React, { useEffect, useState } from 'react';
import { EmptyData, PokemonResponse } from '../../pokemonsPropTypes';
import Foooter from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import config from '../../config';
import s from './PokedexPage.module.scss';
import req from '../../utils/request';

const usePokemons = () => {
  const [data, setData] = useState<PokemonResponse>(EmptyData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        const result = await req('getPokemons');
        setData(result);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong. Sorry. Try reload this page</div>;
  }

  return (
    <div className={s.root}>
      <Heading>{data.total} Pokemons for you to choose your favorite</Heading>

      <input className={s.label} id="find-pokemons" type="text" />

      <ul className={s.list}>
        {data.pokemons.map(({ name, stats, img, types }) => {
          return (
            <li className={s.list_item} key={name}>
              <PokemonCard name={name} stats={stats} img={img} types={types} />
            </li>
          );
        })}
      </ul>
      <Foooter background="white" />
    </div>
  );
};

export default PokedexPage;
