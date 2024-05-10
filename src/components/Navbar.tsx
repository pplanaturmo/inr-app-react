import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { useState } from "react";
import CustomMenuIcon from "./icon-components/CustomMenuIcon";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List/List";

import ListItemText from "@mui/material/ListItemText/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HomeIcon from "@mui/icons-material/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

export default function Navbar() {
  const isTablet = useMediaQuery("(max-width:900px)");
  const drawerWidth = useMediaQuery("(max-width:600px)")
    ? "66%"
    : isTablet
    ? "50%"
    : "0%";

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = () => {
    // Handle menu item click (e.g., navigate to a different page)
    setDrawerOpen(false);
  };

  return (
    <>
      <div>Navbar</div>
      <AppBar position="static">
        <Toolbar>
          <CustomMenuIcon onClick={toggleDrawer} />
          {/* Navbar normal aqui */}
          <div>Navbar</div>
        </Toolbar>
      </AppBar>

      {/**Drawer for mobile version */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ style: { width: drawerWidth, textAlign: "center" } }}
      >
        {" "}
        <IconButton
          color="inherit"
          aria-label="Close drawer"
          onClick={toggleDrawer}
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
    </>
  );
}
