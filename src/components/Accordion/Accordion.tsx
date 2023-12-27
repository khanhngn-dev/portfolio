import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { HiChevronRight } from 'react-icons/hi2';

import { SectionHeader } from '..';
import style from './Accordion.module.css';

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  children?: React.ReactNode;
  stickyLabel?: boolean;
};

const Accordion: FC<AccordionProps> = ({ title, children, className, stickyLabel = false, ...props }) => {
  return (
    <div className={clsx('bg-neutral-850 backdrop-blur-sm', className)} {...props}>
      <label
        className={clsx(
          'flex py-3 px-4 cursor-pointer bg-neutral-800 border-l-2 border-white border-solid border-b border-b-neutral-700 shadow items-center justify-between z-10',
          style['accordion-title'],
          stickyLabel && 'sticky top-[var(--height-navbar)]',
        )}
      >
        <input type="checkbox" className={clsx('absolute opacity-0', style['accordion-input'])} />
        <SectionHeader
          className={clsx(style['accordion-title'], 'left-0')}
          title={title}
          iconClassName={clsx(style['accordion-icon'], 'hidden')}
        />
        <HiChevronRight className={clsx(style['accordion-icon'])} />
      </label>
      <div className={clsx(style['accordion-content'])}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
