import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeguroDeCarro from '../pages/SeguroCarro';
import ErrorPage from '../pages/ErrorPage';
import SeguroDePessoa from '../pages/SeguroPessoa';
import SeguroDeCasa from '../pages/SeguroCasa';
import Contratos from '../pages/Contratos';
import User from '../pages/User';
import User2 from '../pages/User2';
import UserProvider from '../contexts/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SeguroDeCarro />,
    errorElement: <ErrorPage />
  },
  {
    path: '/seguroDePessoa',
    element: <SeguroDePessoa />
  },
  {
    path: '/seguroDeCasa',
    element: <SeguroDeCasa />
  },
  {
    path: '/contratos',
    element: <Contratos />
  },
  {
    path: '/user',
    element: <UserProvider><User /></UserProvider>
  },
  {
    path: '/user2',
    element: <User2 />
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
