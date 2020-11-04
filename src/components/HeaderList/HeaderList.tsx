/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import s from './HeaderList.module.scss';
import HeaderItem from '../HeaderItem/HeaderItem';
import { HEADER_LIST } from '../../const';

const HeaderList = () => {
  return (
    <ul className={cn(s.list)}>
      {HEADER_LIST.map((item: any, i) => {
        return (
          <li className={cn(s.item)} key={item.name}>
            <HeaderItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderList;
