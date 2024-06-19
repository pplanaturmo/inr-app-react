import Grid from "@mui/material/Grid/Grid";
import CustomUserIcon from "../icon-components/CustomUserIcon";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import { UserResponse } from "../../types";

type UserMenuProps = {
  toggleDrawerUser: () => void;
  user: UserResponse | null;
};

export default function UserMenu({ toggleDrawerUser, user }: UserMenuProps) {
  return (
    <>
      {" "}
      <Grid
        item
        sm={1}
        textAlign={"center"}
        marginTop={3}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box sx={{ borderRadius: "50%" }}>
          <CustomUserIcon onClick={toggleDrawerUser} />
        </Box>
        <Typography
          overflow={"hidden"}
          noWrap
        >
          {user?.name}
        </Typography>
        <Typography
          overflow={"hidden"}
          noWrap
        >
          {user?.surname}
        </Typography>
      </Grid>
    </>
  );
}
