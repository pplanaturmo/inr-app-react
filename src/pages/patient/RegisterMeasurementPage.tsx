import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper/Paper";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import FormControl from "@mui/material/FormControl/FormControl";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { MeasurementRequest, UserResponse } from "../../types";
import { registerMeasurement } from "../../services/MeasurementService";
import { useState } from "react";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogActions from "@mui/material/DialogActions/DialogActions";

export default function RegisterMeasurementPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      measurementInteger: 2,
      measurementDecimal: 5,
    },
  });

  const user: UserResponse = useAppStore((state) => state.getUser());
  const isFieldNull = useAppStore((state) => state.isFieldNull);
  

  const onSubmit = async (data: MeasurementRequest) => {
    try {
      const response = await registerMeasurement(data, user);

      //TODO pasar el id de la medida??
      handleConfirmationOpen();
      console.log("medida registrada");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const goToDosages = () => {
    navigate("/inr-app/dosages/pending", { replace: true });
  };
  const goToCreateObservation = () => {
    navigate("/inr-app/observation/create", { replace: true });
  };

  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleConfirmationOpen = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleYesConfirmation = () => {
    goToCreateObservation();
    handleConfirmationClose();
  };

  const handleNoConfirmation = () => {
    goToDosages();
    handleConfirmationClose();
  };

  const missingNecessaryParameters = isFieldNull("rangeInr");

  if (missingNecessaryParameters) {
    return (
      <>
        <Box>
          <Typography variant="h6" align="center" margin="dense" width={2 / 3}>
            Necesita tener asignado un nivel de medicación antes de introducir
            una medida
          </Typography>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box
          px={3}
          py={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" align="center" margin="dense">
            Añadir medicion
          </Typography>
          <Paper>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "15rem",
                height: "15rem",
              }}
            >
              <Grid item>
                <FormControl fullWidth margin="none">
                  <Controller
                    name="measurementInteger"
                    control={control}
                    render={({ field }) => (
                      <Select
                        labelId="measurementInteger-label"
                        id="measurementInteger"
                        defaultValue={2}
                        {...field}
                        error={!!errors.measurementInteger}
                        sx={{
                          border: "none",
                          outline: "none",
                          fontSize: "3rem",
                          "& fieldset": { border: "none" },
                          "&.MuiOutlinedInput-notchedOutline": {
                            borderStyle: "none",
                          },
                        }}
                      >
                        {[...Array(10).keys()].map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  <FormHelperText>
                    {errors.measurementInteger?.message?.toString()}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Typography fontSize={"3rem"}> ,</Typography>
              <Grid item>
                <FormControl fullWidth margin="none">
                  <Controller
                    name="measurementDecimal"
                    control={control}
                    render={({ field }) => (
                      <Select
                        labelId="measurementDecimal-label"
                        id="measurementDecimal"
                        defaultValue={5}
                        {...field}
                        error={!!errors.measurementDecimal}
                        sx={{
                          border: "none",
                          outline: "none",
                          fontSize: "3rem",
                          "& fieldset": { border: "none" },
                        }}
                      >
                        {[...Array(10).keys()].map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  <FormHelperText>
                    {errors.measurementDecimal?.message?.toString()}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"space-around"}
            alignContent={"center"}
          >
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Registrar medida
              </Button>
            </Box>
          </Box>
        </Box>
        <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
          <DialogTitle>Confirm</DialogTitle>
          <DialogContent>
            ¿Quieres añadir una observación relacionada con esta medida?
          </DialogContent>
          <DialogActions color="black">
            <Button onClick={handleNoConfirmation} color="inherit">
              No
            </Button>
            <Button onClick={handleYesConfirmation} color="inherit" autoFocus>
              Sí
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
