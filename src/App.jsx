import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements
} from "react-router-dom";

import Nav from './component/layout/Nav'
import CategoryCard from './page/CategoryCard';

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route path="category" element={<CategoryCard />} />

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
