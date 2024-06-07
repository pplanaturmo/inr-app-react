import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/router";
import "react-toastify/dist/ReactToastify.css";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#157a6e",
    },
    secondary: {
      main: "#d8fefa",
    },
    info: {
      main: "#cfe76a",
    },
    background: {
      default: "#f2f2f2",
      paper: "#ffffff",
    },
    success: {
      main: "#0ef11d",
    },
    warning: {
      main: "#FFC107",
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
    <ToastContainer
      position="top-center"
      autoClose={600}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
