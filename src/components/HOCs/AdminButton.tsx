import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface AdminButtonProps {
  children: ReactNode;
}

const AdminButton: React.FC<AdminButtonProps> = ({ children }) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isAdmin = user?.roles.includes("ADMIN");

  if (isAdmin) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default AdminButton;

//TODO poner en el back esto para devolver solo lista de nombres de rol
.roles(user.getRoles().stream()
.map(Role::getRole)
.collect(Collectors.toList()))
.build();