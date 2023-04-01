import React from "react";
import { Routes, Route } from "react-router-dom";
import { MasterPage } from "../layouts/MasterPage.js";
import Users from "../pages/users/users.js";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MasterPage component={<p>Welcome to this site's homepage :D!</p>} />
        }
      />
      <Route path="/about" />
      <Route path="/products" />
      <Route path="/users" element={<Users/>} />
      {/* <Route path="/auth" /> */}
    </Routes>
  );
};

export default Routers;
