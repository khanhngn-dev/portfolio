import { ImageProps } from 'next/image';
import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  detail?: {
    title: string;
    url: string;
  };
  children?: ReactNode;
  preFix?: () => ReactNode;
  postFix?: () => ReactNode;
  showPlus?: boolean;
  bodyClassName?: string;
};

export type CardListProps = HTMLAttributes<HTMLUListElement> & {
  items: string[];
  withCursor?: boolean;
};

export type CardCheckListProps = HTMLAttributes<HTMLUListElement> & {
  items: {
    title: string;
    description?: string;
    checked: boolean;
  }[];
  withCursor?: boolean;

};

export type CardAccordionProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  items: string[];
  images?: ImageProps[];
  imageClassName?: string;
};
