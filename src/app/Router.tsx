import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { ErrorPage, MainPage } from '~/pages';

import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate replace to={'/'} />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
