import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import useSessionUser from "../../hooks/useSessionUser";

interface LoggedRouteProps {
  children: ReactNode;
}

const LoggedRoute: React.FC<LoggedRouteProps> = ({ children }) => {
  const user = useSessionUser();
  const location = useLocation();

  if (!user) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to="/inr-app"
        state={{ from: location }}
        replace
      />
    );
  }
};

export default LoggedRoute;
