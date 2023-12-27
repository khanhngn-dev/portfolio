import clsx from 'clsx';
import { FC } from 'react';

import { GridProps } from '../types';

const Grid: FC<GridProps> = ({ minSize = '300px', className, children, ...props }) => {
  return (
    <div
      className={clsx('grid gap-8', className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minSize}, 1fr))`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
