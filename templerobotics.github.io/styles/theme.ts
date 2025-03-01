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
          borderColor: 'var(--foreground)',
          borderRadius: 8,
        }
      }
    }
  }
});

export default theme;