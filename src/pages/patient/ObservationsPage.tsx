import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";

import RegisterObservationPage from "./RegisterObservationPage";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box/Box";
import { useAppStore } from "../../store/useAppStore";
import { fetchObservations } from "../../services/observationService";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Spinner from "../../components/Spinner";
import ObservationCard from "../../components/cards/ObservationCard";
import { Typography } from "@mui/material";

export default function ObservationsPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user, loading, observations, setLoading, setObservations } =
    useAppStore();

  const fetchData = async () => {
    try {
      await fetchObservations(setLoading, setObservations, user);
    } catch (error) {
      console.error("Failed to fetch dosages", error);
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const boxWidth = isLgUp ? "60%" : isSmUp ? "70%" : "80%";

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          sx={{ margin: "1rem" }}
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >
          Añadir Observacion
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>Añadir Observación</DialogTitle>
          <DialogContent>
            <RegisterObservationPage
              handleClose={handleClose}
              fetchData={fetchData}
            />
          </DialogContent>
        </Dialog>
      </Box>
      {loading ? (
        <Spinner />
      ) : observations.length > 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={boxWidth}
          mx="auto"
        >
          {observations.reverse().map((observation, index) => (
            <Box width="100%" marginY={2} key={index}>
              <ObservationCard observation={observation} />
            </Box>
          ))}
        </Box>
      ) : (
        <Box width="100%" marginY={2} textAlign={"center"}>
          <Typography variant="h6">No hay observaciones registradas</Typography>
        </Box>
      )}
    </>
  );
}
