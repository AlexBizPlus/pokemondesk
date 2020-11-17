import React from 'react';
import Foooter from '../../components/Footer';
import Hero from '../../components/Hero';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Hero />
      <Foooter background="yellow" />
    </div>
  );
};

export default HomePage;
