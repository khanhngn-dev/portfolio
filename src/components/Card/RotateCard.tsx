'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { isClient } from '@/utils';

import { RotateCardProps } from './types';

const RotateCard: FC<RotateCardProps> = ({
  children,
  width = 250,
  height = 400,
  maxRotate = 20,
  maxStep = 10,
  blur = 20,
  color = '#ffffff44',
  spread = 0,
  style,
  container = isClient() ? document : null,
  borderColor = '#0000',
  borderWeight = 0,
  className,
}) => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const { x, y } = coord;

  const rotateHandler = useCallback(
    (e: MouseEvent) => {
      const midX = window.innerWidth / 2;
      const midY = window.innerHeight / 2;
      let { clientX: x, clientY: y } = e;
      x = (x - midX) / maxStep;
      y = (y - midY) / maxStep;
      if (x > maxRotate) x = maxRotate;
      if (x < -maxRotate) x = -maxRotate;
      if (y > maxRotate) y = maxRotate;
      if (y < -maxRotate) y = -maxRotate;
      setCoord({ x, y });
    },
    [maxRotate, maxStep],
  );

  const resetRotateHandler = () => {
    setCoord({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!container) return;

    const castedContainer = container as HTMLElement;

    castedContainer.addEventListener('mousemove', rotateHandler);
    castedContainer.addEventListener('mouseleave', resetRotateHandler);
    return () => {
      castedContainer.removeEventListener('mousemove', rotateHandler);
      castedContainer.removeEventListener('mouseleave', resetRotateHandler);
    };
  }, [container, rotateHandler]);

  return (
    <div
      style={{
        perspective: 1000,
        width,
        height,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <div
        style={{
          width: 'inherit',
          height: 'inherit',
          borderRadius: 16,
          overflow: 'hidden',
          background: '#222',
          transform: `rotateY(${-x}deg) rotateX(${y}deg)`,
          position: 'relative',
          boxShadow: `0px 0px 0px ${borderWeight}px ${borderColor}`,
          ...style,
        }}
      >
        {children}
        <div
          style={{
            boxShadow: `inset ${-x}px ${-y}px ${x || y ? blur : 0}px ${spread}px ${color}`,
            zIndex: 100,
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: 16,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RotateCard;
