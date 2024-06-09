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
import Footer from "./component/layout/Footer";

// pages
import CategoryCard from "./page/CategoryCard";
import Home from "./page/Home";
import ShoppingCart from "./page/ShoppingCart"; //should be in lay out 
import Purchase from "./page/Purchase";
import Payment from "./page/Payment";

//footer pages
import AboutUs from "./page/footer_pages/AboutUs"
import ContactUs from "./page/footer_pages/ContactUs"
import PrivacyPolicy from "./page/footer_pages/PrivacyPolicy"
import TermsAndConditions from  "./page/footer_pages/TermsAndConditions"
import Blog from "./page/footer_pages/Blog";

function Root() {
  return (
    <>
      <Nav />
      <div className="relative">
        <Outlet />
        <ProfileSideBar />
        <ShoppingCart/>
        <Form_Sign_Up_In />
      </div>

      <Footer />
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
