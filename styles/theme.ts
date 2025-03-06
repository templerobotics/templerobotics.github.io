'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'dark'
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: 'var(--foreground)',
          transition: 'color 500ms',
          '&:hover': {
            color: 'var(--foreground-hover)',
            cursor: 'pointer'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'var(--foreground)',
          backgroundColor: 'transparent',
          borderColor: 'var(--foreground)',
          borderRadius: '8px',
          transition: 'color 500ms, background-color 500ms',
          '&:hover': {
            color: 'var(--primary)',
            backgroundColor: 'var(--foreground)'
          }
        }
      }
    }
  }
});

export default theme;