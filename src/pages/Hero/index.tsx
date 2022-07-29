import {
  Box,
  Button,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentHero, TResponseApiHero } from "../../@types/marvel";
import { fetchContentById, fetchHeroById } from "../../api";
import { fixThumb } from "../../utils/fixThumb";

export function Hero() {
  const { id } = useParams();
  const [hero, setHero] = useState<TResponseApiHero>({} as TResponseApiHero);
  const [comics, setComics] = useState<ContentHero[]>([]);
  const [stories, setStories] = useState<ContentHero[]>([]);
  const [moreComics, setMoreComics] = useState(false);
  const [moreStories, setMoreStories] = useState(false);

  const getHero = async () => {
    const { data: dataAxios } = await fetchHeroById(id!);
    const [_hero] = fixThumb(dataAxios.data.results) as TResponseApiHero[];
    setHero(_hero);
  };

  const theme = useTheme();

  useEffect(() => {
    getHero();
  }, [id]);

  useEffect(() => {
    const getContent = async () => {
      const responseComics = await fetchContentById(hero.id, "comics");
      const responseStories = await fetchContentById(hero.id, "series");
      setComics(fixThumb(responseComics.data.results) as ContentHero[]);
      setStories(fixThumb(responseStories.data.results) as ContentHero[]);
    };
    if (hero.id) {
      getContent();
    }
  }, [hero]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        overflowX: "hidden",
      }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={12}
        sm={5}
        sx={{ [theme.breakpoints.down("sm")]: { marginTop: "3rem" } }}
      >
        <CardMedia
          sx={{ maxWidth: "300px", maxHeight: "400px" }}
          component="img"
          image={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
          alt={hero?.name}
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={7}
        marginTop="1.5rem"
        paddingRight="3rem"
        flexDirection="column"
        sx={{
          [theme.breakpoints.down("sm")]: {
            paddingX: "5.5rem !important",
            marginLeft: "0",
          },
        }}
      >
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Name: </strong>
          {hero.name}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Description: </strong>
          {hero?.description ? hero.description : "Not finded"}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Comics: </strong>
          {hero?.comics?.available}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Series: </strong>
          {hero?.series?.available}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Events: </strong>
          {hero?.events?.available}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Stories: </strong>
          {hero?.stories?.available}
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
          {hero?.urls?.map((url) => (
            <a href={url.url} target="_blank" rel="noreferrer" key={url.type}>
              <Button variant="contained" color="secondary">
                {url.type}
              </Button>
            </a>
          ))}
        </Box>
      </Grid>

      <Grid
        item
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        {comics.length > 0 && (
          <>
            <Box display="flex" alignItems="center">
              <Typography variant="h3" color="primary">
                Comics
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: "0.5rem",
                  marginLeft: "1rem",
                }}
                onClick={() => setMoreComics(!moreComics)}
              >
                {moreComics ? "Less" : "More"}
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              {comics.map((comic, index) => {
                if (index > 5 && !moreComics) return null;
                return (
                  <Box maxWidth="10rem" key={comic.title}>
                    <CardMedia
                      component="img"
                      image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      title={hero.name}
                      sx={{ maxWidth: "100px" }}
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

        {stories.length > 0 && (
          <>
            <Box display="flex" alignItems="center">
              <Typography variant="h3" color="primary">
                Stories
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: "0.5rem",
                  marginLeft: "1rem",
                }}
                onClick={() => setMoreStories(!moreStories)}
              >
                {moreStories ? "Less" : "More"}
              </Button>
            </Box>

            <Grid
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              {stories?.map((story, index) => {
                if (index > 5 && !moreStories) return null;
                return (
                  <Box maxWidth="10rem" width="100%" key={story.title}>
                    <CardMedia
                      component="img"
                      image={`${story.thumbnail.path}.${story.thumbnail.extension}`}
                      title={hero.name}
                      sx={{ maxWidth: "100px" }}
                    />
                    <Typography variant="h6" color="primary" gutterBottom>
                      {story.title}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}
