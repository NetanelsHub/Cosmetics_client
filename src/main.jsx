import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalProvider from "./utils/GlobalContext.jsx"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_GOOGLE_ID}>

  <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_CLIENT_PAYPAL_ID, intent: "capture", currency: "ILS" }}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </PayPalScriptProvider>
  </GoogleOAuthProvider>
 

);
