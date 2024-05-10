import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";

import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const logUser = () => {
    console.log("registrado");
  };

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register", { replace: true });
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
        <Typography variant="h6" align="center" margin="dense">
          Iniciar Sesión
        </Typography>
        <Grid
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
          <Grid item xs={12} sm={6}>
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
              color="primary"
              onClick={handleSubmit(logUser)}
            >
              Conectarse
            </Button>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={goToRegister}
            >
              Registrarse
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
