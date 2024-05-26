import ListItemText from "@mui/material/ListItemText/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Drawer from "@mui/material/Drawer/Drawer";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography/Typography";
import List from "@mui/material/List/List";

type UserDrawerProps = {
  drawerUserOpen: boolean;
  toggleDrawerUser: () => void;
  drawerWidth: string;
  handleUserClick: () => void;
  logoutUser: () => void;
};

export default function UserDrawer({
  drawerUserOpen,
  toggleDrawerUser,
  drawerWidth,
  handleUserClick,
  logoutUser,
}: UserDrawerProps) {
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerUserOpen}
        onClose={toggleDrawerUser}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          style: {
            width: drawerWidth,
            textAlign: "center",
            height: "auto",
            maxHeight: "100%",
          },
        }}
      >
        {" "}
        <IconButton
          color="inherit"
          aria-label="Close drawer"
          onClick={toggleDrawerUser}
          style={{ marginRight: "auto" }}
        >
          <CancelIcon
            fontSize="large"
            style={{ color: "red" }}
          />
        </IconButton>
        <Typography sx={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          Opciones de Usuario
        </Typography>
        <List>
          <ListItemButton
            component={NavLink}
            to="/inr-app/profile"
            onClick={handleUserClick}
          >
            <ListItemIcon>
              <ManageAccountsIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/"
            onClick={logoutUser}
          >
            <ListItemIcon>
              <LogoutIcon style={{ color: "darkslategrey" }} />
            </ListItemIcon>
            <ListItemText primary="Desconectar" />
          </ListItemButton>
          {/* Aqui mas links? */}
        </List>
      </Drawer>
    </>
  );
}
