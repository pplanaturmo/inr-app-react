import Typography from "@mui/material/Typography/Typography";

export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Typography variant="inherit" color="textSecondary">
      {children}
    </Typography>
  );
}
