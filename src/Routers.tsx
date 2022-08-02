import { Route, Routes } from 'react-router-dom';
import { All } from './pages/All';
import { Hero } from './pages/Hero';
import { Home } from './pages/Home';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="hero/:id" element={<Hero />} />
      <Route path="all" element={<All />} />
    </Routes>
  );
}
