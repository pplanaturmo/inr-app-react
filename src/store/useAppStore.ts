import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import {
  Dosage,
  DosePatternResponse,
  ExpectedMeasurementDate,
  Observation,
  RangeInrResponse,
  UserResponse,
} from "../types";

interface AppState {
  user: UserResponse | null;
  dosageDetails: Dosage | null;
  dosages: Dosage[];
  observationDetails: Observation | null;
  observations: Observation[];
  loading: boolean;
  expectedMeasurementDate: ExpectedMeasurementDate | null;
  rangeInrList: RangeInrResponse[];
  dosePatternList: DosePatternResponse[];
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
  setObservationDetails: (observationDetails: Observation) => void;
  getObservationDetails: () => Observation;
  clearObservationDetails: () => void;
  setObservations: (observations: Observation[]) => void;
  getObservations: () => Observation[];
  addObservation: (observation: Observation) => void;
  clearObservations: () => void;
  setLoading: (isLoading: boolean) => void;
  setExpectedMeasurementDate: (
    expectedMeasurementDate: ExpectedMeasurementDate
  ) => void;
  getExpectedMeasurementDate: () => ExpectedMeasurementDate;
  clearExpectedMeasurementDate: () => void;
  setRangeInrList: (rangeInrList: RangeInrResponse[]) => void;
  getRangeInrList: () => RangeInrResponse[];
  clearRangeInrList: () => void;
  setDosePatternList: (dosePatternList: DosePatternResponse[]) => void;
  getDosePatternList: () => DosePatternResponse[];
  clearDosePatternList: () => void;
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
        rangeInrList: [],
        dosePatternList: [],
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
        setObservationDetails: (observationDetails: Observation) =>
          set({ observationDetails }),
        getObservationDetails: () =>
          get().observationDetails ?? ({} as Observation),
        clearObservationDetails: () => set({ observationDetails: null }),
        setObservations: (observations: Observation[]) => set({ observations }),
        getObservations: () => get().observations,
        addObservation: (observation: Observation) =>
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
        setRangeInrList: (rangeInrList: RangeInrResponse[]) =>
          set({ rangeInrList }),
        getRangeInrList: () => get().rangeInrList,
        clearRangeInrList: () => set({ rangeInrList: [] }),
        setDosePatternList: (dosePatternList: DosePatternResponse[]) =>
          set({ dosePatternList }),
        getDosePatternList: () => get().dosePatternList,
        clearDosePatternList: () => set({ dosePatternList: [] }),
      }),
      {
        name: "appStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
