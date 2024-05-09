import { z } from "zod";

export const RegisterRequestSchema = {
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  idCard: z.string(),
  healthCard: z.string(),
  phone: z.number(),
  dataConsent: z.string(),
};
