/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

import { TResponseApiHero, TResponseApiHeroes } from '../../../@types/marvel';
import { fixThumb } from '../../../utils/fixThumb';
import { fetchHeroes, fetchHero } from './fetch';

const _allHeroesSlice = createSlice({
  name: 'allHeroes',
  initialState: {
    heroes: {} as TResponseApiHeroes,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHeroes.fulfilled, (state, { payload }) => {
      const heroesFixed = fixThumb(payload.data.results);
      payload.data.results = heroesFixed as TResponseApiHero[];
      state.loading = false;
      state.heroes = payload;
      return state;
    });

    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
    });
  },
});

const _HeroSlice = createSlice({
  name: 'hero',
  initialState: {
    hero: {} as TResponseApiHeroes,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHero.fulfilled, (state, { payload }) => {
      const heroesFixed = fixThumb(payload.data.results);
      payload.data.results = heroesFixed as TResponseApiHero[];
      state.loading = false;
      state.hero = payload;

      return state;
    });

    builder.addCase(fetchHero.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
    });
  },
});

export const allHeroesSlice = _allHeroesSlice.reducer;
export const heroSlice = _HeroSlice.reducer;
