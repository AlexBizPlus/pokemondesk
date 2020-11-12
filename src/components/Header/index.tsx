/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';
import { HEADER_LIST } from '../../routes';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();

  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          <ul className={s.menuList}>
            {HEADER_LIST.map(({ href, label, title }) => {
              return (
                <li className={s.menuItem} key={title}>
                  <A className={cn(s.menuLink, { [s.activeLink]: href === path })} href={href} aria-label={label}>
                    {title}
                  </A>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
