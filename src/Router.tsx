import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Home from '~/pages/Home';
import Content, { loader as contentLoader } from '~/pages/Content';
import NotFound from '~/pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'home'} />,
  },
  {
    path: 'home',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'content',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: ':id',
        element: <Content />,
        loader: contentLoader,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
