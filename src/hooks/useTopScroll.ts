'use client';

import { useEffect, useState } from 'react';

const useTopScroll = (element: WindowProxy | HTMLElement | null, minScroll = 0) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (element) {
      setIsTop(element instanceof Window ? element.scrollY <= minScroll : element.scrollTop <= minScroll);

      const handleScroll = () => {
        const scrollTop = element instanceof Window ? element.scrollY : element.scrollTop;
        // Only update state when scroll top change from minScroll to more than minScroll
        // This prevents setting state on every scroll event
        setIsTop((prev) => {
          if (scrollTop <= minScroll && !prev) {
            return true;
          } else if (scrollTop > minScroll && prev) {
            return false;
          }
          return prev;
        });
      };
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [element, minScroll]);

  return isTop;
};

export default useTopScroll;
