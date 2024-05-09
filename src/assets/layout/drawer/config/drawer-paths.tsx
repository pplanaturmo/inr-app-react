import { ReactNode } from "react";
import { ROUTER_PATHS } from "../../../../../constants";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

export interface IPath {
  name: string;
  path: string;
/*   permissions: string[]; */
  id?: string;
  icon: ReactNode;
}

export function drawerPaths(): IPath[] {
  return [
    {
      name: "Logs Viewer",
      id: "drawer-button-logs-front",
      path: ROUTER_PATHS.logs,
      icon: <TrackChangesIcon/>
/*       permissions: [UserRoleEnum.Bidder, UserRoleEnum.Obligated, UserRoleEnum.Verifier, UserRoleEnum.Admin] */
    }
  ];
}
