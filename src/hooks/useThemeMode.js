import { useEffect, useMemo, useState } from 'react';
import { buildTheme } from '../theme/theme';

const STORAGE_KEY = 'portfolio-theme-mode-v1';

export function useThemeMode() {
  const [mode, setMode] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light'; // default to light theme
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {}
  }, [mode]);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return { mode, theme, toggleMode };
}


