import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  return <div>NotFound</div>;
};

export default NotFound;
