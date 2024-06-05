import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

//layout
import Nav from "./component/layout/Nav";
import ProfileSideBar from "./component/layout/ProfileSideBar";
import Form_Sign_Up_In from "./component/form/Form_Sign_Up_In";

// pages
import CategoryCard from "./page/CategoryCard";
import Home from "./page/Home";
import ShoppingCart from "./page/ShoppingCart";
import Payment from "./page/Payment";




function Root() {
  return (
    <>
      <Nav />
      <div className="relative">
        <Outlet />
        <ProfileSideBar />
        <Form_Sign_Up_In />
      </div>

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
        <Route path="payment" element={<Payment />} />
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
