import Box from "@mui/material/Box/Box";
import LinkCard from "../../components/cards/LinkCard";
import { pages } from "../../constants/linkInfo";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";

export default function InformationPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={"80%"}
      mx="auto"
    >
      <Paper sx={{ margin: "1rem", maxWidth: "18rem" }}>
        <Typography
          variant="h6"
          align="center"
          margin="dense"
          padding={2}
        >
          ENLACES DE INTERÉS
        </Typography>
      </Paper>
      {pages.map(
        (
          data: { title: string; link: string; description: string },
          index: number
        ) => (
          <LinkCard
            key={index}
            title={data.title}
            link={data.link}
            description={data.description}
          />
        )
      )}
    </Box>
  );
}
