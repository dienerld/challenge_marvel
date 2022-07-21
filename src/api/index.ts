import axios, { AxiosResponse } from 'axios';
import { TResponseApiHeroes } from '../@types/marvel';
import { auth } from './config';

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';

const getAll = async ():Promise<AxiosResponse<TResponseApiHeroes>> => axios.get(BASE_URL, {
  params: {
    ...auth(),
    limit: 50,
  },
});

export { getAll };
