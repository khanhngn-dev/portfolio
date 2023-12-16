import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  detail?: {
    title: string;
    url: string;
  };
  children?: ReactNode;
}
