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
            color: 'var(--foreground-hover)'
          }
        }
      }
    }
  }
});

export default theme;