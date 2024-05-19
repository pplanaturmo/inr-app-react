import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#b8e6b5",
    },
    secondary: {
      main: "#6b4de8",
    },
    info: {
      main: "#ffa726",
    },
    background: {
      default: "#e4dfdf",
      paper: "rgba(251,242,242,0.86)",
    },
    success: {
      main: "#0ef11d",
    },
    warning: {
      main: "#ffff00",
    },
  },
};

const customTheme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
