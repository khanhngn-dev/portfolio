/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

type AlignImageProps = {
  items: ImageProps[];
  className?: string;
};

const Wrapper = ({ children, className }: { className?: string; children?: React.ReactNode }) => (
  <div className={clsx('relative mx-auto w-full max-w-[250px] h-max-[250px] aspect-square', className)}>{children}</div>
);

const AlignImage: FC<AlignImageProps> = ({ items, className }) => {
  if (items.length === 0) return null;
  if (items.length === 1)
    return (
      <Wrapper className={className}>
        <Image {...items[0]} fill className="!w-2/3 !h-2/3 center-absolute" />
      </Wrapper>
    );
  if (items.length === 2)
    return (
      <Wrapper className={className}>
        <Image
          fill
          className="absolute !w-1/2 !h-max object-contain"
          style={{
            aspectRatio: '1/1',
            top: '0.5rem',
            left: '0.5rem',
          }}
          {...items[0]}
        />
        <Image
          fill
          className="absolute !w-1/2 !h-max object-contain"
          style={{
            aspectRatio: '1/1',
            top: 'auto',
            bottom: '0.5rem',
            right: '0.5rem',
            left: 'auto',
          }}
          {...items[1]}
        />
      </Wrapper>
    );
  if (items.length === 3)
    return (
      <Wrapper className={className}>
        <Image
          fill
          className="absolute !w-5/12 !h-max object-contain"
          style={{
            aspectRatio: '1/1',
            top: '0.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          {...items[0]}
        />
        <Image
          fill
          className="absolute !w-5/12 !h-max object-contain"
          style={{
            aspectRatio: '1/1',
            top: 'auto',
            bottom: '0.5rem',
            left: '0.5rem',
          }}
          {...items[1]}
        />
        <Image
          fill
          className="absolute !w-5/12 !h-max object-contain"
          style={{
            aspectRatio: '1/1',
            top: 'auto',
            bottom: '0.5rem',
            right: '0.5rem',
            left: 'auto',
          }}
          {...items[2]}
        />
      </Wrapper>
    );
  return null;
};

export default AlignImage;
