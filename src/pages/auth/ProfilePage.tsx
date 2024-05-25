import Typography from "@mui/material/Typography/Typography";
import UnderConstruction from "../../components/icon-components/UnderConstruction";
import Box from "@mui/material/Box/Box";

export default function ProfilePage() {
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
        <Typography>Perfil del usuario</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
