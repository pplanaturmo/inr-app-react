import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface PatientButtonProps {
  children: ReactNode;
}

const PatientButton: React.FC<PatientButtonProps> = ({ children }) => {
  const user = useSessionUser();
  //TODO pasar los roles de usuario a array de strings
  //   const userRoles = user ? user.roles.map((role) => role.name) : [];
  //   const isAdmin = userRoles.includes("ADMIN");
  const isPatient = user?.roles.includes("PATIENT");

  if (isPatient) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default PatientButton;
