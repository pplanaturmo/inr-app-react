import { Navigate, useLocation } from "react-router-dom";
import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface LoggedRouteProps {
  children: ReactNode;
}

//TODO arreglar despues del testeo
const LoggedRoute: React.FC<LoggedRouteProps> = ({ children }) => {
  const user = useSessionUser();
  const location = useLocation();

  if (!user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/inr-app" state={{ from: location }} replace />;
  }
};

export default LoggedRoute;
