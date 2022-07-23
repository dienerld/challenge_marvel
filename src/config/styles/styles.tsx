import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export function StylesGlobal() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          width: '100vw',
          height: '100vh',
          backgroundColor: theme.palette.background.default,
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        },
        a: {
          textDecoration: 'none',
          color: theme.palette.text.primary,
        },
        ':root': {
          [theme.breakpoints.down('lg')]: {
            fontSize: '1rem',
          },

          [theme.breakpoints.down('md')]: {
            fontSize: '0.8rem',
          },

          [theme.breakpoints.down('sm')]: {
            fontSize: '0.6rem',
          },
        },
      }}
    />
  );
}
