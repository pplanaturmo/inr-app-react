import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface ManagerButtonProps {
  children: ReactNode;
}

const ManagerButton: React.FC<ManagerButtonProps> = ({ children }) => {
  const user = useSessionUser();

  const isManager = user?.role === "MANAGER";

  if (isManager) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ManagerButton;
