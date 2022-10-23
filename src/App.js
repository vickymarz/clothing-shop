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
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['red', 'green', 'blue'],
  },
  {
    id: 2,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['S', 'M'],
    colors: ['purple', 'grey', 'purple'],
  },
  {
    id: 3,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'pink', 'black'],
  },
  {
    id: 4,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'L'],
    colors: ['purple', 'green', 'indigo'],
  },
  {
    id: 5,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'M', 'L'],
    colors: ['blue', 'orange', 'yellow'],
  },
  {
    id: 6,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['L'],
    colors: ['red', 'violet', 'black'],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header cloth={cloth} />,
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
