import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { reduxStates } from '../../store';

export function Banner() {
  const apiResponseHero = useSelector((state: reduxStates) => state.hero);
  const hero = apiResponseHero.data.results[0];

  return (
    <Grid container height="100%" minHeight="550px">
      {hero && (
        <Grid
          key={hero.id}
          item
          width="100%"
          paddingTop="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          height="100%"
          sx={{
            background: `
              linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.99) 90%),
              url(${hero
              ? `${hero.thumbnail.path}.${hero.thumbnail.extension} ` : ''})
              center center / 100% 100% no-repeat
            `,
            boxShadow: '0px 20px 20px 32px rgba(0, 0, 0, 0.95)',
            padding: '3rem',
          }}
        >
          <Box color="white">
            <Typography
              variant="h2"
              marginBottom="1rem"
            >{hero.name}
            </Typography>

            <Typography
              maxWidth="80%"
              variant="body1"
              fontSize="1.2rem"
              marginBottom="2rem"
            >{hero.description}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            { hero.urls.map((url) => (
              <a href={url.url} target="_blank" rel="noreferrer" key={url.type}>
                <Button variant="contained" color="secondary">{url.type}</Button>
              </a>
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
