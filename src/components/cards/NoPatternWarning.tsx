import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";

export default function NoPatternWarning() {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "warning.main",
        color: "black",
        border: "2px solid black",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
        >
          NO TIENE ASIGNADO PATRON DE MEDIDA
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
        >
          CONTACTE CON EL MÉDICO URGENTEMENTE
        </Typography>
      </CardContent>
    </Card>
  );
}
