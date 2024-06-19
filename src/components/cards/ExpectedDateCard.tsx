import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ExpectedMeasurementDate } from "../../types/index";

interface ExpectedDateCardProps {
  expectedMeasurementDate: ExpectedMeasurementDate | null;
}

const ExpectedDateCard: React.FC<ExpectedDateCardProps> = ({
  expectedMeasurementDate,
}: ExpectedDateCardProps) => {
  let contactDoctor: boolean;
  let expectedDate: Date;
  if (expectedMeasurementDate) {
    contactDoctor = expectedMeasurementDate.contactDoctorASAP;
    expectedDate = new Date(expectedMeasurementDate.expectedDate);
  } else {
    contactDoctor = true;
    expectedDate = new Date();
  }

  const formattedDate = new Intl.DateTimeFormat("es", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(expectedDate)
    .toLocaleUpperCase();

  const noExpectedDateRetrieved = expectedMeasurementDate?.expectedDate == null;

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: noExpectedDateRetrieved
          ? "info.main"
          : contactDoctor
          ? "red"
          : "warning.main",
        color: "white",
        border: "2px solid black",
      }}
    >
      {noExpectedDateRetrieved ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontWeight: "900",
              color: "black",
            }}
          >
            NO HAY NINGUNA MEDICIÓN ALMACENADA
          </Typography>
        </CardContent>
      ) : contactDoctor ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
          >
            MEDIDA PELIGROSAMENTE ALTA
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
          >
            CONTACTE CON EL MÉDICO URGENTEMENTE
          </Typography>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1.5rem" }}
          >
            SIGUIENTE MEDIDA:
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "2rem", fontWeight: "700" }}
          >
            {formattedDate}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ExpectedDateCard;
