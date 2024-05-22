import IconButton from "@mui/material/IconButton/IconButton";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List/List";

import ListItemText from "@mui/material/ListItemText/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";

import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HomeIcon from "@mui/icons-material/Home";

import { Typography } from "@mui/material";

import MedicationIcon from "@mui/icons-material/Medication";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import NotesIcon from "@mui/icons-material/Notes";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import AdminButton from "../HOCs/AdminButton";
import ManagerButton from "../HOCs/ManagerButton";
import ProfessionalButton from "../HOCs/ProfessionalButton";
import PatientButton from "../HOCs/PatientButton";

type MenuDrawerProps = {
  drawerMenuOpen: boolean;
  toggleDrawerMenu: () => void;
  drawerWidth: string;
  handleMenuClick: () => void;
};

export default function MenuDrawer({
  drawerMenuOpen,
  toggleDrawerMenu,
  drawerWidth,
  handleMenuClick,
}: MenuDrawerProps) {
  return (
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
        <Typography sx={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          Navegación
        </Typography>
        <List>
          {/* <ListItemButton
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
              </ListItemButton> */}
          {/* Aqui mas links? */}
          <ListItemButton
            component={NavLink}
            to="/inr-app"
            onClick={handleMenuClick}
            sx={{
              margin: "1rem",
              variant: "contained",
              color: "secondary",
            }}
          >
            <ListItemIcon>
              <HomeIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <PatientButton>
            <ListItemButton
              component={NavLink}
              to="/user"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <BloodtypeIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Tomar medida" />
            </ListItemButton>
          </PatientButton>
          <PatientButton>
            <ListItemButton
              component={NavLink}
              to="/user"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <MedicationIcon
                  sx={{ color: "darkgreen", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Dosis" />
            </ListItemButton>
          </PatientButton>
          <PatientButton>
            <ListItemButton
              component={NavLink}
              to="/professional"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <NotesIcon sx={{ color: "blue", marginRight: "10px" }} />
              </ListItemIcon>
              <ListItemText primary="Observaciones" />
            </ListItemButton>
          </PatientButton>
          <PatientButton>
            <ListItemButton
              component={NavLink}
              to="/professional"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <MedicalInformationIcon
                  sx={{ color: "yellowgreen", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Historial" />
            </ListItemButton>
          </PatientButton>
          <ProfessionalButton>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <ReportProblemIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Alertas" />
            </ListItemButton>
          </ProfessionalButton>
          <ProfessionalButton>
            <ListItemButton
              component={NavLink}
              to="/manager"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <PeopleAltIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Listado de pacientes" />
            </ListItemButton>
          </ProfessionalButton>
          <ManagerButton>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <PeopleOutlineIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Listado de profesionales" />
            </ListItemButton>
          </ManagerButton>
          <AdminButton>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{
                margin: "1rem",
                variant: "contained",
                color: "secondary",
              }}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </AdminButton>
        </List>
      </Drawer>
    </>
  );
}
