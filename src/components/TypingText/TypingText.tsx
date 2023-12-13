'use client';

import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { wait } from '@/utils';

type TypingTextProps = {
  textArr?: string[];
  className?: string;
  timePersist?: number;
  interval?: number;
  timePerLetter?: number;
};

const TypingText: FC<TypingTextProps> = ({
  textArr = [],
  className,
  timePersist = 4_000,
  interval = 1_000,
  timePerLetter = 100,
}) => {
  const [currentText, setCurrentText] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onNextText = async () => {
      const element = ref.current;
      const cursorElement = cursor.current;
      if (!element || !cursorElement) return;
      // Clear old text
      const prevText = textArr[currentText];
      element.style.transitionDuration = `${timePerLetter * prevText.length}ms`;
      element.style.width = '0ch';
      // Animate next text
      const nextIdx = (currentText + 1) % textArr.length;
      const nextText = textArr[nextIdx];
      // Wait for prevText to disappear, and buffer time
      await wait(prevText.length * timePerLetter + interval);
      element.style.transitionDuration = `${timePerLetter * nextText.length}ms`;
      setCurrentText(nextIdx);
      element.style.width = `${nextText.length}ch`;
    };

    let timeoutId = setTimeout(onNextText, timePersist + textArr[currentText].length * timePerLetter + interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timePersist, currentText, textArr, interval, timePerLetter]);

  useEffect(() => {
    const element = ref.current;
    const cursorElement = cursor.current;
    if (!element || !cursorElement) return;
    // Animate first text
    const firstText = textArr[0];
    element.style.transitionDuration = `${timePerLetter * firstText.length}ms`;
    element.style.width = `${firstText.length}ch`;
  }, [textArr, timePerLetter]);

  return (
    <div className="relative w-max min-w-[1ch] pr-[1.3ch] transition-all ease-linear">
      <p
        ref={ref}
        className={clsx(
          'transition-all font-mono whitespace-nowrap overflow-hidden w-0 !leading-none ease-linear',
          className,
        )}
      >
        {textArr[currentText]}
      </p>
      <div
        ref={cursor}
        className={clsx(
          'w-[1.3ch] h-full bottom-0 right-0 absolute font-mono bg-white outline-none border-none blink text-transparent',
        )}
      >
        _
      </div>
    </div>
  );
};

export default TypingText;
