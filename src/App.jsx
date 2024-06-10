import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

//layout
import Nav from "./component/layout/Nav"
import ProfileSideBar from "./component/layout/ProfileSideBar";
import Form_Sign_Up_In from "./component/form/Form_Sign_Up_In";
import Footer from "./component/layout/Footer";
import ShoppingCart from "./page/ShoppingCart";

// pages
const CategoryCard = React.lazy(() => import("./page/CategoryCard"));
const Home = React.lazy(() => import("./page/Home"));
const Purchase = React.lazy(() => import("./page/Purchase"));
const Payment = React.lazy(() => import("./page/Payment"));

//footer pages
const AboutUs = React.lazy(() => import("./page/footer_pages/AboutUs"));
const ContactUs = React.lazy(() => import("./page/footer_pages/ContactUs"));
const PrivacyPolicy = React.lazy(() => import("./page/footer_pages/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./page/footer_pages/TermsAndConditions"));
const Blog = React.lazy(() => import("./page/footer_pages/Blog"));

function Root() {
  return (
    <>
      <Nav />
      <div className="relative">
        <Suspense fallback={<div>loading ...</div>}>
          <Outlet />
          <ProfileSideBar />
          <ShoppingCart />
          <Form_Sign_Up_In />
        </Suspense>
      </div>
      <Suspense fallback={<div>loading ...</div>}>
        <Footer />
      </Suspense>
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
        <Route path="purchase" element={<Purchase />} />
        <Route path="purchase/payment" element={<Payment />} />
        {/* footer Route */}
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="termsAndConditions" element={<TermsAndConditions />} />
        <Route path="blog" element={<Blog />} />

        termsAndConditions


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
