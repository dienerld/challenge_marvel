/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import {
  KeyboardEvent, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TResponseApiHero } from '../../@types/marvel';
import { AppDispatch } from '../../store';
import { fetchHeroesStartsWith } from '../../store/modules/marvel/fetch';

export function SearchBar() {
  const useAppDispatch = useDispatch<AppDispatch>();
  const [nameSearched, setNameSearched] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [heroes, setHeroes] = useState<TResponseApiHero[]>([]);
  const [hero, setHero] = useState<TResponseApiHero>();
  const navigate = useNavigate();

  const fetchHeroes = (name: string) => {
    useAppDispatch(fetchHeroesStartsWith({ nameStartsWith: name, limit: 100 }))
      .then((response) => setHeroes(response.payload.data.results))
      .catch((_) => _);
  };

  const searchHero = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && hero?.id) {
      setInputValue('');
      setNameSearched('');
      navigate(`/hero/${hero?.id}`);
    }
  };

  useEffect(() => {
    if (inputValue) fetchHeroes(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (heroes.length) {
      setHero(heroes.find((_hero) => _hero.name === nameSearched));
    }
  }, [nameSearched]);

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => !!option.match(value)}
      value={nameSearched}
      onChange={(event, newValue) => setNameSearched(newValue!)}
      inputValue={inputValue}
      onKeyDown={searchHero}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      id="controllable-states-demo"
      options={heroes.map(({ name }) => name)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
