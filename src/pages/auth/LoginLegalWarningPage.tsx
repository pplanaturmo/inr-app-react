import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import LegalWarning from "../../components/LegalWarning";

export default function LoginLegalWarning() {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register", { replace: true });
  };

  const goToLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={goToLogin}
          >
            Conectarse
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={goToRegister}
          >
            Registrarse
          </Button>
        </Box>
      </Box>
      <Box>
        <LegalWarning />
      </Box>
    </Box>
  );
}
