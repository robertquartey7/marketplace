import Cookies from "js-cookie";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
console.log(location)

  if (!Cookies.get("token")) {
    return <Navigate to="/login" state={`${location.pathname}`} />;
  }
  return children;
};

export default ProtectedRoute;
