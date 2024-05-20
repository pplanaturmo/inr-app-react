import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface ManagerButtonProps {
  children: ReactNode;
}

const ManagerButton: React.FC<ManagerButtonProps> = ({ children }) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isManager = user?.roles.includes("MANAGER");

  if (isManager) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ManagerButton;
