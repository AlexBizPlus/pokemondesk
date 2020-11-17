import React from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

interface IHeaderList {
  title: string;
  href: string;
  label: string;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
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

interface IAcc {
  [n: string]: () => JSX.Element;
}

const routes = HEADER_LIST.reduce((acc: IAcc, item: IHeaderList) => {
  acc[item.href] = item.component;
  return acc;
}, {});

export default routes;
