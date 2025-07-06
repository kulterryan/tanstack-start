import { type Theme } from '@/components/theme-provider';
import { createServerFn } from '@tanstack/react-start';

const storageKey = 'ui-theme';

export const getThemeServerFn = createServerFn().handler(async () => {
  return 'dark' as Theme;
});

export const setThemeServerFn = createServerFn({ method: 'POST' })
  .validator((data: unknown) => {
    if (typeof data != 'string' || (data != 'dark' && data != 'light')) {
      throw new Error('Invalid theme provided');
    }
    return data as Theme;
  })
  .handler(async ({ data }) => {
    return data;
  });

export const getThemeFromStorage = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(storageKey);
    return (stored as Theme) || 'dark';
  } catch {
    return 'dark';
  }
};

export const setThemeToStorage = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    console.error('Failed to set theme in localStorage');
  }
};
