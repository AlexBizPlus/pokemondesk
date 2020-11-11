import React from 'react';
import Foooter from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Hero />
      <Foooter background="yellow" />
    </div>
  );
};

export default HomePage;
