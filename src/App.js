import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './app/components/Error';
import Header from './app/components/Header';
import Kids from './Pages/Kids';
import Men from './Pages/Men';
import Women from './Pages/Women';
import clothImg from './assets/images/product.png';

const cloth = [
  {
    id: 1,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,
  },
  {
    id: 2,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,
  },
  {
    id: 3,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,
  },
  {
    id: 4,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,
  },
  {
    id: 5,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,
  },
  {
    id: 6,
    brand: 'Apollo running shot',
    amount: '$50.00',
    product: clothImg,

  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Women cloth={cloth} />,

      },
      {
        path: 'men',
        element: <Men cloth={cloth} />,
      },
      {
        path: 'kids',
        element: <Kids cloth={cloth} />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
