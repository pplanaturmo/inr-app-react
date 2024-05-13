import { Navigate, useLocation } from "react-router-dom";
import useSessionUser from "../hooks/useSessionUser";

// Higher-order component to protect routes
const ProtectedRoute = ({ children }) => {
  const user = useSessionUser();
  const location = useLocation();

  // If the user exists, render the children (protected route)
  if (user) {
    return children;
  }

  // If the user does not exist, redirect to the login page
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
