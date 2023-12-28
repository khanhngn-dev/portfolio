'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { isClient } from '@/utils';

import { RotateCardProps } from './types';

const RotateCard: FC<RotateCardProps> = ({
  children,
  width = 250,
  height = 400,
  maxRotate = 20,
  maxStep = 20,
  blur = 40,
  color = 'rgba(255,255,255,.2)',
  spread = 0,
  style,
  container,
  borderColor = '#0000',
  borderWeight = 0,
  className,
}) => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const { x, y } = coord;
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  // Find the middle of the screen
  const midX = useRef(0);
  const midY = useRef(0);

  const rotateHandler = useCallback(
    (e: MouseEvent) => {
      if (!cardRef.current) return;

      // Grab mouse position, subtract center, divide by maxStep
      let { clientX: x, clientY: y } = e;
      x = (x - midX.current) / maxStep;
      y = (y - midY.current) / maxStep;

      // Limit rotation to maxRotate
      x = Math.max(Math.min(x, maxRotate), -maxRotate);
      y = Math.max(Math.min(y, maxRotate), -maxRotate);
      setCoord({ x, y });
    },
    [maxRotate, maxStep],
  );

  const resetRotateHandler = useCallback(() => {
    if (!cardRef.current || !glareRef.current) return;
    cardRef.current.style.transition = 'transform 100ms linear';
    glareRef.current.style.transition = 'box-shadow 100ms linear';
    setCoord({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!isClient()) return;
    const element = container
      ? document.getElementById(container) || document.documentElement
      : document.documentElement;
    midX.current = element.clientWidth / 2;
    midY.current = element.clientHeight / 2;
    let timeout: NodeJS.Timeout | null = null;

    const onMouseEnter = () => {
      const card = cardRef.current;
      const glare = glareRef.current;
      if (!card || !glare) return;
      card.style.transition = 'transform 100ms linear';
      glare.style.transition = 'box-shadow 100ms linear';
      timeout = setTimeout(() => {
        card.style.transition = 'none';
        glare.style.transition = 'none';
      }, 100);
    };

    element.addEventListener('mousemove', rotateHandler);
    element.addEventListener('mouseleave', resetRotateHandler);
    element.addEventListener('mouseenter', onMouseEnter);
    return () => {
      element.removeEventListener('mousemove', rotateHandler);
      element.removeEventListener('mouseleave', resetRotateHandler);
      element.removeEventListener('mouseenter', onMouseEnter);
      if (timeout) clearTimeout(timeout);
    };
  }, [container, rotateHandler, resetRotateHandler]);

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
        className="w-[inherit] h-[inherit] overflow-clip bg-[#222] relative will-change-transform"
        style={{
          transform: `rotateY(${-x}deg) rotateX(${y}deg)`,
          boxShadow: `0px 0px 0px ${borderWeight}px ${borderColor}`,
          ...style,
        }}
        ref={cardRef}
      >
        {children}
        <div
          ref={glareRef}
          className="z-[100] inset-0 w-[inherit] h-[inherit] absolute rounded-[inherit] pointer-events-none"
          style={{
            boxShadow: `inset ${-x}px ${-y}px ${blur}px ${spread}px ${color}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RotateCard;
