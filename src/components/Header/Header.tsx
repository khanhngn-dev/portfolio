import { FC } from 'react';
import { HeaderProps } from './types';
import clsx from 'clsx';

const Header: FC<HeaderProps> = ({ subtitle, title, className, ...props }) => {
  return (
    <section className={clsx('mx-auto w-max', className)} {...props}>
      <p className="text-xl md:text-2xl">{subtitle}</p>
      <p className="ml-10 mt-2 text-4xl md:text-5xl font-bold">{title}</p>
    </section>
  );
};

export default Header;
