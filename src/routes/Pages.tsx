import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps
} from 'react-router-dom';

import Start from 'pages/Home';
import Login from 'pages/Login';
import NoPage from 'pages/NoPage';
import NotAllowedPage from 'pages/NotAllowedPage';
import Register from 'pages/Register';

import {
  LOGIN_PATH,
  MAIN_PATH,
  NOT_ALLOWED_PATH,
  NO_PAGE_PATH,
  REGISTER_PATH
} from './paths';

type PageRoutes = PathRouteProps | LayoutRouteProps | IndexRouteProps;

const AppPages: PageRoutes[] = [
  {
    path: MAIN_PATH,
    element: <Start />,
    caseSensitive: true
  },
  {
    path: LOGIN_PATH,
    element: <Login />,
    caseSensitive: true
  },
  {
    path: REGISTER_PATH,
    element: <Register />,
    caseSensitive: true
  },
  {
    path: NOT_ALLOWED_PATH,
    element: <NotAllowedPage />,
    caseSensitive: true
  },
  {
    path: NO_PAGE_PATH,
    element: <NoPage />
  }
];

export default AppPages;
