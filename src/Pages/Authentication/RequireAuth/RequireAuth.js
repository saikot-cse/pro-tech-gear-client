import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../Component/Loading/Loading";
import auth from "../../../firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading/>;
  }
  if(error){
    
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return <h1>please verify</h1>
  }
  return children;
};

export default RequireAuth;