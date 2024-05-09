import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { LoginRequestInterface, RegisterRequestInterface } from "../schemas";

interface AppState {
  loginRequest: LoginRequestInterface;
  registerRequest: RegisterRequestInterface;
}
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (get, set, api) => ({
        loginRequest: {} as LoginRequestInterface,
        registerRequest: {} as RegisterRequestInterface,
        setLoginRequest: (request: LoginRequestInterface) =>
          api.setState((state) => ({ ...state, loginRequest: request })),
        setRegisterRequest: (request: RegisterRequestInterface) =>
          api.setState((state) => ({ ...state, registerRequest: request })),
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
