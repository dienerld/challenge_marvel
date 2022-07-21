import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  export interface Theme {
    status: {
      danger: string;
    };
    icons: {
      primary: {
        main: string;
      }
    }
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    },

    icons?: {
      primary?: {
        main: string;
      }
    }
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#89009f',
    },
    secondary: {
      main: '#ce93d8',
    },
    text: {
      primary: '#eee',
      secondary: '#ccc',
    },
    background: {
      default: '#181818',
    },
  },
  icons: {
    primary: {
      main: '#2b583b',
    },
  },

});

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#2b583b',
    },
    secondary: {
      main: '#e16e0e  ',
    },
    text: {
      primary: '#1f1f1f',
      secondary: '#3a2e2e',
    },
  },
  icons: {
    primary: {
      main: '#2b583b',
    },
  },
});
