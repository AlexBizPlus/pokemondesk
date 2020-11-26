import React, { useState } from 'react';
import Foooter from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import s from './PokedexPage.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handeSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something went wrong. Sorry. Try reload this page</div>;
  }

  return (
    <div className={s.root}>
      <Heading>{!isLoading && data && data.total} Pokemons for you to choose your favorite</Heading>

      <input className={s.label} value={searchValue} onChange={handeSearchChange} id="find-pokemons" type="text" />

      <ul className={s.list}>
        {!isLoading &&
          data &&
          data.pokemons.map((item: PokemonsRequest) => {
            const { name, stats, img, types } = item;
            return (
              <li className={s.list_item} key={name}>
                {/* <PokemonCard item={item} /> */}
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
