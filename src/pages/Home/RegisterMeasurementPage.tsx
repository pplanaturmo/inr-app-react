import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper/Paper";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

// export default function RegisterMeasurementPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({});

//   const isFieldNull = useAppStore((state) => state.isFieldNull);

//   const logMeasurement = () => {
//     console.log("medida registrada");
//     goToDosages();
//   };

//   const navigate = useNavigate();
//   const goToDosages = () => {
//     navigate("/inr-app/dosages/pending", { replace: true });
//   };

//   // const missingNecessaryParameters =
//   //   isFieldNull("rangeInr") || isFieldNull("dosePattern");
//   const missingNecessaryParameters = false;

//   if (missingNecessaryParameters) {
//     return (
//       <>
//         <Box>
//           <Typography variant="h6" align="center" margin="dense" width={2 / 3}>
//             Pida a su supervisor sanitario que le asigne la medida inicial y los
//             patrones de dosificación correspondientes antes de añadir
//             mediciónes.
//           </Typography>
//         </Box>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Box
//           px={3}
//           py={2}
//           display={"flex"}
//           flexDirection={"column"}
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Typography variant="h6" align="center" margin="dense">
//             Añadir medicion
//           </Typography>
//           <Paper>
//             <Grid
//               container
//               spacing={2}
//               direction="row"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Grid item>
//                 <TextField
//                   required
//                   id="measurementInteger"
//                   label=""
//                   fullWidth
//                   margin="none"
//                   type="number"
//                   defaultValue={2}
//                   inputProps={{
//                     inputMode: "numeric",
//                     pattern: "[0-9]*[.,]?[0-9]*",
//                     min: 0,
//                     max: 9,
//                   }}
//                   //size of the arrows
//                   sx={{
//                     width: { xs: "5rem", sm: "7rem", md: "7rem" },
//                     height: { xs: "5rem", sm: "7rem", md: "8rem" },
//                     '& input[type="number"]': {
//                       textAlign: "center",
//                       borderRadius: "0.25rem",
//                       fontSize: "2rem",
//                     },
//                     '& input[type="number"]::-webkit-inner-spin-button': {
//                       backgroundColor: "yellowgreen",
//                       width: "4rem",
//                       height: "4rem",
//                     },
//                   }}
//                   {...register("measurementInteger", {
//                     required: "Es necesario introducir una medida de INR",
//                   })}
//                   error={errors.measurementInteger ? true : false}
//                 />
//                 <ErrorMessage>
//                   {errors.measurementInteger?.message?.toString()}
//                 </ErrorMessage>
//               </Grid>
//               <Grid item>
//                 <Typography fontSize={"large"} margin={2}>
//                   ,
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <TextField
//                   required
//                   id="measurementDecimal"
//                   label=""
//                   fullWidth
//                   margin="none"
//                   type="number"
//                   defaultValue={5}
//                   inputProps={{
//                     inputMode: "numeric",
//                     pattern: "[0-9]*[.,]?[0-9]*",
//                     min: 0,
//                     max: 9,
//                   }}
//                   sx={{
//                     width: { xs: "5rem", sm: "7rem", md: "7rem" },
//                     height: { xs: "5rem", sm: "7rem", md: "8rem" },
//                     '& input[type="number"]': {
//                       textAlign: "center",
//                       borderRadius: "0.25rem",
//                       fontSize: "2rem",
//                       border: "none",
//                       outline: "none",
//                       boxShadow: "none",
//                     },
//                     '& input[type="number"]::-webkit-inner-spin-button': {
//                       backgroundColor: "yellowgreen",
//                       width: "4rem",
//                       height: "4rem",
//                     },
//                   }}
//                   {...register("measurementDecimal", {
//                     required: "Es necesario introducir una medida de INR",
//                   })}
//                   error={errors.measurementDecimal ? true : false}
//                 />
//                 <ErrorMessage>
//                   {errors.measurementDecimal?.message?.toString()}
//                 </ErrorMessage>
//               </Grid>
//             </Grid>
//           </Paper>
//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent={"space-around"}
//             alignContent={"center"}
//           >
//             <Box mt={3}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit(logMeasurement)}
//               >
//                 Registrar medida
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </>
//     );
//   }
// }

export default function RegisterMeasurementPage() {
  const {
    handleSubmit,
    control,
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
              {/* Other Grid items */}
              <Grid item>
                <FormControl fullWidth margin="none">
                  <InputLabel id="measurementInteger-label">
                    Measurement Integer
                  </InputLabel>
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
                          fontSize: "3rem", // Increase the font size as needed
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
              <Grid item>
                <Typography fontSize={"3rem"}>,</Typography>
              </Grid>
              <Grid item>
                <FormControl fullWidth margin="none">
                  <InputLabel id="measurementDecimal-label">
                    Measurement Decimal
                  </InputLabel>
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
                          fontSize: "3rem", // Increase the font size as needed
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
