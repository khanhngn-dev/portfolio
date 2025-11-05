import { MoonIcon, SunIcon } from 'lucide-react';

export const themeKey = '_theme';

export const themeMap = {
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
  const theme = localStorage.getItem(themeKey);

  if (!(theme && theme in themeMap)) {
    return 'dark';
  }

  return theme as Theme;
};

export const saveTheme = (theme: Theme) => {
  localStorage.setItem(themeKey, theme);
  document.body.classList.toggle('dark', theme === 'dark');
};
