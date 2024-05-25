import Typography from "@mui/material/Typography/Typography";
import UnderConstruction from "../../components/icon-components/UnderConstruction";
import Box from "@mui/material/Box/Box";

export default function PatientDetailsPage() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={"80%"}
        mx="auto"
      >
        <Typography>Modal detalles de paciente</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
