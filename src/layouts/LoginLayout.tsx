import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Box from "@mui/material/Box/Box";

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
        <div>Login Layout</div>
        <Outlet />

        <Footer />
      </Box>
    </>
  );
}
