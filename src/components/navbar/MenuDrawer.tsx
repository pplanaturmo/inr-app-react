import IconButton from "@mui/material/IconButton/IconButton";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List/List";

import ListItemText from "@mui/material/ListItemText/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";

import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

import BloodtypeIcon from "@mui/icons-material/Bloodtype";

import { Typography } from "@mui/material";

import MedicationIcon from "@mui/icons-material/Medication";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import NotesIcon from "@mui/icons-material/Notes";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Groups3Icon from "@mui/icons-material/Groups3";
import WithAdmin from "../HOCs/WithAdmin";
import WithManager from "../HOCs/WithManager";
import WithProfessional from "../HOCs/WithProfessional";
import WithPatient from "../HOCs/WithPatient";
import InfoIcon from "@mui/icons-material/Info";

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
          <CancelIcon
            fontSize="large"
            style={{ color: "red" }}
          />
        </IconButton>
        <Typography sx={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          Navegación
        </Typography>
        <List>
          <WithPatient>
            <ListItemButton
              component={NavLink}
              to="/inr-app/dosages/"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <MedicationIcon
                  sx={{ color: "darkgreen", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Dosis" />
            </ListItemButton>
          </WithPatient>

          <WithPatient>
            <ListItemButton
              component={NavLink}
              to="/inr-app/measurement/add"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <BloodtypeIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Tomar medida" />
            </ListItemButton>
          </WithPatient>

          <WithPatient>
            <ListItemButton
              component={NavLink}
              to="/inr-app/observations/"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <NotesIcon sx={{ color: "blue", marginRight: "10px" }} />
              </ListItemIcon>
              <ListItemText primary="Observaciones" />
            </ListItemButton>
          </WithPatient>

          <WithPatient>
            <ListItemButton
              component={NavLink}
              to="/inr-app/information"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <InfoIcon sx={{ color: "yellowgreen", marginRight: "10px" }} />
              </ListItemIcon>
              <ListItemText primary="Información" />
            </ListItemButton>
          </WithPatient>

          <WithProfessional>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <ReportProblemIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Alertas" />
            </ListItemButton>
          </WithProfessional>

          <WithProfessional>
            <ListItemButton
              component={NavLink}
              to="/manager"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <PeopleAltIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Listado de pacientes" />
            </ListItemButton>
          </WithProfessional>

          <WithManager>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <PeopleOutlineIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Listado de profesionales" />
            </ListItemButton>
          </WithManager>

          <WithAdmin>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <Groups3Icon sx={{ color: "firebrick", marginRight: "10px" }} />
              </ListItemIcon>
              <ListItemText primary="Listado total de usuarios" />
            </ListItemButton>
          </WithAdmin>

          <WithAdmin>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <MedicalInformationIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Listado de departamentos" />
            </ListItemButton>
          </WithAdmin>

          <WithAdmin>
            <ListItemButton
              component={NavLink}
              to="/admin"
              onClick={handleMenuClick}
              sx={{ margin: "1rem", variant: "contained", color: "secondary" }}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon
                  sx={{ color: "firebrick", marginRight: "10px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </WithAdmin>
        </List>
      </Drawer>
    </>
  );
}
