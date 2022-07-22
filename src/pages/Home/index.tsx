import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from '../../components/Banner';
import { AppDispatch, reduxStates } from '../../store';
import { fetchHeroes } from '../../store/modules/marvel/fetch';

export function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const heroes = useSelector((state: reduxStates) => state.allHeroes);

  if (!heroes.data) {
    dispatch(fetchHeroes());
  }

  return (
    <Grid container sx={alignCenter} color="text.primary">
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Banner />
      </Grid>
      {
          heroes.data && heroes.data.results.length > 0 && (
            <Carousel>
              {heroes.data.results.map((item) => (
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
              ))}
            </Carousel>
          )
        }
    </Grid>
  );
}
