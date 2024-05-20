import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ObservationResponse } from "../../types";

interface ObservationCardProps {
  observation: ObservationResponse;
}

const ObservationCard: React.FC<ObservationCardProps> = ({ observation }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fecha de la observación:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {observation.date.toLocaleDateString()}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Motivo:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {observation.cause}
        </Typography>
        <Typography variant="h6">Descripción:</Typography>
        <Typography variant="body1">{observation.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ObservationCard;
