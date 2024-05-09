import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useDrawerViewModel from "./useTopbarViewModel";
import { Button } from "@mui/material";
import { AppBar } from "./styled-topbar";

export type ITopbarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
};

export const Topbar = ({ open, handleDrawerOpen }: ITopbarProps) => {
  const { logout } = useDrawerViewModel();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" })
          }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Typography variant="h6" noWrap component="div" color={"white"}>
            MOVIBLASTER MONITORING
          </Typography>
          <Button onClick={logout} sx={{ color: "white" }}>
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
