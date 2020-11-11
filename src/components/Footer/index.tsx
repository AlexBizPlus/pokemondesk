/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

interface FoooterProps {
  background: string;
}

const Foooter: React.FC<FoooterProps> = ({ background }) => {
  return (
    <footer className={cn(s.root, { [s.white]: background === 'white' })}>
      <div className={s.wrap}>
        <a className={cn(s.text__left, s.link)} href="#">
          Make with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
        </a>
        <a className={cn(s.text__right, s.link)} href="#">
          Our Team
        </a>
      </div>
    </footer>
  );
};

export default Foooter;
