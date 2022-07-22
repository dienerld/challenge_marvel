import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth, BASE_URL } from '../../../api/config';

const fetchHeroes = createAsyncThunk(
  'marvel/fetchHeroes',
  async (params?: Object) => (await axios.get(`${BASE_URL}/characters`, {
    params: {
      ...params,
      ...auth(),
    },
  })).data,
);

const fetchHero = createAsyncThunk(
  'marvel/fetchHero',
  async (id: number, params?: Object) => (await axios.get(`${BASE_URL}/characters/${id}`, {
    params: {
      ...params,
      ...auth(),
    },
  })).data,
);

export { fetchHeroes, fetchHero };
