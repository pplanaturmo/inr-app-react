import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../services/AuthenticationService";
import { useAppStore } from "../../store/useAppStore";
import { LoginRequest } from "../../types";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { useSnackbar } from "../../context/SnackbarContext";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const { setUser } = useAppStore();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const userData = await authenticateUser(data);
      console.log(userData);

      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register", { replace: true });
  };

  const { openSnackbar, closeSnackbar, snackbarMessage, snackbarSeverity } =
    useSnackbar();

  const handleClick = () => {
    openSnackbar("Hello, world!", "success");
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
              sx={{ backgroundColor: "white" }}
              {...register("email", {
                required: "El correo electrónico es obligatorio",
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
          <Grid item>
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
              onClick={handleSubmit(onSubmit)}
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

          <Box>
            <Button onClick={handleClick}>Show Snackbar</Button>
            <Snackbar
              open={Boolean(snackbarMessage)}
              autoHideDuration={6000}
              onClose={closeSnackbar}
              message={snackbarMessage}
              severity={snackbarSeverity}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
