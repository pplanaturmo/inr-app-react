import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button/Button";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

import { Grid } from "@mui/material";

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
import InfoIcon from "@mui/icons-material/Info";
import Groups3Icon from "@mui/icons-material/Groups3";

export default function MiddleButtons() {
  return (
    <>
      <Grid
        item
        sm={10}
        md={9}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems="center"
        sx={{
          marginTop: "1rem",
        }}
      >
        <PatientButton>
          <Button
            sx={{ margin: "1rem" }}
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/inr-app/dosages/"
          >
            <MedicationIcon sx={{ marginRight: "10px" }} />
            Dosis
          </Button>
        </PatientButton>
        <PatientButton>
          <Button
            sx={{ margin: "1rem" }}
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/inr-app/measurement/add"
          >
            <BloodtypeIcon sx={{ marginRight: "10px" }} />
            Tomar medida
          </Button>
        </PatientButton>
        <PatientButton>
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
        </PatientButton>
        <PatientButton>
          <Button
            sx={{ margin: "1rem" }}
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/professional"
          >
            <InfoIcon sx={{ marginRight: "10px" }} />
            Información
          </Button>
        </PatientButton>

        <ProfessionalButton>
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
        </ProfessionalButton>
        <ProfessionalButton>
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
        </ProfessionalButton>
        <ManagerButton>
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
        </ManagerButton>
        <AdminButton>
          <Button
            sx={{ margin: "1rem" }}
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/admin"
          >
            <Groups3Icon sx={{ marginRight: "10px" }} />
            Listado total de usuarios
          </Button>
        </AdminButton>
        <AdminButton>
          <Button
            sx={{ margin: "1rem" }}
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/admin"
          >
            <MedicalInformationIcon sx={{ marginRight: "10px" }} />
            Listado de departamentos
          </Button>
        </AdminButton>
        <AdminButton>
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
        </AdminButton>
      </Grid>
    </>
  );
}
