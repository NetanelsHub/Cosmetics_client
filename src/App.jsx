import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements
} from "react-router-dom";

import Nav from './component/layout/Nav'
// import BodyCare from './page/BodyCare';
// import HairLine from './page/HairLine';
// import Kits from './page/Kits';
// import GoldPerformance from './page/GoldPerformance';
// import Makeup from './page/Makeup';
// import NailKit from './page/NailKit';
// import Premium from './page/Premium';
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
        {/* <Route path="Body Care" element={<BodyCare />} />
        <Route path="Hair Line" element={<HairLine />} />
        <Route path="Kits" element={<Kits />} />
        <Route path="Gold Performance" element={<GoldPerformance />} />
        <Route path="Makeup" element={<Makeup />} />
        <Route path="Nail Kit" element={<NailKit />} />
        <Route path="Premium" element={<Premium />} /> */}
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
