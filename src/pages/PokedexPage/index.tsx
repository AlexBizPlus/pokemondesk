import React from 'react';
import Foooter from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import pokemons from '../../pokemons';
import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Heading>800 Pokemons for you to choose your favorite</Heading>
      <ul className={s.list}>
        {pokemons.map(({ name, stats, img, types }) => {
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
