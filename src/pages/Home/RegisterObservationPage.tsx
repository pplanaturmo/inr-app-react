import React, { useState } from "react";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

import { CauseEnum, CauseOptions } from "../../constants/CauseOptions";
import { Dayjs } from "dayjs";
import { DosageResponse, ObservationResponse } from "../../types";
import ObservationCard from "../../components/cards/ObservationCard";
import DosageCard from "../../components/cards/DosageCard";

export default function RegisterObservationPage() {
  const [date, setDate] = useState<Dayjs | null | undefined>(null);
  const [cause, setCause] = useState<CauseEnum | string>("");
  const [description, setDescription] = useState<string>("");

  const handleClear = () => {
    setDate(null);
    setCause("");
    setDescription("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      date,
      cause,
      description,
    });
  };

  const observation: ObservationResponse = {
    date: new Date(),
    cause: "causa",
    description: "descripcion",
  };

  const dosage: DosageResponse = {
    id: 1,
    date: new Date(),
    value: 0.25,
    taken: true,
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
      <DatePicker
        label="Fecha"
        value={date}
        onChange={(newDate) => setDate(newDate)}
        slots={{
          textField: (props) => <TextField {...props} fullWidth />,
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="Causa-label">Motivo</InputLabel>
        <Select
          labelId="cause-label"
          value={cause}
          onChange={(event) => setCause(event.target.value as CauseEnum)}
          label="Motivo"
        >
          {Object.values(CauseOptions).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Descripción"
        value={description}
        onChange={(event: {
          target: { value: React.SetStateAction<string> };
        }) => setDescription(event.target.value)}
        multiline
        rows={4}
        fullWidth
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Reiniciar formulario
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Enviar observación
        </Button>
      </Box>
      <ObservationCard observation={observation} />
      <DosageCard dosage={dosage} />
    </Box>
  );
}
