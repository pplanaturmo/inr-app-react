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
import Button from "@mui/material/Button/Button";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HomeIcon from "@mui/icons-material/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, useTheme } from "@mui/material";
import CustomUserIcon from "./icon-components/CustomUserIcon";
import { useAppStore } from "../store/useAppStore";
import ProjectIcon from "./icon-components/ProjectIcon";
import MedicationIcon from "@mui/icons-material/Medication";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import NotesIcon from "@mui/icons-material/Notes";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import WarningIcon from "@mui/icons-material/Warning";

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
  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <AppBar position="static">
        <Grid container width={"100%"}>
          <Grid item sm={12} md={1} sx={{ margin: "2rem" }}>
            <ProjectIcon width="4rem" height="4rem" />
          </Grid>
          {isMediumScreen && (
            <Grid
              item
              sm={12}
              md={9}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
              alignItems="center"
              sx={{
                marginTop: "1rem",
              }}
            >
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/user"
              >
                <BloodtypeIcon sx={{ marginRight: "10px" }} />
                Tomar medida
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/user"
              >
                <MedicationIcon sx={{ marginRight: "10px" }} />
                Dosis
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/professional"
              >
                <NotesIcon sx={{ marginRight: "10px" }} />
                Observaciones
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/professional"
              >
                <MedicalInformationIcon sx={{ marginRight: "10px" }} />
                Historial
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/admin"
              >
                <ReportProblemIcon sx={{ marginRight: "10px" }} />
                Alertas
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/manager"
              >
                <PeopleAltIcon sx={{ marginRight: "10px" }} />
                Listado de pacientes
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/admin"
              >
                <PeopleOutlineIcon sx={{ marginRight: "10px" }} />
                Listado de profesionales
              </Button>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/admin"
              >
                <AdminPanelSettingsIcon sx={{ marginRight: "10px" }} />
                Admin
              </Button>
            </Grid>
          )}
          {isMediumScreen && (
            <Grid item md={1} textAlign={"center"} marginTop={3}>
              <CustomUserIcon onClick={toggleDrawerUser} />
            </Grid>
          )}
        </Grid>
        {!isMediumScreen && (
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <CustomMenuIcon onClick={toggleDrawerMenu} />

            <div>Navbar</div>
            <CustomUserIcon onClick={toggleDrawerUser} />
          </Toolbar>
        )}
      </AppBar>

      {/**Drawers mobile */}
      {!isMediumScreen && (
        <>
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
            <Typography
              sx={{ fontSize: "1.5rem", textDecoration: "underline" }}
            >
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
              <CancelIcon fontSize="large" style={{ color: "red" }} />
            </IconButton>
            <Typography
              sx={{ fontSize: "1.5rem", textDecoration: "underline" }}
            >
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
      )}
    </>
  );
}
