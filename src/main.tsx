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
      main: "#5de8dc",
    },
    info: {
      main: "#66b6dc",
    },
    background: {
      default: "#e4dfdf",
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
