import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper/Paper";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

export default function RegisterMeasurementPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const isFieldNull = useAppStore((state) => state.isFieldNull);

  const logMeasurement = () => {
    console.log("medida registrada");
    goToDosages();
  };

  const navigate = useNavigate();
  const goToDosages = () => {
    navigate("/inr-app/dosages/pending", { replace: true });
  };

  // const missingNecessaryParameters =
  //   isFieldNull("rangeInr") || isFieldNull("dosePattern");
  const missingNecessaryParameters = false;

  if (missingNecessaryParameters) {
    return (
      <>
        <Box>
          <Typography variant="h6" align="center" margin="dense" width={2 / 3}>
            Pida a su supervisor sanitario que le asigne la medida inicial y los
            patrones de dosificación correspondientes antes de añadir
            mediciónes.
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
            >
              <Grid item>
                <TextField
                  required
                  id="measurementInteger"
                  label=""
                  fullWidth
                  margin="none"
                  type="number"
                  defaultValue={2}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*[.,]?[0-9]*",
                    min: 0,
                    max: 9,
                  }}
                  //size of the arrows
                  sx={{
                    width: { xs: "5rem", sm: "7rem", md: "7rem" },
                    height: { xs: "5rem", sm: "7rem", md: "8rem" },
                    '& input[type="number"]': {
                      textAlign: "center",
                      borderRadius: "0.25rem",
                      fontSize: "2rem",
                    },
                    '& input[type="number"]::-webkit-inner-spin-button': {
                      backgroundColor: "yellowgreen",
                      width: "4rem",
                      height: "4rem",
                    },
                  }}
                  {...register("measurementInteger", {
                    required: "Es necesario introducir una medida de INR",
                  })}
                  error={errors.measurementInteger ? true : false}
                />
                <ErrorMessage>
                  {errors.measurementInteger?.message?.toString()}
                </ErrorMessage>
              </Grid>
              <Grid item>
                <Typography fontSize={"large"} margin={2}>
                  ,
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="measurementDecimal"
                  label=""
                  fullWidth
                  margin="none"
                  type="number"
                  defaultValue={5}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*[.,]?[0-9]*",
                    min: 0,
                    max: 9,
                  }}
                  //size of the arrows
                  sx={{
                    width: { xs: "5rem", sm: "7rem", md: "7rem" },
                    height: { xs: "5rem", sm: "7rem", md: "8rem" },
                    '& input[type="number"]': {
                      textAlign: "center",
                      borderRadius: "0.25rem",
                      fontSize: "2rem",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                    },
                    '& input[type="number"]::-webkit-inner-spin-button': {
                      backgroundColor: "yellowgreen",
                      width: "4rem",
                      height: "4rem",
                    },
                  }}
                  {...register("measurementDecimal", {
                    required: "Es necesario introducir una medida de INR",
                  })}
                  error={errors.measurementDecimal ? true : false}
                />
                <ErrorMessage>
                  {errors.measurementDecimal?.message?.toString()}
                </ErrorMessage>
              </Grid>
            </Grid>

            {/* <Grid
            container
            spacing={2}
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            >
            <Grid item>
              <TextField
                required
                id="measurementInteger"
                label=""
                fullWidth
                margin="none"
                type="number"
                // value={value}
                defaultValue={2}
                inputProps={{
                  inputMode: "numeric",
                  min: 0,
                  max: 9,
                }}
                //size of the arrows
                sx={{
                  width: { xs: "5rem", sm: "7rem", md: "7rem" },
                  height: { xs: "5rem", sm: "7rem", md: "8rem" },
                  '& input[type="number"]': {
                    textAlign: "center",
                    borderRadius: "0.25rem",
                    fontSize: "2rem",
                  },
                  '& input[type="number"]::-webkit-inner-spin-button': {
                    backgroundColor: "yellowgreen",
                    width: "4rem",
                    height: "4rem",
                  },
                }}
                {...register("measurementInteger", {
                  required: "Es necesario introducir una medida de INR",
                })}
                error={errors.email ? true : false}
                />
              <Typography fontSize={"large"} margin={2}>
                ,
              </Typography>
              <TextField
                required
                id="measurementDecimal"
                label=""
                fullWidth
                margin="dense"
                type="number"
                // value={value}
                defaultValue={5}
                inputProps={{
                  inputMode: "numeric",
                  min: 0,
                  max: 9,
                }}
                //size of the arrows
                sx={{
                  width: { xs: "5rem", sm: "7rem", md: "7rem" },
                  height: { xs: "5rem", sm: "7rem", md: "8rem" },
                  '& input[type="number"]': {
                    textAlign: "center",
                    borderRadius: "0.25rem",
                    fontSize: "2rem",
                  },
                  '& input[type="number"]::-webkit-inner-spin-button': {
                    backgroundColor: "yellowgreen",
                    width: "4rem",
                    height: "4rem",
                  },
                }}
                {...register("measurementDecimal", {
                  required: "Es necesario introducir una medida de INR",
                })}
                error={errors.email ? true : false}
              />
              <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
              </Grid>
            </Grid> */}
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
                onClick={handleSubmit(logMeasurement)}
              >
                Registrar medida
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
