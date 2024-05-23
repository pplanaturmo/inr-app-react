import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface WithSessionProps {
  children: ReactNode;
}

const WithSession: React.FC<WithSessionProps> = ({ children }) => {
  const { user } = useAppStore();
  const location = useLocation();

  if (!user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/inr-app" state={{ from: location }} replace />;
  }
};

export default WithSession;
