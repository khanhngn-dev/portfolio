'use client';

import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { wait } from '@/utils';
import style from './TypingText.module.css';

type TypingTextProps = {
  textArr?: string[];
  typingTextClassName?: string;
  wrapperClassName?: string;
  cursorClassName?: string;
  /* Time the current text should persist measued in ms, default to `4000ms` */
  timePersist?: number;
  /* Wait time between deleting a prev text and entering the next text measued in ms, default to `1000ms` */
  timeBetweenText?: number;
  /* How long each letter should take to be typed measured in ms, default to `100ms` */
  timePerLetter?: number;
};

const TypingText: FC<TypingTextProps> = ({
  textArr = [],
  wrapperClassName,
  typingTextClassName,
  cursorClassName,
  timePersist = 4_000,
  timeBetweenText = 1_000,
  timePerLetter = 100,
}) => {
  const [currentText, setCurrentText] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const onNextText = async () => {
      const element = ref.current;
      if (!element) return;
      // Clear old text
      const prevText = textArr[currentText];
      element.style.transitionDuration = `${timePerLetter * prevText.length}ms`;
      element.style.width = '0ch';
      // Animate next text
      const nextIdx = (currentText + 1) % textArr.length;
      const nextText = textArr[nextIdx];
      // Wait for prevText to disappear, and buffer time
      await wait(prevText.length * timePerLetter + timeBetweenText);
      element.style.transitionDuration = `${timePerLetter * nextText.length}ms`;
      setCurrentText(nextIdx);
      element.style.width = `${nextText.length}ch`;
    };

    const timeoutId = setTimeout(
      onNextText,
      timePersist + textArr[currentText].length * timePerLetter + timeBetweenText,
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timePersist, currentText, textArr, timeBetweenText, timePerLetter]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Animate first text
    const firstText = textArr[0];
    element.style.transitionDuration = `${timePerLetter * firstText.length}ms`;
    element.style.width = `${firstText.length}ch`;
  }, [textArr, timePerLetter]);

  return (
    <div className={clsx('flex items-end relative font-mono pr-[1ch] w-max', wrapperClassName)}>
      <p
        ref={ref}
        className={clsx('transition-all whitespace-nowrap overflow-hidden w-0 !leading-none', typingTextClassName)}
        style={{
          transitionTimingFunction: `steps(${textArr[currentText].length}, end)`,
        }}
      >
        {textArr[currentText]}
      </p>
      <div
        className={clsx(
          'bg-white outline-none border-none text-transparent absolute h-full right-0 bottom-0 w-[1ch]',
          style.blink,
          cursorClassName,
        )}
      >
        _
      </div>
    </div>
  );
};

export default TypingText;
