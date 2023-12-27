import { ImageProps } from 'next/image';
import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  detail?: {
    title: string;
    url?: string;
  };
  children?: ReactNode;
  preFix?: () => ReactNode;
  postFix?: () => ReactNode;
  showPlus?: boolean;
  bodyClassName?: string;
  titleClassName?: string;
  plusPosition?: 'tr' | 'tl' | 'br' | 'bl';
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

export type QuoteCardProps = CardProps & {
  name: string;
  title: string;
  company: {
    name: string;
    url: string;
  };
  quote: string;
  date: string;
};

export type RotateCardProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  maxRotate?: number;
  maxStep?: number;
  blur?: number;
  color?: string;
  spread?: number;
  style?: React.CSSProperties;
  container?: Document | Element | null;
  borderColor?: string;
  borderWeight?: number;
  className?: string;
};
