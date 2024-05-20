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
          <Typography variant="h6" gutterBottom>
            <Link>Contacta con nosotros</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" gutterBottom>
            Medical Clinic Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Address: 123 Medical Street, City, Country
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Phone: +123 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Email: sanguiniusInr@medicalclinic.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
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
