import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { UserResponse } from "../types";

interface AppState {
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
  // getUser: () => UserResponse | null;
  getUser: () => UserResponse;
  clearUser: () => void;
  isFieldNull: (fieldName: keyof UserResponse) => boolean;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        setUser: (user: UserResponse) => set({ user }),
        getUser: () => get().user ?? ({} as UserResponse),
        clearUser: () => set({ user: null }),
        isFieldNull: (fieldName: keyof UserResponse) => {
          const user = get().user;
          return !user || user[fieldName] === null;
        },
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
