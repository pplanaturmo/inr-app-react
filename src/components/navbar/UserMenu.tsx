import Grid from "@mui/material/Grid/Grid";
import CustomUserIcon from "../icon-components/CustomUserIcon";
import Typography from "@mui/material/Typography/Typography";

type UserMenuProps = {
  toggleDrawerUser: () => void;
  user: {
    name: string;
    surname: string;
    id: number;
    role: string;
    email: string;
    department: number;
    supervisor: number;
    rangeInr: number;
    dosePattern: number;
    accessToken: string;
    refreshToken: string;
  } | null;
};

export default function UserMenu({ toggleDrawerUser, user }: UserMenuProps) {
  return (
    <>
      {" "}
      <Grid
        item
        sm={1}
        textAlign={"center"}
        marginTop={3}
        display={"flex"}
        flexDirection={"column"}
      >
        <CustomUserIcon onClick={toggleDrawerUser} />
        <Typography overflow={"hidden"} noWrap>
          {user?.name}
        </Typography>
        <Typography overflow={"hidden"} noWrap>
          {user?.surname}
        </Typography>
      </Grid>
    </>
  );
}
