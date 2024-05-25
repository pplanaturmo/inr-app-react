import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";
import useTheme from "@mui/material/styles/useTheme";

type LinkCardProps = {
  link: string;
  description: string;
  backgroundColor: string;
};

export default function LinkCard({
  link,
  description,
  backgroundColor,
}: LinkCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: backgroundColor || theme.palette.background.default,
        color: "black",
        marginBottom: 2,
        fontSize: "4rem",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="body2">
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            color="inherit"
            fontSize={"1rem"}
          >
            {description}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
