import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface UserButtonProps {
  children: ReactNode;
}

const UserButton: React.FC<UserButtonProps> = ({ children }) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isUser = user?.roles.includes("USER");

  if (isUser) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default UserButton;
