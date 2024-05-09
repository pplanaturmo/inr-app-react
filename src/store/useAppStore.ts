import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface AppState {}
export const useAppStore = create<AppState>()(
  devtools(
    persist((get, set, api) => ({}), {
      name: "appStorage",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
