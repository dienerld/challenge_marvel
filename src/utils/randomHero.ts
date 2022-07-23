import { TResponseApiHero } from '../@types/marvel';

export const randomHero = (total: number, heroes: TResponseApiHero[]): number => {
  const random = Math.floor(Math.random() * total);
  return heroes[random].id;
};
