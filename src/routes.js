import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Pages/Login";
import Home from "./Pages/Home";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="login" element={<Login />} />

      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
