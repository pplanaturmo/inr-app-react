import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface WithManagerProps {
  children: ReactNode;
}

const WithManager: React.FC<WithManagerProps> = ({ children }) => {
  const { user } = useAppStore();
  const isManager = user?.role === "MANAGER";

  if (isManager) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default WithManager;
