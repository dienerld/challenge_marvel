import axios from 'axios';
import { auth } from './config';

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';

const getAll = async () => axios.get(BASE_URL, {
  params: { ...auth() },
});
export { getAll };
