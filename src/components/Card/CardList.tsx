import { FC } from 'react';
import { CardListProps } from './types';
import clsx from 'clsx';

const CardList: FC<CardListProps> = ({ items, className, withCursor = false, ...props }) => (
  <ul className={clsx('flex flex-col gap-5', className)} {...props}>
    {items.map((item, i) => (
      <li key={i}>+ {item}</li>
    ))}
    {withCursor ? <li className="blinking-cursor w-max">_</li> : null}
  </ul>
);

export default CardList;
