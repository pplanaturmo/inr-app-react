import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import { AlertResponse, UserResponse } from "../../types";
import { alertLevelOptions } from "../../constants/alertLevels";
import { updateAlertReviewed } from "../../services/alertService";
import Box from "@mui/material/Box/Box";

type AlertCardProps = {
  user: UserResponse | null;
  alert: AlertResponse;
  alerts: AlertResponse[];
  setAlerts: (alerts: AlertResponse[]) => void;
  setLoading: (isLoading: boolean) => void;
};

export default function AlertCard({
  user,
  alert,
  alerts,
  setAlerts,
  setLoading,
}: AlertCardProps) {
  const levelToString = alertLevelOptions[alert.level];

  const setReviewed = () => {
    updateAlertReviewed(user, alert.id, alerts, setAlerts, setLoading);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        margin: 2,
        backgroundColor: alert.level === "DANGEROUS" ? "tomato" : "yellow",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
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
      </Box>
    </Card>
  );
}
