import { FC } from 'react';
import { CardProps } from './types';
import clsx from 'clsx';
import { SectionHeader } from '..';
import { HiChevronDoubleRight } from 'react-icons/hi2';

const Card: FC<CardProps> = ({ children, className, title, detail, showPlus = true, ...props }) => {
  return (
    <div
      className={clsx('p-4 bg-neutral-850/40 backdrop-blur-sm border-l-4  border-solid relative', className)}
      {...props}
    >
      {title && <SectionHeader title={title} />}
      <div className="first:mt-0 mt-3 p-3 border border-solid border-white/40 font-mono bg-neutral-800">{children}</div>
      {detail ? (
        <a href={detail.url} className="flex items-center gap-2 mt-3 w-max ml-auto">
          <HiChevronDoubleRight />
          {detail.title}
        </a>
      ) : null}
      {showPlus ? (
        <div className="absolute -top-2 -right-2 w-4 aspect-square flex items-center justify-center leading-none">
          +
        </div>
      ) : null}
    </div>
  );
};

export default Card;
