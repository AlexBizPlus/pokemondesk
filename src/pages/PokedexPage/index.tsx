import React, { useState } from 'react';
import Foooter from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handeSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something went wrong. Sorry. Try reload this page</div>;
  }

  return (
    <div className={s.root}>
      <Heading>{!isLoading && data.total} Pokemons for you to choose your favorite</Heading>

      <input className={s.label} value={searchValue} onChange={handeSearchChange} id="find-pokemons" type="text" />

      <ul className={s.list}>
        {!isLoading &&
          data.pokemons.map(({ name, stats, img, types }) => {
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
