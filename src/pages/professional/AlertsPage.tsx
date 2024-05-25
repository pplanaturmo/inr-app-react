import Box from "@mui/material/Box/Box";
import UnderConstruction from "../../components/icon-components/UnderConstruction";
import Typography from "@mui/material/Typography/Typography";

export default function AlertsPage() {
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
        <Typography>Página de alertas</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
