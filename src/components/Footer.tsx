import Box from "@mui/material/Box/Box";

import Grid from "@mui/material/Grid/Grid";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";

type FooterProps = {
  layoutType: string;
};

export default function Footer({ layoutType }: FooterProps) {
  const legalLink =
    layoutType === "login" ? "/legal-warning" : "/inr-app/legal-warning";

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
        color: "white",
      }}
      component="footer"
    >
      <Grid container justifyContent="space-around" alignItems="space-around">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom align="center">
            <Link>Contacta con nosotros</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            sx={{ fontWeight: "900" }}
          >
            Sanguinius INR
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Dirección: 123 Calle Baal, Cartago, Delenda Est
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Teléfono: +34 555 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center"></Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Follow us on: Facebook | Twitter | Instagram
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={4}>
          <Typography variant="h6" align="center">
            © {new Date().getFullYear()} Sanguinius INR. All rights reserved.
          </Typography>
          <Box mt={1} sx={{ textAlign: "center" }}>
            <Link
              color="secondary"
              sx={{ textAlign: "center", color: "white" }}
              href={legalLink}
            >
              Aviso Legal y Política de protección de datos
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
