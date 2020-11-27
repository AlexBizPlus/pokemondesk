import React from 'react';
import s from './Heading.module.scss';

interface IHeading {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC = ({ children }) => {
  return <h1 className={s.root}>{children}</h1>;
};

export default Heading;
