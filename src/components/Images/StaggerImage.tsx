import clsx from 'clsx';
import { ImageProps } from 'next/image';
import { FC } from 'react';
import { HiChevronRight } from 'react-icons/hi2';

import { AlignImage } from '..';
import style from './Image.module.css';

export type StaggerImageProps = {
  className?: string;
  items: {
    title: string;
    images: ImageProps[];
    url?: string;
  }[];
  lightBorder?: boolean;
};

const StaggerImage: FC<StaggerImageProps> = ({ className, items, lightBorder }) => {
  return (
    <div className={clsx(style['stagger-image'], className)}>
      {items.map(({ title, images, url }) => {
        const Wrapper = url ? 'a' : 'div';
        return (
          <Wrapper
            href={url}
            key={title}
            className={clsx(
              'border border-solid pt-2 sm:pt-4 bg-neutral-800 min-h-[300px] flex flex-col h-max',
              lightBorder ? 'border-white/10' : 'border-white/20',
            )}
          >
            <div className="px-5 my-auto">
              <AlignImage items={images} />
            </div>
            <p className="text-center mt-3 p-3 bg-neutral-950/80 flex items-center border-t border-solid border-white/40">
              <HiChevronRight className="w-8 h-8" />
              {title}
            </p>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default StaggerImage;
