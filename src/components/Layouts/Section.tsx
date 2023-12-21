import { FC } from 'react';
import { SectionProps } from './types';
import clsx from 'clsx';

const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={clsx('section-container overflow-y-clip container-center', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
