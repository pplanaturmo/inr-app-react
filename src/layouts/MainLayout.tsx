import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box/Box";
import useTheme from "@mui/material/styles/useTheme";

export default function MainLayout() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <div>Main Layout</div>

        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
