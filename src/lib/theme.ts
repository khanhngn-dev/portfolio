export const themeKey = '_theme';

export const loadTheme = () => {
  let localTheme = localStorage.getItem(themeKey);

  if (!localTheme) {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localTheme = isDark ? 'dark' : 'light';
    localStorage.setItem(themeKey, localTheme);
  }

  return localTheme as 'light' | 'dark';
};

export const saveTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem(themeKey, theme);
};
