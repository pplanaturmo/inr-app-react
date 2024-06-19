// import Box from "@mui/material/Box/Box";
// import UnderConstruction from "../../components/icon-components/UnderConstruction";
// import Typography from "@mui/material/Typography/Typography";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppStore } from "../../store/useAppStore";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import Button from "@mui/material/Button/Button";
import ErrorMessage from "../../components/ErrorMessage";
import TextField from "@mui/material/TextField/TextField";
import { updatePasswordSchema } from "../../schemas";
import { updatePassword } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper/Paper";

export default function UpdatePasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const { user, setLoading } = useAppStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const validatedData = updatePasswordSchema.parse(data);
    try {
      await updatePassword(setLoading, validatedData, user);
      goToProfile();
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
      <Box
        px={3}
        py={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
      >
        <Paper sx={{ margin: "1rem", maxWidth: "18rem" }}>
          <Typography
            variant="h6"
            align="center"
            margin="dense"
            padding={2}
          >
            ACTUALIZAR CONTRASEÑA
          </Typography>
        </Paper>
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
            sx={{ width: fieldWidth }}
          >
            <TextField
              required
              id="password"
              label="Nueva contraseña"
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

          <Grid
            item
            xs={12}
            sm={9}
            md={7}
            sx={{ width: "80%" }}
          >
            <TextField
              required
              id="confirmPassword"
              label="Confirmar nueva contraseña"
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
              Actualizar contraseña
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
    </>
  );
}
