import Box from "@mui/material/Box/Box";
import underConstructionIcon from "../../assets/images/enconstruccion.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const UnderConstruction: React.FC = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const size = isLgUp ? "18rem" : isSmUp ? "14rem" : "12rem";
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
      >
        PÁGINA EN CONSTRUCCIÓN
      </Typography>
      <Box
        component="img"
        src={underConstructionIcon}
        alt="Project Icon"
        sx={{
          width: size,
          height: size,
          objectFit: "contain",
        }}
      />
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
      >
        TENGO A TODA MI GENTE
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}
      >
        TRABAJANDO EN ELLO...
      </Typography>
    </>
  );
};

export default UnderConstruction;
