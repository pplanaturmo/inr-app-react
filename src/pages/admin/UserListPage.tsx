import Box from "@mui/material/Box/Box";
import UnderConstruction from "../../components/icon-components/UnderConstruction";
import Typography from "@mui/material/Typography/Typography";

export default function UserListPage() {
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
        <Typography>Listado de usuarios</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
