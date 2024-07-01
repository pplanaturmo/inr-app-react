import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker/MobileDatePicker";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

import Button from "@mui/material/Button/Button";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";

import { ObservationForm, UserResponse } from "../../types";
import { useAppStore } from "../../store/useAppStore";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { registerObservation } from "../../services/observationsService";
import { CauseEnum, causeOptions } from "../../constants/causesOptions";
import TextField from "@mui/material/TextField/TextField";

type props = {
  handleClose: () => void;
  fetchData: () => Promise<void>;
};

export default function RegisterObservationPage({
  handleClose,
  fetchData,
}: props) {
  dayjs.locale("es");

  const now = dayjs();

  const { control, handleSubmit, reset } = useForm<ObservationForm>({
    defaultValues: {
      date: now,
      cause: "",
      description: "",
    },
  });

  const user: UserResponse = useAppStore((state) => state.getUser());
  const navigate = useNavigate();

  const onSubmit = async (data: ObservationForm) => {
    try {
      await registerObservation(data, user);
      fetchData();
      handleClose();
      reset();
      navigate("/inr-app/observations/", { replace: true });
    } catch (error) {
      console.error("Error registering observation:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h6">Añadir Observación</Typography>
      <Controller
        name="date"
        control={control}
        rules={{ required: "La fecha es obligatoria" }}
        render={({ field }) => (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="es"
            dateFormats={{ normalDate: "DD/MM/YYYY" }}
          >
            <MobileDatePicker
              {...field}
              label="Fecha"
              onChange={(newDate: Dayjs | null) => field.onChange(newDate)}
              slots={{
                textField: (props) => (
                  <TextField
                    {...props}
                    fullWidth
                    required
                  />
                ),
              }}
              // renderInput={(
              //   params: JSX.IntrinsicAttributes & {
              //     variant?: TextFieldVariants | undefined;
              //   } & Omit<
              //       | FilledTextFieldProps
              //       | OutlinedTextFieldProps
              //       | StandardTextFieldProps,
              //       "variant"
              //     >
              // ) => (
              //   <TextField
              //     {...params}
              //     fullWidth
              //     required
              //   />
              // )}
              sx={{ backgroundColor: "white" }}
            />
          </LocalizationProvider>
        )}
      />
      <Controller
        name="cause"
        control={control}
        rules={{ required: "El motivo es obligatorio" }}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            error={!!fieldState.error}
          >
            <InputLabel id="cause-label">Motivo</InputLabel>
            <Select
              {...field}
              required
              labelId="cause-label"
              label="Motivo"
              sx={{ backgroundColor: "white" }}
              onChange={(event) => field.onChange(event.target.value)}
            >
              {Object.keys(causeOptions).map((key) => (
                <MenuItem
                  key={key}
                  value={key}
                >
                  {causeOptions[key as CauseEnum]}
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
      <Controller
        name="description"
        control={control}
        rules={{ required: "La descripción es obligatoria" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            required
            label="Descripción"
            multiline
            rows={4}
            sx={{ backgroundColor: "white" }}
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => reset()}
        >
          Reiniciar formulario
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Enviar observación
        </Button>
      </Box>
    </Box>
  );
}
