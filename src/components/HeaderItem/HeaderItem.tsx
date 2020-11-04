import React from 'react';
import cn from 'classnames';
import s from './HeaderItem.module.scss';

const HeaderList = ({ item }: { item: any }) => {
  return (
    <a className={cn(s.link, { [s.link__active]: item.active })} href={item.href} aria-label={item.label}>
      {item.name}
    </a>
  );
};

export default HeaderList;
