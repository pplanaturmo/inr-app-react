import { z } from "zod";
import {
  dosageResponseSchema,
  loginRequestSchema,
  measurementResponseSchema,
  observationRequestSchema,
  registerRequestSchema,
  userSchema,
} from "../schemas";
import { measurementRequestSchema } from "../schemas/measurementRequestSchema";
import { dosageSchema } from "../schemas/dosageSchema";

// export type RegisterRequest = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
//   idCard: string;
//   healthCard: string;
//   phone: number;
//   dataConsent: string;
// };

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
export type Dosage = z.infer<typeof dosageSchema>;
