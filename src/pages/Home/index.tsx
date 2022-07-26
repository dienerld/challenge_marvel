import { Grid } from '@mui/material';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { AppDispatch, reduxStates } from '../../store';
import { fetchHero, fetchHeroes, TParamsMarvel } from '../../store/modules/marvel/fetch';
import { randomHero } from '../../utils/randomHero';

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

  const heroes = useSelector((state: reduxStates) => state.allHeroes);
  const hero = useSelector((state: reduxStates) => state.hero);
  const params: TParamsMarvel = {
    limit,
    offset: Math.floor(Math.random() * (MAX_HERO - limit)),
  };

  if (!heroes.data) {
    dispatch(fetchHeroes(params));
  }

  const responsive = {
    0: { items: 2.2 },
    426: { items: 3.2 },
    600: { items: 4.2 },
    900: { items: 4.8 },
    1200: { items: 5.7 },
  };

  useEffect(() => {
    if (heroes.data) {
      const idHero = randomHero(heroes.data.limit, heroes.data.results);
      dispatch(fetchHero(idHero));
    }
  }, [heroes]);

  return (
    <Grid container sx={alignCenter} color="text.primary">
      <Grid item width="100%" sx={alignCenter}>
        {hero.code === 200 && <Banner />}
      </Grid>

      <Grid
        item
        width="100vw"
        sx={{
          padding: '0 1rem',
          marginTop: '-3rem',
        }}
      >
        { hero.code === 200 && (
        <AliceCarousel
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls
          mouseTracking
          infinite
        >
          { heroes?.data.results.map((_hero) => (
            <Card
              key={_hero.id}
              hero={_hero}
            />
          ))}
        </AliceCarousel>
        )}
      </Grid>
    </Grid>
  );
}
