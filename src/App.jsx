import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements
} from "react-router-dom";

import Nav from './component/layout/Nav'
import BodyCare from './page/BodyCare';
import HairLine from './page/HairLine';

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
        <Route path="Body Care" element={<BodyCare />} />
        <Route path="Hair Line" element={<HairLine />} />
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
