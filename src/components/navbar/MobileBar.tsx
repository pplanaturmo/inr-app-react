import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import CustomMenuIcon from "../icon-components/CustomMenuIcon";
import CustomUserIcon from "../icon-components/CustomUserIcon";

type MobileBarProps = {
  toggleDrawerMenu: () => void;
  toggleDrawerUser: () => void;
};

export default function MobileBar({
  toggleDrawerMenu,
  toggleDrawerUser,
}: MobileBarProps) {
  return (
    <>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          margin={2}
        >
          <CustomMenuIcon onClick={toggleDrawerMenu} />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          margin={2}
        >
          <CustomUserIcon onClick={toggleDrawerUser} />
        </Box>
      </Toolbar>
    </>
  );
}
