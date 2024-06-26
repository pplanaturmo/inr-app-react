import { z } from "zod";
import {
  dosageResponseSchema,
  loginRequestSchema,
  measurementResponseSchema,
  observationSchema,
  registerRequestSchema,
  userSchema,
  measurementRequestSchema,
  dosageSchema,
  expectedDateSchema,
  observationResponseSchema,
  alertResponseSchema,
  rangeInrSchema,
  dosePatternSchema,
  updateUserSchema,
  updatePasswordSchema,
} from "../schemas";
import { Dayjs } from "dayjs";

export type RegisterRequest = z.infer<typeof registerRequestSchema>;
export type RegisterData = Pick<
  RegisterRequest,
  | "name"
  | "surname"
  | "email"
  | "password"
  | "rangeInr"
  | "dosePattern"
  | "dataConsent"
>;

export type ObservationForm = {
  date: Dayjs;
  cause: string;
  description: string;
};
export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type UserResponse = z.infer<typeof userSchema>;
export type MeasurementRequest = z.infer<typeof measurementRequestSchema>;
export type Observation = z.infer<typeof observationSchema>;
export type ObservationResponse = z.infer<typeof observationResponseSchema>;
export type ObservationRequest = Omit<ObservationResponse, "id">;
export type MeasurementResponse = z.infer<typeof measurementResponseSchema>;
export type DosageResponse = z.infer<typeof dosageResponseSchema>;
export type Dosage = z.infer<typeof dosageSchema>;
export type ExpectedMeasurementDate = z.infer<typeof expectedDateSchema>;
export type AlertResponse = z.infer<typeof alertResponseSchema>;
export type RangeInrResponse = z.infer<typeof rangeInrSchema>;
export type DosePatternResponse = z.infer<typeof dosePatternSchema>;
export type UpdateRequest = z.infer<typeof updateUserSchema>;
export type UpdatdePassword = z.infer<typeof updatePasswordSchema>;
