'use client';

import { isClient } from '@/utils';
import { useState, ReactNode, FC, useEffect } from 'react';
import { SectionContext } from '.';

type SectionContextProps = {
  children?: ReactNode;
};

export const SectionProvider: FC<SectionContextProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!isClient()) return;
    const hashed = window.location.hash.slice(1);
    setActiveSection(hashed);
  }, []);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
