import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IPath } from "../config/drawer-paths";

export interface IMenuList {
  paths: IPath[];
  open: boolean
}

export const MenuList = ({ open, paths }: IMenuList) => {
  const navigate = useNavigate();

  return (
    <>
      <List>
        {paths.map((path, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 0,
                mt: 2
              }}
              onClick={() => {
                navigate(path.path);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                
                }}
              >
                {path.icon}
              </ListItemIcon>
              <ListItemText primary={path.name} sx={{ opacity: open ? 1 : 0 }} /> 
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
