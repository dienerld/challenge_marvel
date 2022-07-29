import logo from '/assets/images/marvel_logo.png';
import { ContentHero, TResponseApiHero } from '../@types/marvel';

const notImageRegex = /image_not_available/;
const isGif = /gif/;

export const fixThumb = (heroes: Array<ContentHero | TResponseApiHero>) => {
  const [path, extension] = logo.split('.');

  return heroes.map((hero) => {
    if (notImageRegex.test(hero.thumbnail.path) || isGif.test(hero.thumbnail.extension)) {
      hero.thumbnail.path = path;
      hero.thumbnail.extension = extension;
    }
    return hero;
  });
};
