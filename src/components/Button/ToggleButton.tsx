import clsx from 'clsx';
import { FC } from 'react';
import style from './Button.module.css';
import { ToggleButtonProps } from './types';

const ToggleButton: FC<ToggleButtonProps> = ({ activeIcon, toggled, onToggle, inactiveIcon, className, ...props }) => {
  return (
    <button className={clsx(style['toggle-btn'], className)} onClick={() => onToggle && onToggle(!toggled)} {...props}>
      {toggled ? activeIcon : inactiveIcon}
    </button>
  );
};

export default ToggleButton;
