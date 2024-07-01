import Box from "@mui/material/Box/Box";

import Grid from "@mui/material/Grid/Grid";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useLocation, Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const legalLink = location.pathname.startsWith("/inr-app")
    ? "/inr-app/legal"
    : "/legal";

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid #000",
        marginTop: "auto",
        p: 4,
        backgroundColor: "#3c3c3c",
        display: "flex",
        justifyContent: "center",
        color: theme.palette.secondary.main,
      }}
      component="footer"
    >
      <Grid container justifyContent="space-around" alignItems="space-around">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom align="center">
            <Link sx={{ color: theme.palette.secondary.main }}>
              Contacta con nosotros
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            sx={{ fontWeight: "900", fontSize: "2rem", color: "#F7DCDC" }}
          >
            Aplicación INR
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Dirección: 123 Calle Aleatoria, Cartago, Delenda Est
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Teléfono: +34 555 555 555
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center"></Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Siguenos: Facebook | Twitter | Instagram
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={4}>
          <Typography variant="h6" align="center">
            © {new Date().getFullYear()} Aplicación INR. Todos los derechos reservados.
          </Typography>
          <Box mt={1} sx={{ textAlign: "center" }}>
            <RouterLink
              to={legalLink}
              style={{
                textDecoration: "underline",
                color: theme.palette.warning.main,
              }}
            >
              Aviso Legal y Política de protección de datos
            </RouterLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
