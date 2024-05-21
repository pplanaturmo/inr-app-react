import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface PatientButtonProps {
  children: ReactNode;
}

const PatientButton: React.FC<PatientButtonProps> = ({ children }) => {
  const user = useSessionUser();
  const isPatient = user?.role === "PATIENT";

  if (isPatient) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default PatientButton;
