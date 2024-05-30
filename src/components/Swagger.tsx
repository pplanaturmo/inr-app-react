import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import swaggerQr from "../assets/images/swagger_QR.png";

export default function Swagger() {
  const swaggerUrl = import.meta.env.VITE_SWAGGER_URL;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        sx={{ margin: "1rem" }}
        variant="contained"
        color="secondary"
        onClick={() => window.open(swaggerUrl, "_blank")}
      >
        Documentación APIs
      </Button>
      <Box
        component="img"
        src={swaggerQr}
        alt="QR para documentación"
        sx={{
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
