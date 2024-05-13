import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import Box from "@mui/material/Box/Box";
import useSessionUser from "../hooks/useSessionUser";
import { useEffect } from "react";

export default function LoginLayout() {
  const navigate = useNavigate();
  const user = useSessionUser();

  useEffect(() => {
    if (user) {
      navigate("/inr-app");
    }
    // else {
    //   navigate("/");
    // }
  }, [user, navigate]);

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
