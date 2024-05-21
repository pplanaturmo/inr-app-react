import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { DosageResponse, ObservationResponse, UserResponse } from "../types";

interface AppState {
  user: UserResponse | null;
  dosageDetails: DosageResponse | null;
  dosages: DosageResponse[];
  observationDetails: ObservationResponse | null;
  observations: ObservationResponse[];
  loading: boolean;
  setUser: (user: UserResponse) => void;
  getUser: () => UserResponse;
  clearUser: () => void;
  isFieldNull: (fieldName: keyof UserResponse) => boolean;
  setDosageDetails: (dosageDetails: DosageResponse) => void;
  getDosageDetails: () => DosageResponse;
  clearDosageDetails: () => void;
  setDosages: (dosages: DosageResponse[]) => void;
  addDosage: (dosage: DosageResponse) => void;
  clearDosages: () => void;
  setObservationDetails: (observationDetails: ObservationResponse) => void;
  getObservationDetails: () => ObservationResponse;
  clearObservationDetails: () => void;
  setObservations: (observations: ObservationResponse[]) => void;
  addObservation: (observation: ObservationResponse) => void;
  clearObservations: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        dosageDetails: null,
        dosages: [],
        observationDetails: null,
        observations: [],
        loading: false,
        setUser: (user: UserResponse) => set({ user }),
        getUser: () => get().user ?? ({} as UserResponse),
        isFieldNull: (fieldName: keyof UserResponse) => {
          const user = get().user;
          return !user || user[fieldName] === null;
        },
        clearUser: () => set({ user: null }),
        setDosageDetails: (dosageDetails: DosageResponse) =>
          set({ dosageDetails }),
        getDosageDetails: () => get().dosageDetails ?? ({} as DosageResponse),
        clearDosageDetails: () => set({ dosageDetails: null }),
        setDosages: (dosages: DosageResponse[]) => set({ dosages }),
        addDosage: (dosage: DosageResponse) =>
          set((state) => ({ dosages: [...state.dosages, dosage] })),
        clearDosages: () => set({ dosages: [] }),
        setObservationDetails: (observationDetails: ObservationResponse) =>
          set({ observationDetails }),
        getObservationDetails: () =>
          get().observationDetails ?? ({} as ObservationResponse),
        clearObservationDetails: () => set({ observationDetails: null }),
        setObservations: (observations: ObservationResponse[]) =>
          set({ observations }),
        addObservation: (observation: ObservationResponse) =>
          set((state) => ({
            observations: [...state.observations, observation],
          })),
        clearObservations: () => set({ observations: [] }),
        setLoading: (isLoading) => set({ loading: isLoading }),
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
