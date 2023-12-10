import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (user?.name) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
