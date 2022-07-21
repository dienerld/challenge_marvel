import { combineReducers } from 'redux';
import { allHeroesSlice, heroSlice } from './marvel/slices';

export const rootReducers = combineReducers({
  allHeroes: allHeroesSlice,
  hero: heroSlice,
});

export type StatesRedux = ReturnType<typeof rootReducers>;
