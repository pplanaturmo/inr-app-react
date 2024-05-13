import { z } from "zod";
import {
  loginRequestSchema,
  registerRequestSchema,
  userSchema,
} from "../schemas";

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
