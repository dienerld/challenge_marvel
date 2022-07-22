/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TResponseApiHeroes } from '../../../@types/marvel';
import { auth, BASE_URL } from '../../../api/config';

type TAction = { payload: TResponseApiHeroes}
const initialState: TResponseApiHeroes = {} as TResponseApiHeroes;

const fetchHeroes = createAsyncThunk(
  'marvel/fetchHeroes',
  async (endpoint, params) => (await axios.get(BASE_URL + endpoint, {
    params: {
      ...params,
      ...auth(),
    },
  })).data,
);

const fetchHero = createAsyncThunk(
  'marvel/fetchHero',
  async (id: number, params: Object) => (await axios.get(`${BASE_URL}/characters/${id}`, {
    params: {
      ...params,
      ...auth(),
    },
  })).data,
);

const _allHeroesSlice = createSlice({
  name: 'allHeroes',
  initialState,
  reducers: {
    clearAllHeroes: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.fulfilled, (state, { payload }: TAction) => {
      state = payload;
    });
  },
});

const _HeroSlice = createSlice({
  name: 'hero',
  initialState: {} as TResponseApiHeroes,
  reducers: {
    clearHero: () => initialState,
  },

});

export const { clearAllHeroes } = _allHeroesSlice.actions;
export const allHeroesSlice = _allHeroesSlice.reducer;

export const { clearHero } = _HeroSlice.actions;
export const heroSlice = _HeroSlice.reducer;

export { fetchHeroes, fetchHero };
