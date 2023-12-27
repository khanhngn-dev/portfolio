import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

import style from './Hero.module.css';

type HeroProps = {
  className?: string;
  subtitle?: string;
  title: string;
  postFix?: () => React.ReactNode;
  nextSection?: {
    title: string;
    url: string;
  };
};

const Hero: FC<HeroProps> = ({ title, className, nextSection, postFix: PostFix, subtitle }) => {
  return (
    <div className={clsx(style['hero'], className)}>
      <div className="flex flex-col relative">
        {subtitle && <p className="text-2xl sm:text-3xl">{subtitle}</p>}
        <h1 className={clsx(style['hero-heading'], 'mt-4')}>
          <div className={clsx(style['hero-text'], 'mt-2')}>{title}</div>
        </h1>
        {PostFix && <PostFix />}
        {/* This will relative to the current position of the name */}
        <div className={clsx('dashed-horizontal')}></div>
        <div className={clsx('square-corner')}></div>
      </div>
      {/* This will relative to the current position within main */}
      <div className={clsx('dashed-vertical')}></div>
      {nextSection && (
        <Link href={nextSection.url} className={style['continue-icon']}>
          <span>{nextSection.title}</span>
          <HiChevronDown className="w-8 h-8 animate-bounce" />
        </Link>
      )}
    </div>
  );
};

export default Hero;
