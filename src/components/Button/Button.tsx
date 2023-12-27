import clsx from 'clsx';
import { FC } from 'react';

import style from './Button.module.css';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx(style['base'], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
