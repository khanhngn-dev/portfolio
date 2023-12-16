'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type SectionContextType = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};

export const SectionContext = createContext<SectionContextType>({} as SectionContextType);
export const useSectionContext = () => useContext(SectionContext);
export { default as SectionProvider } from './SectionContext';
