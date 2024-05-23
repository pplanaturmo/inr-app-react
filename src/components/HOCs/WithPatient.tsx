import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface WithPatientProps {
  children: ReactNode;
}

const WithPatient: React.FC<WithPatientProps> = ({ children }) => {
  const { user } = useAppStore();
  const isPatient = user?.role === "PATIENT";

  if (isPatient) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default WithPatient;
