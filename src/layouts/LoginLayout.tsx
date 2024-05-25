import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Box from "@mui/material/Box/Box";
import ProjectIcon from "../components/icon-components/ProjectIcon";
import useTheme from "@mui/material/styles/useTheme";

export default function LoginLayout() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <ProjectIcon
          width="100px"
          height="100px"
          style={{ marginBottom: "2rem", marginTop: "3rem" }}
        />
        <Outlet />

        <Footer layoutType={"login"} />
      </Box>
    </>
  );
}
