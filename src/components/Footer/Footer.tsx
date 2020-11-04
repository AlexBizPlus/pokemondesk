/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Foooter = () => {
  return (
    <footer className={cn(s.footer)}>
      <a className={cn(s.text__left, s.link)} href="#">
        Make with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
      </a>
      <a className={cn(s.text__right, s.link)} href="#">
        Our Team
      </a>
    </footer>
  );
};

export default Foooter;
