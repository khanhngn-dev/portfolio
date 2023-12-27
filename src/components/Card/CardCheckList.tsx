import clsx from 'clsx';
import { FC } from 'react';

import { CardCheckListProps } from './types';

const CardCheckList: FC<CardCheckListProps> = ({ items, className, withCursor = false, ...props }) => (
  <ul className={clsx('flex flex-col gap-5', className)} {...props}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 items-start">
        <input type="checkbox" readOnly className="mt-2" checked={item.checked} />
        <div>
          <label className={clsx(item.checked && 'line-through')}>{item.title}</label>
          {item.description && (
            <p className="mt-2 text-light text-white/80">
              {'//'} {item.description}
            </p>
          )}
        </div>
      </li>
    ))}
    {withCursor ? (
      <li className="flex gap-3 items-start">
        <input type="checkbox" readOnly className="mt-2" />
        <div>
          <label className="blinking-cursor">_</label>
        </div>
      </li>
    ) : null}
  </ul>
);

export default CardCheckList;
