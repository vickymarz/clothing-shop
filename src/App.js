import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './app/components/Error';
import Header from './app/components/Header';
import Kids from './Pages/Kids';
import Men from './Pages/Men';
import Women from './Pages/Women';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        path: 'women',
        element: <Women />
      },
      {
        path: 'men',
        element: <Men />,
      },
      {
        path: 'kids',
        element: <Kids />,
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
