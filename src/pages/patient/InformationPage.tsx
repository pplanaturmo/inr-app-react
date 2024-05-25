import Box from "@mui/material/Box/Box";
import LinkCard from "../../components/cards/LinkCard";
import useTheme from "@mui/material/styles/useTheme";
import { pages } from "../../constants/linkInfo";

export default function InformationPage() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={"80%"}
      mx="auto"
    >
      <Box>
        {pages.map(
          (data: { link: string; description: string }, index: number) => (
            <LinkCard
              key={index}
              link={data.link}
              description={data.description}
              backgroundColor={
                index % 2 === 0
                  ? theme.palette.info.light
                  : theme.palette.secondary.main
              }
            />
          )
        )}
      </Box>
    </Box>
  );
}
