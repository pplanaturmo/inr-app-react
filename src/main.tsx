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
      // main: "#00796B",
      main: "#157a6e",
    },
    secondary: {
      // main: "#B2DFDB",
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
