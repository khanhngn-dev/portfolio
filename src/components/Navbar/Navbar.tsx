'use client';

import Link from 'next/link';
import style from './Navbar.module.css';
import { ToggleButton } from '..';
import { useState } from 'react';
import clsx from 'clsx';
import { HiBars3, HiChevronDown, HiXMark } from 'react-icons/hi2';
import { useTopScroll } from '@/hooks';
import { isClient } from '@/utils';
import { useSectionContext } from '@/contexts';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useSectionContext();
  const client = isClient();
  const isTop = useTopScroll(client ? window : null);

  const showNavbarBg = !isTop || isMenuOpen;

  return (
    <nav
      className={clsx(
        'transition-colors fixed top-0 duration-[350ms] z-10 w-full',
        showNavbarBg ? 'bg-neutral-850 shadow-sm' : 'bg-transparent',
      )}
    >
      <div className={clsx('max-w-7xl mx-auto px-5 sm:px-8 py-3 flex z-10 h-[var(--height-navbar)]')}>
        <div className="flex items-center relative group">
          <HiChevronDown className="h-6 w-6 mr-2 group-hover:rotate-180 transition-transform" />
          <a href="#" className="flex items-center text-xl">
            {activeSection || 'greeting'}
          </a>
          <ul className="absolute top-1/2 invisible group-hover:top-full group-hover:visible opacity-0 group-hover:opacity-100 transition-all bg-neutral-800 shadow-sm -z-[1] py-3 w-[200px] px-3 flex flex-col gap-5">
            <li>
              <Link href="#greeting" className={style.link}>
                greeting
              </Link>
            </li>
            <li>
              <Link href="#about" className={style.link}>
                about
              </Link>
            </li>
            <li>
              <Link href="#motto" className={style.link}>
                motto
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-link-desktop hidden sm:flex ml-auto gap-10">
          <Link href="#about" className={style.link}>
            about
          </Link>
          <Link href="#projects" className={style.link}>
            projects
          </Link>
        </div>
        <div className="nav-link-mobile sm:hidden ml-auto flex items-center">
          <ToggleButton
            inactiveIcon={<HiBars3 className="h-8 w-8" />}
            activeIcon={<HiXMark className="h-8 w-8" />}
            toggled={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <div
            className={clsx(
              'absolute top-full left-0 w-full bg-neutral-850 h-0 transition-all overflow-hidden',
              isMenuOpen ? 'h-32' : 'h-0',
            )}
          >
            <Link href="#about" className={clsx(style.link, style['link-mobile'])}>
              about
            </Link>
            <Link href="#projects" className={clsx(style.link, style['link-mobile'])}>
              projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
