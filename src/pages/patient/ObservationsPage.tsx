import Button from "@mui/material/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ObservationsPage() {
  return (
    <div>
      {" "}
      <Button
        sx={{ margin: "1rem" }}
        variant="contained"
        color="secondary"
        component={NavLink}
        to="/inr-app/observations/add"
      >
        Observaciones
      </Button>
    </div>
  );
}
