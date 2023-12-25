import { HTMLAttributes, ReactNode } from 'react';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  subtitle: string;
  title: string;
  wrapperClassName?: string;
};

export type SectionHeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  title: string;
  children?: ReactNode;
  iconClassName?: string;
};

export type SubSectionHeaderProps = HTMLAttributes<HTMLHeadingElement>;

export type ImpressionHeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  reversed?: boolean;
}
