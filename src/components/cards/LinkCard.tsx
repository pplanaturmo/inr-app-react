import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";
import useTheme from "@mui/material/styles/useTheme";

type LinkCardProps = {
  title: string;
  link: string;
  description: string;
};

export default function LinkCard({ title, link, description }: LinkCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: theme.palette.secondary.main,
        width: "80%",
        color: "black",
        marginBottom: 2,
        fontSize: "4rem",
        textAlign: "center",
        boxShadow: "unset",
        border: "solid black 2px",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {" "}
          {description}
        </Typography>
        <Typography variant="body2" color={"blueviolet"} gutterBottom>
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            color="inherit"
            fontSize={"1rem"}
          >
            Acceder al recurso
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
