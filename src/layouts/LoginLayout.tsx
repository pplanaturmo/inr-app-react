import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Box from "@mui/material/Box/Box";
import ProjectIcon from "../components/icon-components/ProjectIcon";

export default function LoginLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <ProjectIcon
          width="100px"
          height="100px"
          style={{ marginBottom: "20px" }}
        />
        <ProjectIcon
          width="50px"
          height="50px"
        />
        <Outlet />

        <Footer />
      </Box>
    </>
  );
}
