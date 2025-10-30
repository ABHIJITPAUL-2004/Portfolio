import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2', // blue 700
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1565c0', // blue 800 as accent
      light: '#5e92f3',
      dark: '#003c8f',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#0b0f14',
      paper: mode === 'light' ? '#ffffff' : '#0f141b',
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 700, letterSpacing: -0.25 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { size: 'medium' },
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 12 } },
    },
  },
});

export const buildTheme = (mode) => createTheme(getDesignTokens(mode));


