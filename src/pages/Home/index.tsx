/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
// eslint-disable-next-line import/no-absolute-path
import logo from '/assets/images/marvel_logo.png';
import { TResponseApiHero } from '../../@types/marvel';
import { getAll } from '../../api';
import { Banner } from '../../components/Banner';

export function Home() {
  const notImage = /image_not_available/;
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [data, setData] = useState<TResponseApiHero[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAll();
      response.data.data.results.forEach((item) => {
        if (notImage.test(item.thumbnail.path)) {
          item.thumbnail.path = logo.split('.')[0];
          item.thumbnail.extension = 'png';
        }
        setData(response.data.data.results);
      });
    }
    fetchData();
  }, []);

  return (
    <Grid container sx={alignCenter} color="text.primary">
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Banner />
      </Grid>
    </Grid>
  );
}
