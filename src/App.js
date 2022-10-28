import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './app/components/Error';
import Header from './app/components/Header';
import Kids from './Pages/Kids';
import Men from './Pages/Men';
import Women from './Pages/Women';
import clothImg from './assets/images/product.png';
import DetailsPage from './Pages/DetailsPage';
import CartPage from './Pages/CartPage';

const cloth = [
  {
    id: 1,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#D3D2D5', '#2B2B2B', '#0F6450'],
  },
  {
    id: 2,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['S', 'M'],
    colors: ['#2B2B2B', '#15A4C3', '#EA8120'],
  },
  {
    id: 3,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['S', 'M', 'L'],
    colors: ['#ff0000', '#EA8120', '#2B2B2B'],
  },
  {
    id: 4,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'L'],
    colors: ['#EA8120', '#00ff00', '#D3D2D5'],
  },
  {
    id: 5,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['XS', 'M', 'L'],
    colors: ['#0000ff', '#0F6450', '#15A4C3'],
  },
  {
    id: 6,
    brand: 'Apollo Running Shot',
    amount: '$50.00',
    product: clothImg,
    sizes: ['L'],
    colors: ['#ff0000', '#EA8120', '#2B2B2B'],
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
      {
        path: '/details/:id',
        element: <DetailsPage cloth={cloth} />,
      },
      {
        path: 'cart',
        element: <CartPage cloth={cloth} />,
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
