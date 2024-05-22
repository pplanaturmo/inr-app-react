import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface ExpectedDateCardProps {
  measurementDate: Date;
}

const ExpectedDateCard: React.FC<ExpectedDateCardProps> = ({
  measurementDate,
}) => {
  const formattedDate = new Intl.DateTimeFormat("es", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(measurementDate);
  return (
    <Card variant="outlined" sx={{ backgroundColor: "info.main" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Siguiente medida:
        </Typography>
        <Typography variant="h5" gutterBottom>
          {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpectedDateCard;
