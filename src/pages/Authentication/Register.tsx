import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
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
import { RegisterRequestSchema } from "../../schemas";
import { RegisterRequest } from "../../interfaces";
import { z } from "zod";

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const registerUser = async (data: FormData) => {
    console.log("registrado");
    await onSubmit(data);
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/", { replace: true });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Validate form data
      const validatedData = RegisterRequestSchema.parse(
        data as RegisterRequest
      );

      // If validation passes, proceed with form submission
      const response = await registerUser(validatedData);
      console.log(response);
      // Handle successful registration
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation error:", error.errors);
        // Handle validation error (e.g., display error messages to the user)
      } else {
        console.error("Registration failed:", error);
        // Handle registration failure
      }
    }
  };

  // const onSubmit: SubmitHandler<RegisterRequest> = (data) => console.log(data);

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
              {...register("fullname", {
                required: "El nombre es obligatorio",
              })}
              error={errors.name ? true : false}
            />
            <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="surnames"
              label="Apellidos"
              fullWidth
              margin="dense"
              {...register("surnames", {
                required: "Los apellidos son obligatorios",
              })}
              error={errors.surnames ? true : false}
            />
            <ErrorMessage>{errors.surnames?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              margin="dense"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
              })}
              error={errors.email ? true : false}
            />
            <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
          </Grid>
          <Grid item xs={12} sm={9} md={7}>
            <TextField
              required
              id="idCard"
              label="DNI"
              fullWidth
              margin="dense"
              {...register("idCard", {
                required: "El DNI es obligatorio",
              })}
              error={errors.email ? true : false}
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
              {...register("healthCard", {
                required:
                  "El número completo de la tarjeta sanitaria es obligatorio",
              })}
              error={errors.healthCard ? true : false}
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
              {...register("phone", {
                required: "El número de teléfono es obligatorio",
              })}
              error={errors.phone ? true : false}
            />
            <ErrorMessage>{errors.phone?.message?.toString()}</ErrorMessage>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <TextField
            required
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            margin="dense"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            error={errors.password ? true : false}
          />
          <ErrorMessage>{errors.password?.message?.toString()}</ErrorMessage>
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <TextField
            required
            id="confirmPassword"
            label="Confirmar Contraseña"
            type="password"
            fullWidth
            margin="dense"
            {...register("confirmPassword", {
              required: "La confirmación de contraseña es obligatoria",
            })}
            error={errors.confirmPassword ? true : false}
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
                render={({ field }) => <Checkbox {...field} />}
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

        <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit(onSubmit)}
            >
              Registrar usuario
            </Button>
          </Box>
          <Box mt={3}>
            <Button variant="contained" color="success" onClick={goToLogin}>
              Volver
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
