import { SNACKBAR, SnackbarService } from "@movicoders/ui";
import { useResolve } from "@movicoders/di";
import { Alert, AlertColor, Snackbar as MUISnackbar } from "@mui/material";
import { Trans } from "react-i18next";
import Icon from "../icons/icon";
import { snackbarStyles } from "./snackbarStyles";
import { alertBackgroundColor } from "./snackbar-helper";

export const Snackbar = () => {
  const {
    state: { isVisible, message, severity },
    hide
  } = useResolve<SnackbarService>(SNACKBAR);

  const styles = snackbarStyles;

  return (
    <MUISnackbar open={isVisible} id="snackbar" onClick={hide} onClose={hide}>
      <Alert
        id="snackbar-alert"
        iconMapping={{
          success: <Icon icon="icon-success" color="white" />,
          error: <Icon icon="icon-error" color="white" />,
          warning: <Icon icon="icon-warning" color="white" />,
          info: <Icon icon="icon-info" color="white" />
        }}
        severity={severity as AlertColor}
        sx={{ backgroundColor: alertBackgroundColor(severity), ...styles.solid_alert, borderRadius: "1.75rem", alignItems: "center" }}
        action={<Icon icon="icon-close" color="white" size={24}/>}>
        <Trans i18nKey={message} />
      </Alert>
    </MUISnackbar>
  );
};
