import React, { PropsWithChildren } from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage, { PokemonProps } from './pages/PokemonPage';

interface IHeaderList {
  title: string;
  href: string;
  label: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const HEADER_LIST: IHeaderList[] = [
  {
    title: 'Home',
    href: LinkEnum.HOME,
    label: 'На главную страницу',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    href: LinkEnum.POKEDEX,
    label: 'На другую страницу',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    href: LinkEnum.LEGENDARIES,
    label: 'На другую страницу',
    component: () => <PokedexPage />,
  },
  {
    title: 'Documentation',
    href: LinkEnum.DOCUMENTATION,
    label: 'На другую страницу',
    component: () => <PokedexPage />,
  },
];

export const ROUTES_LIST: IHeaderList[] = [
  {
    title: 'Pokemon',
    href: LinkEnum.POKEMON,
    label: 'На страницу покемонов',
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAcc {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...HEADER_LIST, ...ROUTES_LIST].reduce((acc: IAcc, item: IHeaderList) => {
  acc[item.href] = item.component;
  return acc;
}, {});

export default routes;
