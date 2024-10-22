import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = useSelector((state) => state.client.user);

  return user ? Component : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
