import { FC } from 'react';
import { CardProps } from './types';
import clsx from 'clsx';
import { SectionHeader } from '..';
import { HiChevronDoubleRight } from 'react-icons/hi2';

const PlusIcon = () => (
  <div className="absolute -top-2 -right-2 w-4 aspect-square flex items-center justify-center leading-none">+</div>
);

const DetailSection = ({ url, title }: Required<CardProps>['detail']) => (
  <a href={url} className="flex items-center gap-2 mt-3 w-max ml-auto">
    <HiChevronDoubleRight />
    {title}
  </a>
);

const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx('first:mt-0 mt-3 p-3 border border-solid border-white/40 font-mono bg-neutral-800', className)}>
    {children}
  </div>
);

const Card: FC<CardProps> = ({
  children,
  className,
  title,
  detail,
  showPlus = false,
  postFix: PostFix,
  preFix: PreFix,
  bodyClassName,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'p-3 sm:p-4 bg-neutral-850/40 backdrop-blur-sm  border-solid relative border border-white/10',
        className,
      )}
      {...props}
    >
      {/* Title */}
      {title && <SectionHeader title={title} />}
      {/* Prefix */}
      {PreFix ? <PreFix /> : null}
      {/* Children */}
      {children ? <CardBody className={bodyClassName}>{children}</CardBody> : null}
      {/* Postfix */}
      {PostFix ? <PostFix /> : null}
      {/* Anchor */}
      {detail ? <DetailSection {...detail} /> : null}
      {/* Plus */}
      {showPlus ? <PlusIcon /> : null}
    </div>
  );
};

export default Card;
