'use client';

import { FC, useEffect, useRef } from 'react';
import { SectionProps } from './types';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useSectionContext } from '@/contexts';

const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { setActiveSection } = useSectionContext();

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') || '';
            setActiveSection((prev) => (prev === id ? prev : id));
          }
        });
      },
      {
        threshold: [0.3, 0.4, 0.5],
        rootMargin: '-50px',
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [router, setActiveSection]);

  return (
    <section ref={sectionRef} className={clsx('overflow-y-clip container-center', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
