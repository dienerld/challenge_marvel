/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

import { TResponseApiHeroes } from '../../../@types/marvel';
import { fixThumb } from '../../../utils/fixThumb';
import { fetchHeroes, fetchHero } from './fetch';

type TAction = {
  payload: TResponseApiHeroes;
};
const initialState: TResponseApiHeroes = {} as TResponseApiHeroes;

const _allHeroesSlice = createSlice({
  name: 'allHeroes',
  initialState,
  reducers: {
    clearAllHeroes: () => initialState,
    updateHeroes: (state, { payload }: TAction) => {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.fulfilled, (state, { payload }: TAction) => {
      const heroesFixed = fixThumb(payload.data.results);
      payload.data.results = heroesFixed;
      state = payload;
      return state;
    });
  },
});

const _HeroSlice = createSlice({
  name: 'hero',
  initialState: {} as TResponseApiHeroes,
  reducers: {
    clearHero: () => initialState,
    updateHero: (state, { payload }: TAction) => payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHero.fulfilled, (state, { payload }: TAction) => {
      const heroesFixed = fixThumb(payload.data.results);
      payload.data.results = heroesFixed;
      state = payload;
      return state;
    });
  },
});

export const { clearAllHeroes, updateHeroes } = _allHeroesSlice.actions;
export const allHeroesSlice = _allHeroesSlice.reducer;

export const { clearHero, updateHero } = _HeroSlice.actions;
export const heroSlice = _HeroSlice.reducer;
