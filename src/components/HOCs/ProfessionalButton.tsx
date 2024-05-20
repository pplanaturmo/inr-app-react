import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface ProfessionalButtonProps {
  children: ReactNode;
}

const ProfessionalButton: React.FC<ProfessionalButtonProps> = ({
  children,
}) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isProfessional = user?.roles.includes("PROFESSIONAL");

  if (isProfessional) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ProfessionalButton;
