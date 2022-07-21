/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TResponseApiHero } from '../../@types/marvel';
import { getAll } from '../../api';
import { StyledPaper } from '../../components/StyledPaper';

export function Home() {
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
      setData(response.data.data.results);
    }
    fetchData();
  }, []);

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <StyledPaper sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Template React + Material UI
          </Typography>

          {
            data.map((item) => (
              <Typography key={item.id} variant="h5" alignSelf="center">
                {item.name}
              </Typography>
            ))

          }

        </StyledPaper>
      </Grid>
    </Grid>
  );
}
