import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from '../../routes';
import NotFoundPage from '../../pages/NotFoundPage';
import Header from '../Header';

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult ? (
    <>
      <Header />
      {routeResult}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
