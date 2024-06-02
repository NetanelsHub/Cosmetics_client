import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

import Nav from "./component/layout/Nav";
import CategoryCard from "./page/CategoryCard";
import Home from "./page/Home";
import ShoppingCart from "./page/ShoppingCart";

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
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="category" element={<CategoryCard />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
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
