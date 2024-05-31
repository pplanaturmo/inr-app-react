import Box from "@mui/material/Box/Box";
import UnderConstruction from "../../components/icon-components/UnderConstruction";
import Typography from "@mui/material/Typography/Typography";

export default function UpdatePasswordPage() {
  return (
    <>
      {/* <Grid item xs={12} sm={9} md={7} sx={{ width: fieldWidth }}>
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
 */}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={"80%"}
        mx="auto"
      >
        <Typography>Actualización de contraseña</Typography>
        <UnderConstruction />
      </Box>
    </>
  );
}
