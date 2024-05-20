import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { MeasurementResponse } from "../../types";

interface MeasurementCardProps {
  measurement: MeasurementResponse;
}

const MeasurementCard: React.FC<MeasurementCardProps> = ({ measurement }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fecha de la medida:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {measurement.date.toLocaleDateString()}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Valor de la medida:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {measurement.value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MeasurementCard;
