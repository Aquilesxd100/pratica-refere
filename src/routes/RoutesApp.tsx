import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeguroDeCarro from '../pages/SeguroCarro';
import ErrorPage from '../pages/ErrorPage';
import SeguroDePessoa from '../pages/SeguroPessoa';
import SeguroDeCasa from '../pages/SeguroCasa';
import Contratos from '../pages/Contratos';

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
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
