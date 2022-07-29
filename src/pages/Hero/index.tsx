import { Box, Button, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TResponseApiHero } from '../../@types/marvel';
import { fetchHeroById } from '../../api';

export function Hero() {
  const { id } = useParams();
  const [hero, setHero] = useState<TResponseApiHero>({} as TResponseApiHero);

  const getHero = async () => {
    const { data: dataAxios } = await fetchHeroById(id!);
    const [_hero] = dataAxios.data.results;
    setHero(_hero);
  };

  const theme = useTheme()

  useEffect(() => {
    getHero();
  }, []);

  useEffect(() => {
    getHero();
  }, [id]);

  useEffect(() => {
    console.log(hero)
  },[hero])
  return (
    <Grid container spacing={2}>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={12}
        sm={5}
        sx={{
          [theme.breakpoints.down("sm")]:{marginTop:"3rem"}
        }}
      >
        <CardMedia
          sx={{ maxWidth: '300px', maxHeight: '400px' }}
          component="img"
          image={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
          alt={hero?.name}
        />
      </Grid>
      <Grid item container  xs={12} sm={7} marginTop="1.5rem" paddingRight="1.5rem" flexDirection="column" 
      sx={{
        [theme.breakpoints.down("sm")]:{paddingX:"5.5rem !important", marginLeft:"0"}
      }} >
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Name: </strong>{hero.name}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Description: </strong>{hero?.description? hero.description : "Not finded"}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Comics: </strong>{hero?.comics?.available}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Series: </strong>{hero?.series?.available}
        </Typography>
        
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Events: </strong>{hero?.events?.available}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Stories: </strong>{hero?.stories?.available}
        </Typography>

        <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            { hero?.urls?.map((url) => (
              <a href={url.url} target="_blank" rel="noreferrer" key={url.type}>
                <Button variant="contained" color="secondary">{url.type}</Button>
              </a>
            ))}
          </Box>
      </Grid>
    </Grid>
  );
}
