import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: React.FC<WithAuthProps> = ({ children }) => {
  const { user } = useAppStore();
  const location = useLocation();
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default WithAuth;
