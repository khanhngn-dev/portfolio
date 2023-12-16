import { FC } from 'react';
import { HeaderProps } from './types';
import clsx from 'clsx';

const Header: FC<HeaderProps> = ({ subtitle, title, className, wrapperClassName, ...props }) => {
  return (
    <div className={clsx('relative', wrapperClassName)}>
      <div className={clsx('mx-auto w-max', className)} {...props}>
        <p className="text-xl md:text-2xl">{subtitle}</p>
        <p className="ml-10 mt-2 text-4xl md:text-5xl font-bold">{title}</p>
      </div>
      <div className={clsx('dashed-horizontal')}></div>
      <div className="w-1/4 aspect-[1/2] absolute -translate-y-1/2 overflow-hidden -z-10">
        <div className="w-[200%] absolute right-0 h-full border-white/40 border-solid border-dash border sm:border[2px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
