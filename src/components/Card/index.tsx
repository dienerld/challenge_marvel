import {
  Box,
  Paper, styled, SxProps, Theme, Typography, useTheme,
} from '@mui/material';
import React from 'react';
import { TResponseApiHero } from '../../@types/marvel';

type StyledPaperProps = {
  sx?: SxProps<Theme>;
  height?: string;
};
type SlideProps = {
  sx?: SxProps<Theme>;
  hero:TResponseApiHero
};

const breakpoints = (theme: Theme) => ({
  [theme.breakpoints.up('xs')]: {
    maxWidth: '18rem',
    maxHeight: '14rem',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '15rem',
    maxHeight: '12rem',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '25rem',
    maxHeight: '18rem',
  },
});

const StyledPaperMui = styled(Paper)(({ sx }: StyledPaperProps) => {
  const theme = useTheme();

  return ({
    borderRadius: '1rem',
    height: '100%',
    width: '100%',
    background: 'transparent',
    boxShadow: 'none',

    ...(sx as React.CSSProperties),
    ...breakpoints(theme),

  });
});
export function Card({ hero, sx }: SlideProps) {
  const theme = useTheme();

  return (
    <StyledPaperMui sx={sx}>
      <Box
        sx={{
          height: '18rem',
          width: '95%',
          borderRadius: '0.5rem',
          background: `url(${hero.thumbnail.path}.${hero.thumbnail.extension}) center center / 100% 100% no-repeat`,
          ...breakpoints(theme),

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          sx={{
            marginBottom: '0.5rem',
            textShadow: `2px 0 #000, -2px 0 #000, 0 2px #000,0 -2px #000,
            1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;`,
          }}
        >
          {hero.name}
        </Typography>
      </Box>
    </StyledPaperMui>
  );
}
