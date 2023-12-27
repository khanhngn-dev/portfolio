import clsx from 'clsx';
import { FC } from 'react';

import style from './Section.module.css';
import { SubSectionProps } from '../types';

const SubSection: FC<SubSectionProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(style['border-wrapper'], className)} {...props}>
      {children}
    </div>
  );
};

export default SubSection;
