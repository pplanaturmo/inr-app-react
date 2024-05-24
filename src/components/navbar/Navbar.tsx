import AppBar from "@mui/material/AppBar/AppBar";

import { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, useTheme } from "@mui/material";
import { useAppStore } from "../../store/useAppStore";
import ProjectIcon from "../icon-components/ProjectIcon";

import MenuDrawer from "./MenuDrawer";
import MiddleButtons from "./MiddleButtons";
import UserMenu from "./UserMenu";
import MobileBar from "./MobileBar";
import UserDrawer from "./UserDrawer";

export default function Navbar() {
  const isTablet = useMediaQuery("(max-width:900px)");
  const drawerWidth = useMediaQuery("(max-width:600px)")
    ? "66%"
    : isTablet
    ? "50%"
    : "20%";

  const [drawerUserOpen, setDrawerUserOpen] = useState(false);

  const [drawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const toggleDrawerMenu = () => {
    setDrawerMenuOpen(!drawerMenuOpen);
  };
  const toggleDrawerUser = () => {
    setDrawerUserOpen(!drawerUserOpen);
  };
  const handleMenuClick = () => {
    setDrawerMenuOpen(false);
  };

  const handleUserClick = () => {
    setDrawerUserOpen(false);
  };

  // const { clearUser,user } = useAppStore();
  const {
    clearUser,
    clearDosageDetails,
    clearDosages,
    clearObservationDetails,
    clearObservations,
    user,
  } = useAppStore();

  const logoutUser = () => {
    clearUser();
    clearDosageDetails();
    clearDosages();

    clearObservationDetails();
    clearObservations();
  };
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <AppBar position="static">
        <Grid
          container
          width={"100%"}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sm={12}
            md={1}
            sx={{ margin: "2rem", display: "flex", justifyContent: "center" }}
          >
            <ProjectIcon width="4rem" height="4rem" />
          </Grid>

          {isMediumScreen && <MiddleButtons></MiddleButtons>}
          {isMediumScreen && (
            <UserMenu toggleDrawerUser={toggleDrawerUser} user={user} />
          )}
        </Grid>
        {!isMediumScreen && (
          <>
            <MobileBar
              toggleDrawerMenu={toggleDrawerMenu}
              toggleDrawerUser={toggleDrawerUser}
            />
          </>
        )}
      </AppBar>

      {!isMediumScreen && (
        <>
          <MenuDrawer
            drawerMenuOpen={drawerMenuOpen}
            toggleDrawerMenu={toggleDrawerMenu}
            drawerWidth={drawerWidth}
            handleMenuClick={handleMenuClick}
          />
        </>
      )}
      <UserDrawer
        drawerUserOpen={drawerUserOpen}
        toggleDrawerUser={toggleDrawerUser}
        drawerWidth={drawerWidth}
        handleUserClick={handleUserClick}
        logoutUser={logoutUser}
      />
    </>
  );
}
