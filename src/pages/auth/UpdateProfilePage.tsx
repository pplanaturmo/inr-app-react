import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import ErrorMessage from "../../components/ErrorMessage";
import Typography from "@mui/material/Typography/Typography";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { useAppStore } from "../../store/useAppStore";

import { useNavigate } from "react-router-dom";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField/TextField";

import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { formatNumberArray } from "../../utils/numberFormat";
import Spinner from "../../components/Spinner";
import { updateUserSchema } from "../../schemas/updateUserSchema";
import { updateUser } from "../../services/userService";

export default function UpdateProfilePage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { user, loading, rangeInrList, dosePatternList, setUser, setLoading } =
    useAppStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const validatedData = updateUserSchema.parse(data);
    try {
      const userData = await updateUser(setLoading, validatedData, user?.id);
      if (userData) {
        setUser(userData);
        goToProfile();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/inr-app/profile", { replace: true });
  };

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const fieldWidth = isLgUp ? "50%" : isSmUp ? "70%" : "90%";

  return (
    <>
      {" "}
      {loading ? (
        <Spinner />
      ) : (
        <Box
          px={3}
          py={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          width={"100%"}
        >
          <Typography
            variant="h4"
            align="center"
            margin="dense"
            marginBottom={2}
          >
            Actualizar datos de usuario
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            width={"100%"}
          >
            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              width={fieldWidth}
            >
              <TextField
                required
                id="name"
                label="Nombre"
                fullWidth
                margin="dense"
                defaultValue={user?.name}
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
            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              width={fieldWidth}
            >
              <TextField
                required
                id="surname"
                label="Apellidos"
                fullWidth
                margin="dense"
                defaultValue={user?.surname}
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
              <ErrorMessage>
                {errors.surnames?.message?.toString()}
              </ErrorMessage>
            </Grid>
            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              sx={{ width: fieldWidth }}
            >
              <TextField
                required
                id="email"
                label="Email"
                fullWidth
                margin="dense"
                defaultValue={user?.email}
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
            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              sx={{ width: fieldWidth }}
            >
              <Controller
                name="rangeInr"
                control={control}
                defaultValue={user?.rangeInr}
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
                      value={field.value}
                      sx={{ backgroundColor: "white", width: "100%" }}
                    >
                      {rangeInrList.map((range) => (
                        <MenuItem
                          key={range.id}
                          value={range.id}
                        >
                          {range.description}. Rango terapéutico:{" "}
                          {range.minLevel}-{range.maxLevel}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              sx={{ width: fieldWidth }}
            >
              <Controller
                name="dosePattern"
                control={control}
                defaultValue={user?.dosePattern}
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
                      value={field.value}
                      sx={{ backgroundColor: "white", width: "100%" }}
                    >
                      {dosePatternList.map((pattern) => (
                        <MenuItem
                          key={pattern.id}
                          value={pattern.id}
                        >
                          <Typography
                            display={"flex"}
                            flexWrap={"wrap"}
                            width={"100%"}
                          >
                            Nivel:{pattern.level} - Medicamento:{pattern.drug} -
                            Patrón: ( {formatNumberArray(pattern.patternValue)}{" "}
                            )
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                    {fieldState.error && (
                      <Typography
                        variant="body2"
                        color="error"
                      >
                        {fieldState.error.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
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
                Actualizar datos de usuario
              </Button>
            </Box>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={goToProfile}
              >
                Volver
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
