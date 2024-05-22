import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { DosageResponse } from "../../types";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

interface DosageCardProps {
  dosage: DosageResponse;
}

const DosageCard: React.FC<DosageCardProps> = ({ dosage }) => {
  const isTaken = dosage.taken;
  const today = dayjs();
  const isToday = dayjs(dosage.date).isSame(today, "day");
  const backgroundColor = isTaken ? "success.main" : "primary.main";
  const formattedDate = new Intl.DateTimeFormat("es", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dosage.date);

  // const navigate = useNavigate();
  const setTaken = () => {
    // setLoading
    // try {
    //   const response =  axios.post("/your-backend-endpoint", {
    //     /* your data */
    //   });
    //   console.log(response);
    //   // Assuming the response contains data needed for the next render
    //   // Update your component's state here
    //   // For example, if using useState:
    //   // setYourState(response.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <Card variant="outlined" sx={{ backgroundColor }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Fecha de la dosis:
        </Typography>
        <Typography variant="h6" gutterBottom>
          {formattedDate}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Valor de la dosis:
        </Typography>
        <Typography variant="h6" gutterBottom>
          {dosage.value * 4}mg
        </Typography>
        {isTaken ? (
          <Typography variant="h5">TOMADA</Typography>
        ) : isToday ? (
          <>
            <Typography variant="h5" color={"red"}>
              A TOMAR HOY
            </Typography>
            <Button
              onClick={() => setTaken}
              sx={{ margin: "1rem", width: "80%", alignSelf: "center" }}
              variant="contained"
              color="info"
            >
              Marcar como tomada
            </Button>
          </>
        ) : (
          <Typography variant="h5" color={"red"}>
            PENDIENTE
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DosageCard;
