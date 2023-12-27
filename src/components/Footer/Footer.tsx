import clsx from 'clsx';
import Link from 'next/link';

import { VercelIcon } from '@/assets';
import { ROUTES } from '@/constants';

import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="pt-40 relative">
      <div
        className="h-40 absolute top-0 left-0 w-full"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(18,18,18,0.5) 50%, rgba(18,18,18,1) 100%)`,
        }}
      ></div>
      <div className="bg-[rgb(18,18,18)]">
        <div className="container-center py-10 grid grid-cols-1 sm:grid-cols-12 gap-10">
          <section className="sm:col-span-6">
            <h2 className="text-xl sm:text-2xl">jerry&rsquo;s portfolio</h2>
            <h3 className="text-white/80 mt-2 text-sm sm:text-base">
              designed and programmed by K during the transition period from ITN to FTT @ G2023
            </h3>
          </section>
          <section className="sm:col-span-3 sm:text-right">
            <h2 className="text-xl sm:text-2xl">other links</h2>
            <ul className="flex flex-col gap-3 mt-2">
              {Object.values(ROUTES).map((route) => (
                <li key={route}>
                  <Link href={route} className={clsx('link sm:justify-end', style.subtext)}>
                    {route}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/projects/1" className={clsx('link sm:justify-end', style.subtext)}>
                  ? how to build
                </Link>
              </li>
            </ul>
          </section>
          <section className="sm:col-span-3 sm:text-right">
            <h2 className="text-xl sm:text-2xl">misc.</h2>
            <ul className="flex flex-col gap-3 mt-2 text-sm sm:text-base">
              <li className={clsx(style.subtext)}>Last updated: {new Date().toLocaleDateString()}</li>
              <li className={clsx(style.subtext)}>
                Deploy on{' '}
                <a
                  href="https://vercel.com/home"
                  className="inline-flex items-center border-b border-solid border-white/40"
                >
                  <VercelIcon className="h-4 mr-1" />
                  Vercel
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
