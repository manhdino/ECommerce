import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState } from "react";

const PrivateRoute = ({ children, isAdmin = false }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  console.log("user private route", user, user?.isAdmin);
  console.log("isAdmin", isAdmin);
  if (isAdmin && user?.isAdmin && user.acccess_token) {
    return children;
  }

  if (user?.access_token) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
