import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/Store";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import LoginAuth from "./components/LoginAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
   <LoginAuth>
      <BrowserRouter>
         <Navbar />
         <App />
         <Footer />
      </BrowserRouter>
   </LoginAuth>
      
   </Provider>
);
