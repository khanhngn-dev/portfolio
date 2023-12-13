import { FC } from 'react';
import { SectionHeaderProps } from './types';
import { clsx } from 'clsx';
import { HiChevronRight } from 'react-icons/hi2';

const SectionHeader: FC<SectionHeaderProps> = ({ title, className, iconClassName, ...props }) => {
  return (
    <h2
      className={clsx('flex items-center gap-1 pb-2 border-b-2 border-solid border-white pr-1', className)}
      {...props}
    >
      <HiChevronRight className={clsx('w-8 h-8', iconClassName)} />
      {title}
    </h2>
  );
};

export default SectionHeader;
