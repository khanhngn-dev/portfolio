import clsx from 'clsx';
import { FC } from 'react';

import { FlexGridProps } from '../types';
import style from './Grid.module.css';

const FlexGrid: FC<FlexGridProps> = ({ minSize = '300px', className, children, ...props }) => {
  return (
    <div className={clsx(style['flex-grid'], className)} {...props}>
      {children}
    </div>
  );
};

export default FlexGrid;
