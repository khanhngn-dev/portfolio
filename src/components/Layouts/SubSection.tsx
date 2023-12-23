import clsx from 'clsx';
import style from './Section.module.css';
import { SubSectionProps } from './types';
import { FC } from 'react';

const SubSection: FC<SubSectionProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(style['border-wrapper'], className)} {...props}>
      {children}
    </div>
  );
};

export default SubSection;
