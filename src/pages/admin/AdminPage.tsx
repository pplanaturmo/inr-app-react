import { Box, Typography } from "@mui/material";
import UnderConstruction from "../../components/icon-components/UnderConstruction";

export default function AdminPage() {
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
        <Typography>Página del admin</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
