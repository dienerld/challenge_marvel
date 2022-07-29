import axios from 'axios';
import { TResponseApiHeroes } from '../@types/marvel';
import { TParamsMarvel } from '../store/modules/marvel/fetch';
import { auth, BASE_URL } from './config';

export const fetchHeroById = async (id: string) => axios
  .get<TResponseApiHeroes>(
    `${BASE_URL}/characters/${id}`,
    { params: auth() },
  );

export const fetchContentById = async (
  id: number,
  content: 'comics' | 'series' | 'stories' | 'events',
  params?: TParamsMarvel,
) => (await axios.get(`${BASE_URL}/characters/${id}/${content}`, {
  params: {
    ...params,
    ...auth(),
  },
})).data;
