import React, { Suspense,lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

//layout
import Nav from "./component/layout/Nav"
import Form_Sign_Up_In from "./component/form/Form_Sign_Up_In";
import Footer from "./component/layout/Footer";
import ShoppingCart from "./page/ShoppingCart";
import ForgotPassword from "./page/ForgotPassword";
import ResetPassword from "./page/ResetPassword";

// pages
const CategoryCard = lazy(() => import("./page/CategoryCard"));
const Home = lazy(() => import("./page/Home"));
const Purchase = lazy(() => import("./page/Purchase"));
const Payment = lazy(() => import("./page/Payment"));
const TankYou = lazy(() => import("./page/TankYou"));

//footer pages
const AboutUs = lazy(() => import("./page/footer_pages/AboutUs"));
const ContactUs = lazy(() => import("./page/footer_pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./page/footer_pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./page/footer_pages/TermsAndConditions"));
const Blog = lazy(() => import("./page/footer_pages/Blog"));

function Root() {
  return (
    <div>
      <Nav />
      <div className="relative">
        <Suspense fallback={<div>loading ...</div>}>
          <Outlet />
          <ShoppingCart />
          <Form_Sign_Up_In />
        </Suspense>
      </div>
        <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="category" element={<CategoryCard />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="purchase/payment" element={<Payment />} />
        {/* footer Route */}
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="termsAndConditions" element={<TermsAndConditions />} />
        <Route path="blog" element={<Blog />} />
        <Route path="purchase/payment/tankYou" element={<TankYou />} />

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
