import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  CircularProgress, Grid, Pagination, PaginationItem, useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TResponseApiHero } from '../../@types/marvel';
import { Card } from '../../components/Card';
import { AppDispatch, reduxStates } from '../../store';
import { fetchHeroes } from '../../store/modules/marvel/fetch';

export function All() {
  const theme = useTheme();
  const OFFSET = 20;
  const [totalHeroes, setTotalHeroes] = useState(0);
  const { heroes, loading } = useSelector((state: reduxStates) => state.allHeroes);
  const dispatch = useDispatch<AppDispatch>();
  const [allHeroes, setAllHeroes] = useState<TResponseApiHero[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  useEffect(() => {
    if (heroes.code === 200) {
      setAllHeroes(heroes.data.results);
      setTotalHeroes(heroes.data.total);
    }
  }, [heroes]);

  useEffect(() => {
    dispatch(fetchHeroes({ offset: (page - 1) * OFFSET }));
  }, [page]);
  return (
    <Grid
      container
      paddingY={2}
      sx={{
        overflowX: 'hidden',
        justifyContent: 'center',
      }}
    >
      { loading ? <CircularProgress /> : (
        <>
          <Grid item xs={12} display="flex" justifyContent="center" flexWrap="wrap" gap={2}>

            { !loading
        && allHeroes?.map((hero) => (
          <Card
            hero={hero}
            key={hero.id}
            sx={{
              boxShadow: `0px 0px 5px rgba(${theme.palette.mode === 'dark' ? '255,255,255'
                : '0,0,0'},0.2)`,
            }}
          />
        ))}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" padding={3}>
            <Pagination
              count={Math.round((totalHeroes / OFFSET) + 1)}
              page={page}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowBack, next: ArrowForward }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              )}
              onChange={(event, value) => setPage(value)}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
