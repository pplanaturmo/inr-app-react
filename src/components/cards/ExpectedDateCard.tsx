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
  })
    .format(measurementDate)
    .toLocaleUpperCase();
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontSize: "1.5rem" }}>
          Siguiente medida:
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: "2rem", fontWeight: "700" }}
        >
          {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpectedDateCard;
