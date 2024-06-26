import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box/Box";
import useTheme from "@mui/material/styles/useTheme";

export default function MainLayout() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: "1 0 auto",
          p: 3,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
