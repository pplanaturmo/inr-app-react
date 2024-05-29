import Box from "@mui/material/Box/Box";
import LinkCard from "../../components/cards/LinkCard";
import { pages } from "../../constants/linkInfo";

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
