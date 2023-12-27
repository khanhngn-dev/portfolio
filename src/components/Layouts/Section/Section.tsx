import clsx from 'clsx';
import { FC } from 'react';

import { SectionProps } from '../types';

const Section: FC<SectionProps> = ({ children, className, allowOverflow = false, ...props }) => {
  return (
    <section
      className={clsx('section-container container-center', !allowOverflow && 'overflow-y-clip', className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
