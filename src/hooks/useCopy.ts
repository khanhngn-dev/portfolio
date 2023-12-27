'use client';

import { useRef, useState } from 'react';

const useCopy = () => {
  const count = useRef(0);
  const [text, setText] = useState('click to copy');
  const timeout = useRef<null | NodeJS.Timeout>(null);

  const handleCopy = (text: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      count.current += 1;
    }
    navigator.clipboard.writeText(text);

    if (count.current <= 3) {
      setText('copied');
    } else if (count.current <= 12) {
      setText(`copied ${count.current} times`);
    } else if (count.current <= 24) {
      setText(`really? ${count.current} times`);
    } else {
      setText(`${count.current} times - record: ${Intl.NumberFormat().format(Number.MAX_SAFE_INTEGER)}`);
    }

    timeout.current = setTimeout(() => {
      setText('click to copy');
      timeout.current = null;
      count.current = 0;
    }, 3_000);
  };

  return {
    handleCopy,
    text,
  };
};

export default useCopy;
