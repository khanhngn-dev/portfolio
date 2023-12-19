import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  detail?: {
    title: string;
    url: string;
  };
  children?: ReactNode;
  showPlus?: boolean;
}

export type CardListProps = HTMLAttributes<HTMLUListElement> & {
  items: string[];
  withCursor?: boolean;
}