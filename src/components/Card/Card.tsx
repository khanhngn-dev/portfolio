import { FC } from 'react';
import { CardProps } from './types';
import clsx from 'clsx';

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('p-4', className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
