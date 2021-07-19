import { useState, useCallback, useEffect } from 'react';
import { ThemeType } from '@play-to-learn/components.theme.palette';

import { ThemeTypeHook } from './interfaces';

const browserDefinedTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

export const useThemeType: ThemeTypeHook = () => {
  const [theme, setTheme] = useState<ThemeType>(browserDefinedTheme);

  const handleThemeChange = useCallback((theme: ThemeType) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme') as ThemeType;
    if (theme) {
      setTheme(theme);
    } else {
      handleThemeChange(browserDefinedTheme);
    }
  }, [handleThemeChange]);

  return [theme, handleThemeChange];
};
