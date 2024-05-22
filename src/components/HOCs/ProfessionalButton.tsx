import useSessionUser from "../../hooks/useSessionUser";
import { ReactNode } from "react";

interface ProfessionalButtonProps {
  children: ReactNode;
}

const ProfessionalButton: React.FC<ProfessionalButtonProps> = ({
  children,
}) => {
  const user = useSessionUser();

  const isProfessional =
    user?.role === "PROFESSIONAL" || user?.role === "MANAGER";

  if (isProfessional) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ProfessionalButton;
