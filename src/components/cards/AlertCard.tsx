import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";

export default function AlertCard() {
  const levelToString;

  return (
    <Card
      sx={{
        borderRadius: 2,
        margin: 2,
        backgroundColor: level === "DANGEROUS" ? "red" : "yellow",
      }}
    >
      <CardContent>
        <Typography variant="h6">Alerta ID: {id}</Typography>
        <Typography variant="body1">
          Usuario: {userName} {userSurname}
        </Typography>
        <Typography variant="body1">Email: {userEmail}</Typography>
        <Typography variant="body1">
          Fecha: {new Date(date).toLocaleString()}
        </Typography>
        <Typography variant="body1">Nivel: {level}</Typography>
        <Button>Marcar como vista</Button>
      </CardContent>
    </Card>
  );
}
