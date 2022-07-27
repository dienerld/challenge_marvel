import { Typography } from '@mui/material';
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

  useEffect(() => {
    getHero();
  }, []);

  useEffect(() => {
    getHero();
  }, [id]);

  return (
    <Typography variant="h6" color="primary" gutterBottom>
      {hero.name}
    </Typography>
  );
}
