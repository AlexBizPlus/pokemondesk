import React from 'react';
// import Heading from '../Heading';
import s from './PokemonCard.module.scss';

interface PokemonStatsProps {
  hp?: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

interface PokemonProps {
  nameClean?: string;
  abilities?: string[];
  stats: PokemonStatsProps;
  types: string[];
  img?: string;
  name?: string;
  baseExperience?: number;
  height?: number;
  id?: number;
  isDefault?: boolean;
  order?: number;
  weight?: number;
}

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
