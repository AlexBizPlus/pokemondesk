import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import PokedexPage from '../../pages/PokedexPage';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/pokedex" exact component={PokedexPage} />
    </BrowserRouter>
  );
};

export default App;
