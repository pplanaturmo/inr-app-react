// import React, { useState } from "react";

// import { NavLink } from "react-router-dom";
// // import { ROUTER_PATHS } from "../../../constants";
// import Drawer from "./drawer/Drawer";

// import Box from "@mui/material/Box/Box";
// import { Topbar } from "./topbar/Topbar";
// import CssBaseline from "@mui/material/CssBaseline/CssBaseline";

// export const Layout = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   // const { isLogged } = useIsLogged();

//   return (
//     <React.Fragment>
//       {isLogged() ? (
//         <Box sx={{ display: "flex" }}>
//           <CssBaseline />
//           <Topbar
//             handleDrawerOpen={handleDrawerOpen}
//             open={open}
//           />
//           <Drawer
//             open={open}
//             handleDrawerClose={handleDrawerClose}
//           />
//           <Box
//             component="main"
//             sx={{ flexGrow: 1, p: 3 }}
//           ></Box>
//         </Box>
//       ) : (
//         <NavLink to={ROUTER_PATHS.login} />
//       )}
//     </React.Fragment>
//   );
// };
