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
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const onNextText = async () => {
      const textElm = textRef.current;
      if (!textElm) return;
      const current = textArr[currentText];
      textElm.style.transitionDuration = `${timePerLetter * current.length}ms`;
      textElm.style.width = `${current.length}ch`;
      // Wait for the text to be fully typed
      await wait(timePerLetter * current.length + timePersist);
      textElm.style.width = '0ch';
      // Wait for the text to be fully deleted
      await wait(timePerLetter * current.length + timeBetweenText);
      setCurrentText((prev) => (prev + 1) % textArr.length);
    };

    const timeoutId = setTimeout(onNextText, 0);
    return () => clearTimeout(timeoutId);
  }, [timePersist, currentText, textArr, timeBetweenText, timePerLetter]);

  return (
    <div className={clsx('flex items-end font-mono w-max', wrapperClassName)}>
      <p
        ref={textRef}
        className={clsx('transition-all whitespace-nowrap overflow-hidden w-0 pb-1', typingTextClassName)}
        style={{
          transitionTimingFunction: `steps(${textArr[currentText].length}, end)`,
        }}
      >
        {textArr[currentText]}
      </p>
      <div
        className={clsx(
          'bg-white outline-none border-none text-transparent h-full',
          style.blink,
          // Passing `typingTextClassName` to ensures the cursor is the same size as the text
          typingTextClassName,
          cursorClassName,
        )}
      >
        _
      </div>
    </div>
  );
};

export default TypingText;
