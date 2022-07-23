import axios from 'axios';
import { TResponseApiHeroes } from '../@types/marvel';
import { auth, BASE_URL } from './config';

export const fetchHeroById = async (id: string) => axios
  .get<TResponseApiHeroes>(
    `${BASE_URL}/characters/${id}`,
    { params: auth() },
  );
