import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Heading from '../Heading';
import Parallax from '../Parallax';
import s from './Hero.module.scss';

const Hero = () => {
  const history = useHistory();

  return (
    <div className={s.root}>
      <div className={s.contentText}>
        <Heading>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          size="regular"
          width="regular"
          yellow="none"
          onClick={() => {
            history.push('/pokedex');
          }}>
          See pokemons
        </Button>
      </div>
      <div className={s.contentParallax}>
        <Parallax />
      </div>
    </div>
  );
};

export default Hero;
