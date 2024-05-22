import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface LoggedRouteProps {
  children: ReactNode;
}

const LoggedRoute: React.FC<LoggedRouteProps> = ({ children }) => {
  const { user } = useAppStore();
  const location = useLocation();
  const isLogged = user ?? false;

  if (isLogged) {
    return <>{children}</>;
  } else {
    return <Navigate to="/inr-app" state={{ from: location }} replace />;
  }
};

export default LoggedRoute;
