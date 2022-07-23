import { Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero';
import { Home } from './pages/Home';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hero/:id" element={<Hero />} />
    </Routes>
  );
}
