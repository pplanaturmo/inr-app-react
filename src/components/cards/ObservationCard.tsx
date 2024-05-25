import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Observation } from "../../types";
import dayjs from "dayjs";
import { CauseEnum, causeOptions } from "../../constants/causeOptions";

interface ObservationCardProps {
  observation: Observation;
}

const ObservationCard: React.FC<ObservationCardProps> = ({ observation }) => {
  console.log(observation.date);

  dayjs.locale("es");

  const esDate = dayjs(observation.date).format("dddd, DD [de] MMMM [de] YYYY");
  const formattedDate = esDate.charAt(0).toUpperCase() + esDate.slice(1);

  const formattedCause =
    causeOptions[CauseEnum[observation.cause as CauseEnum]];

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Motivo:
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          {formattedCause}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Fecha de la observación:
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          {formattedDate}
        </Typography>

        <Typography
          variant="h6"
          sx={{ textDecoration: "underline" }}
        >
          Descripción:
        </Typography>
        <Typography variant="body1">{observation.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ObservationCard;
