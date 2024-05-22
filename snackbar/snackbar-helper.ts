import { SnackbarColor } from "@movicoders/ui";
import { COLORS } from "../../../theme";

export const alertBackgroundColor = (severity: SnackbarColor | undefined) => {
  if (severity === "success") return COLORS.snackbarSuccess;
  if (severity === "error") return COLORS.snackbarError;
  if (severity === "warning") {
    return COLORS.snackbarWarning;
  }
  return COLORS.snackbarInfo;
};
