import { HTMLAttributes } from 'react';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  allowOverflow?: boolean;
}

export type SubSectionProps = HTMLAttributes<HTMLDivElement>;

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  minSize?: string;
};
