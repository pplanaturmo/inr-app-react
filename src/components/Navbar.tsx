import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { useState } from "react";
import CustomMenuIcon from "./icon-components/CustomMenuIcon";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List/List";

import ListItemText from "@mui/material/ListItemText/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HomeIcon from "@mui/icons-material/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import CustomUserIcon from "./icon-components/CustomUserIcon";
import { useAppStore } from "../store/useAppStore";

export default function Navbar() {
  const isTablet = useMediaQuery("(max-width:900px)");
  const drawerWidth = useMediaQuery("(max-width:600px)")
    ? "66%"
    : isTablet
    ? "50%"
    : "20%";

  const [drawerUserOpen, setDrawerUserOpen] = useState(false);

  const [drawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const toggleDrawerMenu = () => {
    setDrawerMenuOpen(!drawerMenuOpen);
  };
  const toggleDrawerUser = () => {
    setDrawerUserOpen(!drawerUserOpen);
  };
  const handleMenuClick = () => {
    setDrawerMenuOpen(false);
  };

  const handleUserClick = () => {
    setDrawerUserOpen(false);
  };

  const { clearUser } = useAppStore();
  const logoutUser = () => {
    clearUser();
  };
  return (
    <>
      <div>Navbar</div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <CustomMenuIcon onClick={toggleDrawerMenu} />

          <div>Navbar</div>
          <CustomUserIcon onClick={toggleDrawerUser} />
          {/* <CustomMenuIcon onClick={toggleDrawerUser} />

          <div>Navbar</div>
          <CustomUserIcon onClick={toggleDrawerMenu} /> */}
        </Toolbar>
      </AppBar>

      {/**Drawers for mobile version */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerMenuOpen}
        onClose={toggleDrawerMenu}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ style: { width: drawerWidth, textAlign: "center" } }}
      >
        {" "}
        <IconButton
          color="inherit"
          aria-label="Close drawer"
          onClick={toggleDrawerMenu}
          style={{ marginLeft: "auto" }}
        >
          <CancelIcon fontSize="large" style={{ color: "red" }} />
        </IconButton>
        <Typography sx={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          Navegación
        </Typography>
        <List>
          <ListItemButton
            component={NavLink}
            to="/inr-app/"
            onClick={handleMenuClick}
          >
            <ListItemIcon>
              <HomeIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/inr-app/measurement/add"
            onClick={handleMenuClick}
          >
            <ListItemIcon>
              <BloodtypeIcon style={{ color: "firebrick" }} />
            </ListItemIcon>
            <ListItemText primary="Añadir medición" />
          </ListItemButton>
          {/* Aqui mas links? */}
        </List>
      </Drawer>
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerUserOpen}
        onClose={toggleDrawerUser}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ style: { width: drawerWidth, textAlign: "center" } }}
      >
        {" "}
        <IconButton
          color="inherit"
          aria-label="Close drawer"
          onClick={toggleDrawerUser}
          style={{ marginLeft: "auto" }}
        >
          {/* <CustomCloseIcon onClick={toggleDrawer} /> */}
          <CancelIcon fontSize="large" style={{ color: "red" }} />
        </IconButton>
        <Typography sx={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          Navegación
        </Typography>
        <List>
          <ListItemButton
            component={NavLink}
            to="/inr-app/"
            onClick={handleUserClick}
          >
            <ListItemIcon>
              <ManageAccountsIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton component={NavLink} to="/" onClick={logoutUser}>
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
