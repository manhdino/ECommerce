/* eslint-disable react/prop-types */
// import  { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";

import { useState } from "react";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const user = useState(false);
  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  // if (user) {
  //   return children;
  // }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
