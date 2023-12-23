'use client';

import { useSectionContext } from '@/contexts';
import { useEffect } from 'react';

type UseObserverProps = {
  querySelector: string;
  thresholdSensitivity?: number;
};

const useObserver = ({ querySelector, thresholdSensitivity = 5 }: UseObserverProps) => {
  const { setActiveSection } = useSectionContext();

  useEffect(() => {
    const elements = document.querySelectorAll(querySelector);

    if (!elements.length) return;
    let maxRatio = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) maxRatio.set(entry.target.id, entry.intersectionRatio * entry.target.scrollHeight);
          else maxRatio.set(entry.target.id, 0);
        });
        if (!maxRatio.size) return;
        const maxRatioId = [...maxRatio.entries()].reduce((acc, ratio) => (ratio[1] > acc[1] ? ratio : acc))[0];
        setActiveSection(maxRatioId);
      },
      {
        threshold: Array.from({ length: thresholdSensitivity }, (_, i) => i / thresholdSensitivity),
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [setActiveSection, querySelector, thresholdSensitivity]);

  return null;
};

export default useObserver;
