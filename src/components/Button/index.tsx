import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: string;
  width: string;
  yellow: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size, width, yellow }) => {
  return (
    <button
      className={cn(
        s.root,
        { [s.small]: size === 'small' },
        { [s.wide]: width === 'wide' },
        { [s.yellow]: yellow === 'yellow' },
      )}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
