import { Box, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentHero, TResponseApiHero } from '../../@types/marvel';
import { fetchContentById, fetchHeroById } from '../../api';
import { fixThumb } from '../../utils/fixThumb';

export function Hero() {
  const { id } = useParams();
  const [hero, setHero] = useState<TResponseApiHero>({} as TResponseApiHero);
  const [comics, setComics] = useState<ContentHero[]>([]);
  const [stories, setStories] = useState<ContentHero[]>([]);
  const [moreComics, setMoreComics] = useState(true);
  const [moreStories, setMoreStories] = useState(false);

  const getHero = async () => {
    const { data: dataAxios } = await fetchHeroById(id!);
    const [_hero] = dataAxios.data.results;
    setHero(_hero);
  };

  useEffect(() => {
    getHero();
  }, [id]);

  useEffect(() => {
    const getContent = async () => {
      const responseComics = await fetchContentById(hero.id, 'comics');
      const responseStories = await fetchContentById(hero.id, 'series');
      setComics(fixThumb(responseComics.data.results));
      setStories(fixThumb(responseStories.data.results));
    };
    if (hero.id) {
      getContent();
    }
  }, [hero]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      margin: '1rem',
    }}
    >
      { comics.length > 0 && (
      <>
        <Typography variant="h3" color="primary" gutterBottom>
          Comics
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          { comics.map((comic, index) => {
            if (index > 5 && !moreComics) {
              return null;
            }
            return (
              <Box maxWidth="10rem" key={comic.title}>

                <CardMedia
                  component="img"
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  title={hero.name}
                  sx={{ maxWidth: '100px' }}
                />
                <Typography variant="h6" color="primary" gutterBottom>
                  {comic.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </>
      )}

      { stories.length > 0 && (
      <>
        <Typography variant="h3" color="primary" gutterBottom>
          Stories
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          {
                stories?.map((story, index) => {
                  if (index > 5 && !moreStories) {
                    return null;
                  }
                  return (
                    <Box maxWidth="10rem" width="100%" key={story.title}>
                      <CardMedia
                        component="img"
                        image={`${story.thumbnail.path}.${story.thumbnail.extension}`}
                        title={hero.name}
                        sx={{ maxWidth: '100px' }}
                      />
                      <Typography variant="h6" color="primary" gutterBottom>
                        {story.title}
                      </Typography>
                    </Box>
                  );
                })
              }
        </Box>
      </>
      )}
    </Box>
  );
}
