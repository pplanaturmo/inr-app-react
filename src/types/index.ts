import { z } from "zod";
import {
  loginRequestSchema,
  registerRequestSchema,
  userSchema,
} from "../schemas";
import { measurementRequestSchema } from "../schemas/measurementRequestSchema";
import { observationRequestSchema } from "../schemas/observationRequestSchema";
import { measurementResponseSchema } from "../schemas/measurementResponseSchema";
import { dosageResponseSchema } from "../schemas/dosageResponseSchema";

export type RegisterRequest = z.infer<typeof registerRequestSchema>;
export type RegisterData = Pick<
  RegisterRequest,
  | "name"
  | "surname"
  | "email"
  | "password"
  | "phone"
  | "healthCard"
  | "idCard"
  | "dataConsent"
>;
export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type UserResponse = z.infer<typeof userSchema>;
export type MeasurementRequest = z.infer<typeof measurementRequestSchema>;
export type ObservationResponse = z.infer<typeof observationRequestSchema>;
export type MeasurementResponse = z.infer<typeof measurementResponseSchema>;
export type DosageResponse = z.infer<typeof dosageResponseSchema>;
