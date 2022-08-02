import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth, BASE_URL } from '../../../api/config';

export type TParamsMarvel = {
  name?: string;
  nameStartsWith?: string;
  comics?: number;
  series?: number;
  stories?: number;
  events?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
};

type TRequestHero = {
  id: number;
  params?: TParamsMarvel
}

const fetchHeroes = createAsyncThunk(
  'marvel/fetchHeroes',
  async (params?: TParamsMarvel) => (
    await axios.get(`${BASE_URL}/characters`, {
      params: {
        ...params,
        ...auth(),
      },
    })
  ).data,
);

const fetchHero = createAsyncThunk(
  'marvel/fetchHero',
  async ({ id, params }: TRequestHero) => (
    await axios.get(`${BASE_URL}/characters/${id}`, {
      params: {
        ...params,
        ...auth(),
      },
    })
  ).data,
);

const fetchHeroesStartsWith = createAsyncThunk(
  'marvel/fetchHeroesStartsWith',
  async (params?: TParamsMarvel) => (
    await axios.get(`${BASE_URL}/characters`, {
      params: {
        ...params,
        ...auth(),
      },
    })
  ).data,
);

export { fetchHeroes, fetchHeroesStartsWith, fetchHero };
