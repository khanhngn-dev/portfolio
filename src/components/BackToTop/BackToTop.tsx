'use client';

import { useTopScroll } from '@/hooks';
import { isClient } from '@/utils';
import clsx from 'clsx';
import { HiChevronDoubleUp } from 'react-icons/hi2';

const BackToTop = () => {
  const isClientSite = isClient();
  const isTop = useTopScroll(isClientSite ? window : null, isClientSite ? document.documentElement.clientHeight : 0);

  const onBackToTop = () => {
    if (!isClientSite) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={clsx(
        'fixed bottom-[2px] right-5 p-3 bg-neutral-800 shadow-2xl transition-all border border-white/20 border-solid hover:bg-neutral-900 flex flex-col items-center overflow-y-clip',
        isTop ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
      onClick={onBackToTop}
    >
      <HiChevronDoubleUp className="w-6 h-6" />
      <span>top</span>
    </button>
  );
};

export default BackToTop;
