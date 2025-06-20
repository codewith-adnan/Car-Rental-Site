import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayouts;
