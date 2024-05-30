import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import { AlertResponse } from "../../types";
import { alertLevelOptions } from "../../constants/alertLevels";
import { updateAlertReviewed } from "../../services/alertService";

type AlertCardProps = {
  alert: AlertResponse;
  alerts: AlertResponse[];
  setAlerts: (alerts: AlertResponse[]) => void;
  setLoading: (isLoading: boolean) => void;
};

export default function AlertCard({
  alert,
  alerts,
  setAlerts,
  setLoading,
}: AlertCardProps) {
  const levelToString = alertLevelOptions[alert.level];

  const setReviewed = () => {
    updateAlertReviewed(alert.id, alerts, setAlerts, setLoading);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        margin: 2,
        backgroundColor: alert.level === "DANGEROUS" ? "tomato" : "yellow",
      }}
    >
      <CardContent>
        <Typography variant="h6">Alerta ID: {alert.id}</Typography>
        <Typography variant="body1">
          Usuario: {alert.userName} {alert.userSurname}
        </Typography>
        <Typography variant="body1">Email: {alert.userEmail}</Typography>
        <Typography variant="body1">
          Fecha: {new Date(alert.date).toLocaleString()}
        </Typography>
        <Typography variant="body1">Nivel: {levelToString}</Typography>
        <Button
          onClick={() => setReviewed()}
          sx={{ margin: "1rem", width: "12rem", alignSelf: "center" }}
          variant="contained"
          color="primary"
        >
          Vista
        </Button>
      </CardContent>
    </Card>
  );
}
