import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { UserResponse } from "../types";

interface AppState {
  user: UserResponse | null;
}
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user: UserResponse) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
