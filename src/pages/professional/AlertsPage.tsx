import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { fetchAlerts } from "../../services/alertService";
import { useAppStore } from "../../store/useAppStore";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import AlertCard from "../../components/cards/AlertCard";

export default function AlertsPage() {
  const { loading, alerts, setLoading, setAlerts } = useAppStore();
  useEffect(() => {
    fetchAlerts(setLoading, setAlerts);
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
            <Typography>Página de alertas</Typography>

            {alerts.map((alert, index) => (
              <Box width="100%" marginY={2} key={index}>
                <AlertCard
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
