import React from 'react';
import Foooter from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Heading>800 Pokemons for you to choose your favorite</Heading>
      <Foooter background="white" />
    </div>
  );
};

export default PokedexPage;
