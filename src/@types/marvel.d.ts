export type ContentHero ={
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}

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
  urls: {
    type: string;
    url: string;
  }[];
}

export type TResponseApiHeroes = {
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
  }

}
