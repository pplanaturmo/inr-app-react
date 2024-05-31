import Card from "@mui/material/Card/Card";
import { DosePatternResponse, RangeInrResponse } from "../../types";
import Typography from "@mui/material/Typography/Typography";
import CardContent from "@mui/material/CardContent/CardContent";
import Box from "@mui/material/Box/Box";
import useTheme from "@mui/material/styles/useTheme";
import { useAppStore } from "../../store/useAppStore";
import { formatNumberArray } from "../../utils/numberFormat";
import { UserRole, roleOptions } from "../../constants/UserRole";
import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";

export default function ProfileCard() {
  const {
    user,

    rangeInrList,
    dosePatternList,
  } = useAppStore();

  const theme = useTheme();
  const titleStyle = {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  };
  const userDosePattern: DosePatternResponse | undefined = dosePatternList.find(
    (pattern) => pattern.level === user?.dosePattern
  );
  const userRangeInr: RangeInrResponse | undefined = rangeInrList.find(
    (range) => range.id === user?.rangeInr
  );

  if (!user) {
    return <Typography variant="h6">No hay datos del usuario</Typography>;
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          borderRadius: "16px",
          width: "100%",
          margin: 4,
          padding: 2,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <CardContent>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Nombre:
            </Typography>
            <Typography variant="h6">{user?.name}</Typography>
          </Box>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Apellidos:
            </Typography>
            <Typography variant="h6">{user?.surname}</Typography>
          </Box>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Correo Electrónico:
            </Typography>
            <Typography variant="h6">{user?.email}</Typography>
          </Box>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Rango de Inr:
            </Typography>
            <Typography variant="h6">
              {" "}
              {userRangeInr?.description}. Rango terapéutico:{" "}
              {userRangeInr?.minLevel}-{userRangeInr?.maxLevel}
            </Typography>
          </Box>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Patrón de dosificación:
            </Typography>
            <Typography variant="h6">Nivel:{userDosePattern?.level}</Typography>
            <Typography variant="h6">
              Medicamento:{userDosePattern?.drug}
            </Typography>
            <Typography variant="h6">
              {userDosePattern?.patternValue
                ? `(${formatNumberArray(userDosePattern.patternValue)})`
                : ""}
            </Typography>
          </Box>
          <Box m={2}>
            <Typography variant="h5" sx={titleStyle}>
              Función:
            </Typography>
            <Typography variant="h6">
              {roleOptions[user.role as UserRole]}
            </Typography>
          </Box>
          <Box
            m={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box m={3}>
              <Button
                variant="contained"
                component={NavLink}
                to="/inr-app/profile/update"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>Editar</Typography>
                <Typography>datos</Typography>
              </Button>
            </Box>
            <Box m={3} width={"auto"}>
              <Button
                variant="contained"
                component={NavLink}
                to="/inr-app/profile/password"
                sx={{
                  backgroundColor: theme.palette.warning.main,
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>Cambiar</Typography>
                <Typography>contraseña</Typography>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
