import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #000",
        marginTop: "auto",
        p: 4,
        backgroundColor: "lightcoral",
        display: "flex",
        justifyContent: "center",
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
          <Typography variant="body2" gutterBottom align="center">
            Email: sanguiniusInr@medicalclinic.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom align="center">
            Follow us on: Facebook | Twitter | Instagram
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={4}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Sanguinius INR. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
