import clsx from 'clsx';
import { FC } from 'react';

import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ subtitle, title, className, wrapperClassName, ...props }) => {
  return (
    <div className={clsx('relative tracking-[0.2rem]', wrapperClassName)}>
      <h2 className={clsx('mx-auto sm:w-max', className)} {...props}>
        <p className="text-xl md:text-2xl text-center sm:text-left">{subtitle}</p>
        <p className="sm:ml-10 text-center sm:text-left mt-2 text-4xl md:text-5xl font-bold uppercase">{title}</p>
      </h2>
      <div className={clsx('dashed-horizontal')}></div>
      <div className="w-1/4 aspect-[1/2] absolute -translate-y-1/2 overflow-hidden -z-10">
        <div className="w-[200%] absolute right-0 h-full border-white/40 border-solid border-dash border sm:border[2px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
