import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Pages from './Pages';

const AppRouter: FC = () => {
  return (
    <Routes>
      {Pages.map((page, index) => (
        <Route {...page} key={`page-${index}`} />
      ))}
    </Routes>
  );
};

export default AppRouter;
