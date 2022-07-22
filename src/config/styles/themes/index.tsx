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
    };

    navBar: {
      background: string;
    };
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
    navBar: {
      background: string;
    };
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c7c7c',
    },
    secondary: {
      main: '#c5c5c5',
    },
    text: {
      primary: '#eee',
      secondary: '#ccc',
    },
  },

  navBar: {
    background: '#303030',
  },

});

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#3a3a3a',
    },
    secondary: {
      main: '#2e2e2e  ',
    },
    background: {
      default: '#eee',
    },
    text: {
      primary: '#1f1f1f',
      secondary: '#3a2e2e',
    },
  },

  navBar: {
    background: '#b4b4b4',
  },
});
