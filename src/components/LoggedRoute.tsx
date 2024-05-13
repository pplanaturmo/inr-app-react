import { Navigate, useLocation } from "react-router-dom";
import useSessionUser from "../hooks/useSessionUser";

//TODO arreglar despues del testeo
const LoggedRoute = ({ children }) => {
  // const user = useSessionUser();
  const user = true;
  const location = useLocation();

  if (!user) {
    return children;
  } else {
    return <Navigate to="/inr-app" state={{ from: location }} replace />;
  }
};

export default LoggedRoute;
