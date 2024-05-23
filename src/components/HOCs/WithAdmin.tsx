import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface withAdminProps {
  children: ReactNode;
}

const WithAdmin: React.FC<withAdminProps> = ({ children }) => {
  const { user } = useAppStore();
  const isAdmin = user?.role === "ADMIN";

  if (isAdmin) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default WithAdmin;
