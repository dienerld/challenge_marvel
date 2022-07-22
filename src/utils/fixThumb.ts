import logo from '/assets/images/marvel_logo.png';
import { TResponseApiHero } from '../@types/marvel';

const notImageRegex = /image_not_available/;

export const fixThumb = (heroes: TResponseApiHero[]) => {
  const [path, extension] = logo.split('.');

  return heroes.map((hero: TResponseApiHero) => {
    if (notImageRegex.test(hero.thumbnail.path)) {
      hero.thumbnail.path = path;
      hero.thumbnail.extension = extension;
    }
    return hero;
  });
};
