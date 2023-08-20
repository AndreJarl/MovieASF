import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Popular from './routes/Popular';
import TVShows from './routes/TVShows';
import MovieInfoPage from './routes/MovieInfoPage';
import TVInfoPage from './routes/TVInfoPage';
import Search from './routes/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/tvshows" element={<TVShows />} />
      <Route path="/movieinfo/:id" element={<MovieInfoPage />} />
      <Route path="/tvshowinfo/:id" element={<TVInfoPage />} />
      <Route path="/search/:id" element={<Search />} />
    </Routes>
  );
}

export default App;
