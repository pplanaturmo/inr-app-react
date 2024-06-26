import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Dosage, UserResponse } from "../../types";
import dayjs from "dayjs";

import { updateDoseTaken } from "../../services/dosagesService";
import Pill from "../icon-components/Pill";

interface DosageCardProps {
  dosage: Dosage;
  setLoading: (isLoading: boolean) => void;
  setDosages: (
    dosages: {
      id: number;
      value: number;
      date: Date;
      taken: boolean;
    }[]
  ) => void;
  dosages: Dosage[];
  user: UserResponse | null;
}

const DosageCard: React.FC<DosageCardProps> = ({
  setLoading,
  setDosages,
  dosages,
  dosage,
  user,
}) => {
  const isTaken = dosage.taken;
  const today = dayjs();
  const isToday = dayjs(dosage.date).isSame(today, "day");
  const backgroundColor = isTaken ? "secondary.main" : "background.paper";

  const dateToObject = new Date(dosage.date);
  const date = isNaN(dateToObject.getTime())
    ? "Invalid date"
    : new Intl.DateTimeFormat("es", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(dateToObject);

  const formattedDate = date.charAt(0).toUpperCase() + date.slice(1);
  const noDose = dosage.value === 0;
  const setTaken = () => {
    updateDoseTaken(setLoading, setDosages, dosages, dosage.id, user);
  };

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
        >
          Fecha de la dosis:
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          {formattedDate}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
        >
          Valor de la dosis:{" "}
          {noDose ? "Sin dosis hoy" : `${dosage.value * 4}mg`}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          {isTaken ? (
            ""
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pill dose={dosage.value} />
            </Box>
          )}
        </Typography>
        {noDose ? (
          ""
        ) : isTaken || dosage.value === 0 ? (
          <Typography variant="h5">TOMADA</Typography>
        ) : isToday ? (
          <>
            <Typography
              variant="h5"
              color={"red"}
            >
              A TOMAR HOY
            </Typography>
            <Button
              onClick={() => setTaken()}
              sx={{ margin: "1rem", width: "12rem", alignSelf: "center" }}
              variant="contained"
              color="secondary"
            >
              Marcar como tomada
            </Button>
          </>
        ) : (
          <Typography
            variant="h5"
            color={"red"}
          >
            PENDIENTE
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DosageCard;
