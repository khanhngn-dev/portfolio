'use client';

import Link from 'next/link';
import { HiChevronDoubleLeft, HiChevronLeft } from 'react-icons/hi2';

const NotFound = () => {
  return (
    <div className="w-full mt-[var(--height-navbar)] h-[calc(100lvh_-_var(--height-navbar))] container-center flex flex-col items-center justify-center">
      <h1 className="text-center">
        <p className="text-2xl sm:text-3xl">404</p>
        <p className="mt-3 text-xl sm:text-2xl">&lsquo;{window.location.pathname}&rsquo; not found</p>
      </h1>
      <p className="mt-5 p-3 border border-white border-solid bg-neutral-850 max-w-[500px] mx-auto">
        you might have a typo in the url, or the page you were looking for may not exist
      </p>
      <div className="flex gap-8 justify-center mt-10">
        <Link
          href="/"
          className="flex items-center gap-2 border border-primary/80 border-solid px-4 py-3 hover:bg-white/20 transition-colors"
        >
          <HiChevronDoubleLeft className="w-6 h-6" />
          return home
        </Link>
        <button
          className="flex items-center gap-2 border border-white/80 border-solid px-4 py-3 hover:bg-white/20 transition-colors"
          onClick={() => {
            window.history.back();
          }}
        >
          <HiChevronLeft className="w-6 h-6" />
          prev page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
