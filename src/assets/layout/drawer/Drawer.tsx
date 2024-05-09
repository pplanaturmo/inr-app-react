import { drawerStyles } from "./components/styled-drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { MenuList } from "./components/MenuList";
import { drawerPaths } from "./config/drawer-paths";

export type IDrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export default function Drawer({ open, handleDrawerClose }: IDrawerProps) {
  const { Drawer, DrawerHeader } = drawerStyles;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <MenuOpenIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <MenuList open={open} paths={drawerPaths()} />
    </Drawer>
  );
}
