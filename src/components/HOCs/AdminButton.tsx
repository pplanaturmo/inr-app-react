import { ReactNode } from "react";
import useSessionUser from "../../hooks/useSessionUser";

interface AdminButtonProps {
  children: ReactNode;
}

const AdminButton: React.FC<AdminButtonProps> = ({ children }) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isAdmin = user?.role === "ADMIN";

  if (isAdmin) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default AdminButton;
