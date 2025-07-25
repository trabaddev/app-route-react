import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h2>Section Authentification</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
