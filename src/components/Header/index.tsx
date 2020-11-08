/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './Header.module.scss';
import { HEADER_LIST } from '../../const';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          <ul className={s.menuList}>
            {HEADER_LIST.map(({ active, href, label, name }) => {
              return (
                <li className={s.menuItem} key={name}>
                  <Link className={cn(s.menuLink, { [s.activeLink]: active })} to={href} aria-label={label}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
