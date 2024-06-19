import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { fetchAlerts } from "../../services/alertService";
import { useAppStore } from "../../store/useAppStore";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import AlertCard from "../../components/cards/AlertCard";
import Paper from "@mui/material/Paper/Paper";

export default function AlertsPage() {
  const { user, loading, alerts, setLoading, setAlerts } = useAppStore();
  useEffect(() => {
    fetchAlerts(user, setLoading, setAlerts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={"80%"}
            mx="auto"
          >
            <Paper sx={{ margin: "1rem", maxWidth: "18rem" }}>
              <Typography
                variant="h6"
                align="center"
                margin="dense"
                padding={2}
              >
                ALERTAS PENDIENTES DE REVISIÓN
              </Typography>
            </Paper>
            {alerts.map((alert, index) => (
              <Box
                width="100%"
                marginY={2}
                key={index}
              >
                <AlertCard
                  user={user}
                  alert={alert}
                  setLoading={setLoading}
                  alerts={alerts}
                  setAlerts={setAlerts}
                />
              </Box>
            ))}
          </Box>
        </>
      )}
    </>
  );
}
