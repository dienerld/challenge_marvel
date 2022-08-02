import { Grid } from '@mui/material';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, reduxStates } from '../../store';
import { fetchHero, fetchHeroes } from '../../store/modules/marvel/fetch';
import { randomHero } from '../../utils/randomHero';

import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';

const MAX_HERO = 1562;
const limit = 25;

export function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const responsive = {
    0: { items: 2.2 },
    426: { items: 3.2 },
    600: { items: 4.2 },
    900: { items: 4.8 },
    1200: { items: 5.7 },
  };

  const [heroes, hero] = useSelector(
    ({ allHeroes, hero: _hero }: reduxStates) => [allHeroes.heroes, _hero.hero],
  );

  useEffect(() => {
    if (!heroes.data) {
      dispatch(
        fetchHeroes({
          limit,
          offset: Math.floor(Math.random() * (MAX_HERO - limit)),
        }),
      );
    }
  }, [heroes]);

  useEffect(() => {
    if (heroes.data) {
      const idHero = randomHero(heroes.data.limit, heroes.data.results);
      dispatch(fetchHero({ id: idHero }));
    }
  }, [heroes]);

  return (
    <Grid container sx={alignCenter} color="text.primary">
      <Grid item width="100%" sx={alignCenter}>
        {hero.code === 200
        && <Banner hero={hero.data.results[Math.floor(Math.random() * hero.data.total)]} />}
      </Grid>

      <Grid
        item
        width="100vw"
        sx={{
          padding: '0 1rem',
          marginTop: '-3rem',
        }}
      >
        {heroes.code === 200 && (
          <AliceCarousel
            responsive={responsive}
            controlsStrategy="alternate"
            mouseTracking
            disableDotsControls
          >
            {heroes?.data.results.map((_hero) => (
              <Card key={_hero.id} hero={_hero} />
            ))}
          </AliceCarousel>
        )}
      </Grid>
    </Grid>
  );
}
