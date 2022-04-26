import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser.isAdmin) {
  }
  return children;
};

export default RequireAuth;
