import { ComputerIcon, MoonIcon, SunIcon } from 'lucide-react';

export const themeKey = '_theme';

export enum Theme {
  SYSTEM = 'system',
  Light = 'light',
  DARK = 'dark',
}

export const themeMap = {
  [Theme.SYSTEM]: {
    icon: ComputerIcon,
    label: 'System',
  },
  [Theme.Light]: {
    icon: SunIcon,
    label: 'Light',
  },
  [Theme.DARK]: {
    icon: MoonIcon,
    label: 'Dark',
  },
};

export const loadTheme = (): Theme => {
  const theme = localStorage.getItem(themeKey);

  if (!(theme in themeMap)) {
    return Theme.SYSTEM;
  }

  return theme as Theme;
};

export const saveTheme = (theme: Theme) => {
  let newTheme = theme;

  if (theme === 'system') {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    newTheme = isDarkMode ? Theme.DARK : Theme.Light;
  }

  localStorage.setItem(themeKey, theme);
  document.body.classList.toggle('dark', newTheme === Theme.DARK);
};
