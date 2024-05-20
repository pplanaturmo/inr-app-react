import { Navigate, useLocation } from "react-router-dom";
import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

//TODO arreglar despues del testeo
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSessionUser();
  //   const user = true;
  const location = useLocation();

  if (user) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );
  }
};

export default ProtectedRoute;
