/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { Login } from "./Pages/Login";
import { MyRoutes } from "./routes";

import "./Styles/App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Header />

      <MyRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
