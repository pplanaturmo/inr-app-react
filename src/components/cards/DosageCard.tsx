import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { DosageResponse } from "../../types";

interface DosageCardProps {
  dosage: DosageResponse;
}

const DosageCard: React.FC<DosageCardProps> = ({ dosage }) => {
  const isTaken = dosage.taken;
  const backgroundColor = isTaken ? "secondary.main" : "primary.main";
  return (
    <Card variant="outlined" sx={{ backgroundColor }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fecha de la dosis:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {dosage.date.toLocaleDateString()}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Valor de la dosis:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {dosage.value * 4}mg
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DosageCard;
