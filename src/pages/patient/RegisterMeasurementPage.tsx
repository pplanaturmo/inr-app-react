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
import { registerMeasurement } from "../../services/measurementService";
import { useState } from "react";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import useTheme from "@mui/material/styles/useTheme";

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
  const theme = useTheme();
  const user: UserResponse = useAppStore((state) => state.getUser());
  const isFieldNull = useAppStore((state) => state.isFieldNull);

  const onSubmit = (data: MeasurementRequest) => {
    handleConfirmationOpen(data);
  };

  const initialFormData: MeasurementRequest = {
    measurementInteger: 0,
    measurementDecimal: 0,
  };

  const navigate = useNavigate();
  const goToDosages = () => {
    navigate("/inr-app/dosages/", { replace: true });
  };

  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [formData, setFormData] = useState<MeasurementRequest>(initialFormData);

  const handleConfirmationOpen = (data: MeasurementRequest) => {
    setFormData(data);
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
    setFormData(initialFormData);
  };

  const handleYesConfirmation = async () => {
    try {
      await registerMeasurement(formData, user);
      goToDosages();
    } catch (error) {
      console.error(error);
    }

    handleConfirmationClose();
  };

  const handleNoConfirmation = () => {
    handleConfirmationClose();
  };

  const missingNecessaryParameters = isFieldNull("rangeInr");

  if (missingNecessaryParameters) {
    return (
      <>
        <Box>
          <Typography
            variant="h6"
            align="center"
            margin="dense"
            width={2 / 3}
          >
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
          <Typography
            variant="h6"
            align="center"
            margin="dense"
          >
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
                <FormControl
                  fullWidth
                  margin="none"
                >
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
                          <MenuItem
                            key={value}
                            value={value}
                          >
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
                <FormControl
                  fullWidth
                  margin="none"
                >
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
                          <MenuItem
                            key={value}
                            value={value}
                          >
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
                color="secondary"
                onClick={handleSubmit(onSubmit)}
              >
                Registrar medida
              </Button>
            </Box>
          </Box>
        </Box>
        <Dialog
          open={confirmationOpen}
          onClose={handleConfirmationClose}
          sx={{ fontSize: "2rem" }}
        >
          <DialogTitle>Confirmar medida</DialogTitle>
          <DialogContent>
            ¿Es correcta la medida {formData.measurementInteger},
            {formData.measurementDecimal}?
          </DialogContent>
          <DialogActions color="black">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                onClick={handleNoConfirmation}
                sx={{
                  color: "white",
                  backgroundColor: theme.palette.error.main,
                }}
              >
                No
              </Button>
              <Button
                onClick={handleYesConfirmation}
                color="inherit"
                autoFocus
                sx={{
                  color: "white",
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                Sí
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
