import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

import {
  fetchDosePatterns,
  fetchRangeInr,
  registerUser,
} from "../../services/authService";
import Button from "@mui/material/Button/Button";
import { registerRequestSchema } from "../../schemas";
import { useAppStore } from "../../store/useAppStore";
import { useEffect } from "react";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { formatNumberArray } from "../../utils/numberFormat";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function RegisterPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const password = watch("password");

  const {
    rangeInrList,
    dosePatternList,
    setLoading,
    setRangeInrList,
    setDosePatternList,
    setUser,
  } = useAppStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const validatedData = registerRequestSchema.parse(data);
    try {
      const userData = await registerUser(validatedData);
      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/", { replace: true });
  };

  const fetchData = async () => {
    try {
      await fetchRangeInr(setLoading, setRangeInrList);
      await fetchDosePatterns(setLoading, setDosePatternList);
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

  const fieldWidth = isLgUp ? "50%" : isSmUp ? "70%" : "90%";

  return (
    <>
      <Box
        px={3}
        py={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
      >
        <Typography variant="h4" align="center" margin="dense" marginBottom={2}>
          Registrarse en la aplicación
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          width={"100%"}
        >
          <Grid item xs={12} sm={9} md={7} width={fieldWidth}>
            <TextField
              required
              id="name"
              label="Nombre"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white", width: "100%" }}
              {...register("name", {
                required: "El nombre es obligatorio",
              })}
              error={errors.name ? true : false}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
            />
            <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7} width={fieldWidth}>
            <TextField
              required
              id="surname"
              label="Apellidos"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("surname", {
                required: "Los apellidos son obligatorios",
              })}
              error={errors.surnames ? true : false}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
            />
            <ErrorMessage>{errors.surnames?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor ingrese un correo electrónico válido",
                },
              })}
              error={errors.email ? true : false}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
            />
            <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <Controller
              name="rangeInr"
              control={control}
              rules={{ required: "El rango es obligatorio" }}
              render={({ field, fieldState }) => (
                <FormControl
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                >
                  <InputLabel id="rangeInr-label">Rango</InputLabel>
                  <Select
                    {...field}
                    labelId="rangeInr-label"
                    label="Rango de INR"
                    sx={{ backgroundColor: "white", width: "100%" }}
                  >
                    {rangeInrList.map((range) => (
                      <MenuItem key={range.id} value={range.id}>
                        {range.description}. Rango terapéutico: {range.minLevel}
                        -{range.maxLevel}
                      </MenuItem>
                    ))}
                  </Select>
                  {fieldState.error && (
                    <Typography variant="body2" color="error">
                      {fieldState.error.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <Controller
              name="dosePattern"
              control={control}
              rules={{ required: "El patrón de dosificación es obligatorio" }}
              render={({ field, fieldState }) => (
                <FormControl
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                >
                  <InputLabel id="dosePattern-label">
                    Patrón de Dosificación
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="dosePattern-label"
                    label="Patrón de Dosificación"
                    sx={{ backgroundColor: "white", width: "100%" }}
                  >
                    {dosePatternList.map((pattern) => (
                      <MenuItem key={pattern.id} value={pattern.id}>
                        <Typography
                          display={"flex"}
                          flexWrap={"wrap"}
                          width={"100%"}
                        >
                          Nivel:{pattern.level} - Medicamento:{pattern.drug} -
                          Patrón: ( {formatNumberArray(pattern.patternValue)} )
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                  {fieldState.error && (
                    <Typography variant="body2" color="error">
                      {fieldState.error.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <TextField
              required
              id="password"
              label="Contraseña"
              type="password"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white", width: "100%" }}
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
              error={errors.password ? true : false}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
            />
            <ErrorMessage>{errors.password?.message?.toString()}</ErrorMessage>
          </Grid>

          <Grid item xs={12} sm={9} md={7} sx={{ width: "80%" }}>
            <TextField
              required
              id="confirmPassword"
              label="Confirmar Contraseña"
              type="password"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("confirmPassword", {
                required: "La confirmación de contraseña es obligatoria",
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
              })}
              error={errors.confirmPassword ? true : false}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
            />
            <ErrorMessage>
              {errors.confirmPassword?.message?.toString()}
            </ErrorMessage>
          </Grid>

          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <FormControlLabel
              control={
                <Controller
                  name="dataConsent"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      sx={{
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  )}
                />
              }
              label="Acepto que se procesen mis datos de forma anónima para fines estadísticos"
            />
          </Grid>
          <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
            <FormControlLabel
              control={
                <Controller
                  name="acceptTerms"
                  control={control}
                  defaultValue={false}
                  rules={{
                    required:
                      "Es obligatorio aceptar la política de privacidad",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                      sx={{
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  )}
                />
              }
              label={
                <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                  He leído y acepto la política de privacidad
                </Typography>
              }
            />
            <ErrorMessage>
              {errors.acceptTerms?.message?.toString()}
            </ErrorMessage>
          </Grid>
        </Grid>
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
              Registrar usuario
            </Button>
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={goToLogin}>
              Volver
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
