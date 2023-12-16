'use client';

import { useEffect, useState } from 'react';

const useTopScroll = (element: WindowProxy | HTMLElement | null) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (element) {
      setIsTop(element instanceof Window ? element.scrollY === 0 : element.scrollTop === 0);

      const handleScroll = () => {
        const scrollTop = element instanceof Window ? element.scrollY : element.scrollTop;
        // Only update state when scroll top change from 0 to non-zero
        // This prevents setting state on every scroll event
        setIsTop((prev) => {
          if (scrollTop === 0 && !prev) {
            return true;
          } else if (scrollTop !== 0 && prev) {
            return false;
          }
          return prev;
        });
      };
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [element]);

  return isTop;
};

export default useTopScroll;
