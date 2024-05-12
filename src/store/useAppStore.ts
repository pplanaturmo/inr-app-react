import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { AuthenticatedUser, LoginRequest } from "../interfaces";

interface AppStateProps {
  isAuthenticated: boolean;
  user: AuthenticatedUser | null;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const useAppStore = create<AppStateProps>()(
  devtools(
    persist((get, set, api) => ({}), {
      name: "appStorage",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
