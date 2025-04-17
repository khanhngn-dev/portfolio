import { ComputerIcon, MoonIcon, SunIcon } from 'lucide-react';

export const themeKey = '_theme';

export const themeMap = {
  system: {
    icon: ComputerIcon,
    label: 'System',
  },
  light: {
    icon: SunIcon,
    label: 'Light',
  },
  dark: {
    icon: MoonIcon,
    label: 'Dark',
  },
};

export type Theme = keyof typeof themeMap;

export const loadTheme = (): Theme => {
  const theme = localStorage.getItem(themeKey) || 'system';

  if (!(theme in themeMap)) {
    return 'system';
  }

  return theme as Theme;
};

export const saveTheme = (theme: Theme) => {
  let newTheme = theme;

  if (theme === 'system') {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    newTheme = isDarkMode ? Theme.DARK : Theme.LIGHT;
  }

  localStorage.setItem(themeKey, theme);
  document.body.classList.toggle('dark', newTheme === Theme.DARK);
};
