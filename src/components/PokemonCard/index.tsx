import React from 'react';
import { PokemonProps } from '../../pokemonsPropTypes';
import s from './PokemonCard.module.scss';

const PokemonCard: React.FC<PokemonProps> = ({ name, stats, img, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <h3 className={s.titleName}>{name}</h3>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((item) => {
            return (
              <span className={s.label} key={item}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
