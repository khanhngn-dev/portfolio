import { FC } from 'react';
import { SectionHeaderProps } from './types';
import { clsx } from 'clsx';
import { HiChevronRight } from 'react-icons/hi2';

const SectionHeader: FC<SectionHeaderProps> = ({ title, className, iconClassName, children, ...props }) => {
  return (
    <h2 className={clsx('flex items-center relative -left-2 gap-1', className)} {...props}>
      <HiChevronRight className={clsx('w-8 h-8', iconClassName)} />
      {title}
      {children}
    </h2>
  );
};

export default SectionHeader;
