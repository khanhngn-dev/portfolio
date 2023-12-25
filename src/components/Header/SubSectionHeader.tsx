import { FC } from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import { SubSectionHeaderProps } from './types';
import clsx from 'clsx';
import style from './Header.module.css';

const SubSectionHeader: FC<SubSectionHeaderProps> = ({ children, className, ...props }) => {
  return (
    <h2
      className={clsx(
        'text-2xl sm:text-3xl relative h-max z-10 mx-auto w-max flex tracking-widest',
        style['right-corner'],
        className,
      )}
      {...props}
    >
      {children}
      <HiChevronLeft className="w-4 h-4" />
    </h2>
  );
};

export default SubSectionHeader;
