/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { TResponseApiHeroes } from '../../../@types/marvel';

const initialState: TResponseApiHeroes = {} as TResponseApiHeroes;

const _allHeroesSlice = createSlice({
  name: 'allHeroes',
  initialState,
  reducers: {
    updateAllHeroes: (_state, action) => action.payload,
    clearAllHeroes: () => initialState,
  },
});

const _HeroSlice = createSlice({
  name: 'hero',
  initialState: {} as TResponseApiHeroes,
  reducers: {
    updateHero: (_, action) => action.payload,
    clearHero: () => initialState,
  },
});

export const { clearAllHeroes, updateAllHeroes } = _allHeroesSlice.actions;
export const allHeroesSlice = _allHeroesSlice.reducer;

export const { clearHero, updateHero } = _HeroSlice.actions;
export const heroSlice = _HeroSlice.reducer;
