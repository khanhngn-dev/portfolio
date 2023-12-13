import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export type ToggleButtonProps = ButtonProps & {
  toggled?: boolean;
  onToggle?: (toggled: boolean) => void;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
};
