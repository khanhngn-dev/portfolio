import { FC } from 'react';
import { ImpressionHeaderProps } from './types';
import clsx from 'clsx';
import style from './Header.module.css';

const ImpressionHeader: FC<ImpressionHeaderProps> = ({ children, className, reversed = false, ...props }) => {
  let renderedChildren = children;

  if (typeof children === 'string') {
    renderedChildren = children.split(' ').map((char, index) => {
      return (
        <span key={index} className="block text-inherit">
          {char}
        </span>
      );
    });
  }

  return (
    <h3
      className={clsx(style['impression-header'], className)}
      {...props}
    >
      {renderedChildren}
    </h3>
  );
};

export default ImpressionHeader;
