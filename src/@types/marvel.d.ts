<<<<<<< HEAD
type TProductionItems = {
  collectionURI: string;
  name: string;
  type?: string;
};

type THeroProduction = {
  available: number;
  collectionURI: string;
  items: TProductionItems[];
  returned: number;
};
=======
export type ContentHero ={
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}
>>>>>>> 6d17b9b765cc7175bfb9de3497aba4c1b11e3cb0

export type TResponseApiHero = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: { available: number;}
  series: { available: number;}
  stories: { available: number;}
  events: { available: number;}
  urls: {
    type: string;
    url: string;
  }[];
};

export type TResponseApiHeroes = {
  name: ReactNode;
  description: any;
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: TResponseApiHero[];
  };
};
