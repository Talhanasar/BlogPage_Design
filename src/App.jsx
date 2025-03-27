import React from 'react';
import BlogPage from './Pages/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BlogPage />,
    },
    {
      path: "/blog/:id",
      element: <BlogDetailPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
