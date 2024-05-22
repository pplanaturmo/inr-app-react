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

import { registerUser } from "../../services/AuthenticationService";
import Button from "@mui/material/Button/Button";
import { registerRequestSchema } from "../../schemas";

export default function RegisterPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const password = watch("password");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const validatedData = registerRequestSchema.parse(data);
    try {
      const response = await registerUser(validatedData);

      console.log(response);
      // Handle successful registration
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/", { replace: true });
  };

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
        <Typography variant="h4" align="center" margin="dense" marginBottom={2}>
          Registrarse en la aplicación
        </Typography>

        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="name"
              label="Nombre"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
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
          <Grid item xs={12} sm={9} md={7}>
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
          <Grid item xs={12} sm={6}>
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
          {/* <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="idCard"
              label="DNI"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("idCard", {
                required: "El DNI es obligatorio",
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
            <ErrorMessage>{errors.idCard?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="healthCard"
              label="Tarjeta sanitaria"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("healthCard", {
                required:
                  "El número completo de la tarjeta sanitaria es obligatorio",
              })}
              error={errors.healthCard ? true : false}
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
              {errors.healthCard?.message?.toString()}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="phone"
              label="Teléfono"
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "white" }}
              {...register("phone", {
                required: "El número de teléfono es obligatorio",
              })}
              error={errors.phone ? true : false}
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
            <ErrorMessage>{errors.phone?.message?.toString()}</ErrorMessage>
          </Grid> */}
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <TextField
            required
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            margin="dense"
            sx={{ backgroundColor: "white" }}
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

        <Grid item xs={12} sm={6}>
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

        <Grid item xs={12} sm={9} md={7}>
          <FormControlLabel
            control={
              <Controller
                name="consentData"
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
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="acceptTerms"
                  control={control}
                  defaultValue={false}
                  rules={{
                    required:
                      " Es obligatorio aceptar la política de privacidad",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      color="primary"
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
            <Button variant="contained" color="success" onClick={goToLogin}>
              Volver
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
