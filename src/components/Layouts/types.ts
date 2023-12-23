import { HTMLAttributes } from 'react';

export type SectionProps = HTMLAttributes<HTMLDivElement>;

export type SubSectionProps = HTMLAttributes<HTMLDivElement>;

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  minSize?: string;
};
