'use client';

import Link from 'next/link';
import { ToggleButton } from '..';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { HiBars3, HiChevronDown, HiXMark } from 'react-icons/hi2';
import { useClickOutside, useTopScroll } from '@/hooks';
import { isClient } from '@/utils';
import { useSectionContext } from '@/contexts';
import { ROUTES } from '@/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState<string[]>([]);
  const { activeSection } = useSectionContext();
  const client = isClient();
  const isTop = useTopScroll(client ? window : null);
  const navbarMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(navbarMenuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  useEffect(() => {
    const main = document.getElementById('main');
    if (!main) return;
    const sections = main.querySelectorAll('.section-container');
    const sectionsId = Array.from(sections).map((section) => section.id);
    setSections(sectionsId);
  }, []);

  const showNavbarBg = !isTop || isMenuOpen;

  return (
    <nav
      className={clsx(
        'transition-colors fixed top-0 duration-[350ms] z-50 w-full',
        showNavbarBg ? 'bg-neutral-900 shadow-sm' : 'bg-transparent',
      )}
    >
      <div className={clsx('max-w-7xl mx-auto px-5 sm:px-8 py-3 flex z-10 h-[var(--height-navbar)]')}>
        <Link className="flex items-center text-lg md:text-xl" href="/">
          home
        </Link>
        <div className="flex items-center relative group">
          <HiChevronDown className="h-6 w-6 mx-2 group-hover:rotate-180 transition-transform" />
          <div className="flex items-center text-xl">{activeSection}</div>
          {sections.length !== 0 ? (
            <ul className="absolute top-1/2 invisible group-hover:top-full group-hover:visible opacity-0 group-hover:opacity-100 transition-all bg-neutral-800 shadow-sm -z-[1] py-3 w-[200px] px-3 flex flex-col gap-5">
              {sections.map((section) => (
                <li key={section}>
                  <Link href={`#${section}`} className={'link'}>
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="nav-link-desktop hidden sm:flex ml-auto gap-10">
          {Object.values(ROUTES).map((route) => (
            <Link key={route} href={route} className={'link'}>
              {route}
            </Link>
          ))}
        </div>
        <div className="nav-link-mobile sm:hidden ml-auto flex items-center" ref={navbarMenuRef}>
          <ToggleButton
            inactiveIcon={<HiBars3 className="h-8 w-8" />}
            activeIcon={<HiXMark className="h-8 w-8" />}
            toggled={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          {/* https://www.youtube.com/watch?v=B_n4YONte5A */}
          <div
            className={clsx(
              'absolute top-full left-0 w-full transition-all grid',
              isMenuOpen ? 'grid-rows-[1fr] shadow-sm bg-neutral-900/90 backdrop-blur-sm' : 'grid-rows-[0fr]',
            )}
          >
            <div className={clsx('overflow-hidden')}>
              {Object.values(ROUTES).map((route) => (
                <Link key={route} href={route} className={clsx('link link-mobile')}>
                  {route}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
