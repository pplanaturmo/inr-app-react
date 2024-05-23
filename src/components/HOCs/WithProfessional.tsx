import { ReactNode } from "react";
import { useAppStore } from "../../store/useAppStore";

interface WithProfessionalProps {
  children: ReactNode;
}

const WithProfessional: React.FC<WithProfessionalProps> = ({ children }) => {
  const { user } = useAppStore();

  const isProfessional =
    user?.role === "PROFESSIONAL" || user?.role === "MANAGER";

  if (isProfessional) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default WithProfessional;
