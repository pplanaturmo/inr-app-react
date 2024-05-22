import React, { ReactNode, createContext, useContext, useState } from "react";

interface SnackbarContextType {
  openSnackbar: (
    message: string,
    severity?: "success" | "error" | "info" | "warning"
  ) => void;
  closeSnackbar: () => void;
  snackbarMessage: string | null;
  snackbarSeverity: "success" | "error" | "info" | "warning" | null;
}

const SnackbarContext = createContext<SnackbarContextType>({
  openSnackbar: () => {},
  closeSnackbar: () => {},
  snackbarMessage: null,
  snackbarSeverity: null,
});

export const useSnackbar = () => useContext(SnackbarContext);

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning" | null
  >(null);

  const openSnackbar = (
    message: string,
    severity?: "success" | "error" | "info" | "warning"
  ) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity || "info");
  };

  const closeSnackbar = () => {
    setSnackbarMessage(null);
    setSnackbarSeverity(null);
  };

  return (
    <SnackbarContext.Provider
      value={{ openSnackbar, closeSnackbar, snackbarMessage, snackbarSeverity }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
