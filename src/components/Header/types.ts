import { HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  subtitle: string;
  title: string;
  wrapperClassName?: string;
};

export type SectionHeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  title: string;
  iconClassName?: string;
};