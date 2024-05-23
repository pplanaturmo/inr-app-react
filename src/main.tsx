import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "./context/SnackbarContext";
import { router } from "./routes/router";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      // main: "#b8e6b5",
      main: "#e6ffe6",
    },
    secondary: {
      // main: "#6b4de8",
      main: "#ffe6cc",
    },
    info: {
      main: "#ffa726",
    },
    background: {
      // default: "#e4dfdf",
      default: "#f2f2f2",

      // paper: "rgba(251,242,242,0.86)",
      paper: "#ffffff",
    },
    success: {
      main: "#0ef11d",
    },
    warning: {
      // main: "#ffff00",
      main: "#b36b00",
    },
  },
};

const customTheme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <CssBaseline />
//     <ThemeProvider theme={customTheme}>
//       <BrowserRouter>
//         <SnackbarProvider>
//           <App />
//         </SnackbarProvider>
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>
// );
