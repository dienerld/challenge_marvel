import { Grid, Typography } from '@mui/material';

export function Banner() {
  return (
    <Grid container>
      <Grid item width="100%" paddingTop="2rem" alignItems="center">
        <Typography variant="body1">Destaque</Typography>
      </Grid>
    </Grid>
  );
}
