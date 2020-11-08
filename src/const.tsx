/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
interface IHeaderList {
  name: string;
  active: boolean;
  href: string;
  label: string;
}

export const HEADER_LIST: IHeaderList[] = [
  {
    name: 'Home',
    active: true,
    href: '/',
    label: 'На главную страницу',
  },
  {
    name: 'Pokédex',
    active: false,
    href: '/pokedex',
    label: 'На другую страницу',
  },
  {
    name: 'Legendaries',
    active: false,
    href: '#',
    label: 'На другую страницу',
  },
  {
    name: 'Documentation',
    active: false,
    href: '#',
    label: 'На другую страницу',
  },
];
