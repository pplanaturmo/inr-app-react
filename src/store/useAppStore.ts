import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import {
  Dosage,
  ExpectedMeasurementDate,
  ObservationResponse,
  UserResponse,
} from "../types";

interface AppState {
  user: UserResponse | null;
  dosageDetails: Dosage | null;
  dosages: Dosage[];
  observationDetails: ObservationResponse | null;
  observations: ObservationResponse[];
  loading: boolean;
  expectedMeasurementDate: ExpectedMeasurementDate | null;
  setUser: (user: UserResponse) => void;
  getUser: () => UserResponse;
  clearUser: () => void;
  isFieldNull: (fieldName: keyof UserResponse) => boolean;
  setDosageDetails: (dosageDetails: Dosage) => void;
  getDosageDetails: () => Dosage;
  clearDosageDetails: () => void;
  setDosages: (dosages: Dosage[]) => void;
  getDosages: () => Dosage[];
  addDosage: (dosage: Dosage) => void;
  clearDosages: () => void;
  setObservationDetails: (observationDetails: ObservationResponse) => void;
  getObservationDetails: () => ObservationResponse;
  clearObservationDetails: () => void;
  setObservations: (observations: ObservationResponse[]) => void;
  getObservations: () => ObservationResponse[];
  addObservation: (observation: ObservationResponse) => void;
  clearObservations: () => void;
  setLoading: (isLoading: boolean) => void;
  setExpectedMeasurementDate: (
    expectedMeasurementDate: ExpectedMeasurementDate
  ) => void;
  getExpectedMeasurementDate: () => ExpectedMeasurementDate;
  clearExpectedMeasurementDate: () => void;
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
        expectedMeasurementDate: null,
        setUser: (user: UserResponse) => set({ user }),
        getUser: () => get().user ?? ({} as UserResponse),
        isFieldNull: (fieldName: keyof UserResponse) => {
          const user = get().user;
          return !user || user[fieldName] === null;
        },
        clearUser: () => set({ user: null }),
        setDosageDetails: (dosageDetails: Dosage) => set({ dosageDetails }),
        getDosageDetails: () => get().dosageDetails ?? ({} as Dosage),
        clearDosageDetails: () => set({ dosageDetails: null }),
        setDosages: (dosages: Dosage[]) => set({ dosages }),
        getDosages: () => get().dosages,
        addDosage: (dosage: Dosage) =>
          set((state) => ({ dosages: [...state.dosages, dosage] })),
        clearDosages: () => set({ dosages: [] }),
        setObservationDetails: (observationDetails: ObservationResponse) =>
          set({ observationDetails }),
        getObservationDetails: () =>
          get().observationDetails ?? ({} as ObservationResponse),
        clearObservationDetails: () => set({ observationDetails: null }),
        setObservations: (observations: ObservationResponse[]) =>
          set({ observations }),
        getObservations: () => get().observations,
        addObservation: (observation: ObservationResponse) =>
          set((state) => ({
            observations: [...state.observations, observation],
          })),
        clearObservations: () => set({ observations: [] }),
        setLoading: (isLoading) => set({ loading: isLoading }),
        setExpectedMeasurementDate: (
          expectedMeasurementDate: ExpectedMeasurementDate
        ) => set({ expectedMeasurementDate }),
        getExpectedMeasurementDate: () =>
          get().expectedMeasurementDate ?? ({} as ExpectedMeasurementDate),
        clearExpectedMeasurementDate: () =>
          set({ expectedMeasurementDate: null }),
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
