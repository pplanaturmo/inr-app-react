import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

//TODO arreglar despues del testeo
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppStore();
  const location = useLocation();
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
